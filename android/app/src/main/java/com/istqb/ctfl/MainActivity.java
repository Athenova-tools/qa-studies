package com.istqb.ctfl;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.IOException;
import java.io.OutputStream;

public class MainActivity extends Activity {
    private WebView webView;
    private int insetTopPx = 0;
    private int insetBottomPx = 0;
    private long lastBackPress = 0;

    /* Desvia o conteúdo web das system bars: o header fixo desce
       --inset-top e o fundo da página sobe --inset-bottom. */
    private void applyInsetsToPage() {
        if (webView == null) return;
        float density = getResources().getDisplayMetrics().density;
        if (density <= 0) density = 1;
        int topCss = Math.round(insetTopPx / density);
        int bottomCss = Math.round(insetBottomPx / density);
        Log.d(TAG, "applyInsetsToPage topCss=" + topCss + " bottomCss=" + bottomCss);
        webView.evaluateJavascript(
                "(function(){var d=document.documentElement;if(!d)return;"
                + "d.style.setProperty('--inset-top','" + topCss + "px');"
                + "d.style.setProperty('--inset-bottom','" + bottomCss + "px');})();",
                null);
    }
    private boolean clearHistoryOnNextPage = false;
    private static final String TAG = "ISTQB_WV";
    private static final String HOME_URL = "file:///android_asset/www/index.html";
    private static final String ATTEMPTS_URL = HOME_URL + "?goto=attempts#stats-dashboard";
    private static final int REQ_FILE_CHOOSER = 101;
    private static final int REQ_SAVE_FILE = 102;

    /* Import: callback for the WebView <input type="file"> chooser */
    private ValueCallback<Uri[]> fileChooserCallback;
    /* Export: pending file content waiting for the user-chosen save location */
    private byte[] pendingSaveBytes;
    private static final String BANNER = "(function(){"
            + "function showErr(m){var b=document.getElementById('err-banner');"
            + " if(!b){b=document.createElement('div');b.id='err-banner';"
            + " b.style.cssText='position:fixed;left:0;right:0;top:0;z-index:9999;background:#b00020;color:#fff;font:12px monospace;padding:8px;white-space:pre-wrap;';"
            + " document.body.appendChild(b);} b.textContent='JS Error: '+m;}"
            + "window.addEventListener('error',function(e){showErr(e.message);});"
            + "window.addEventListener('unhandledrejection',function(e){showErr(e.reason&&e.reason.message?e.reason.message:String(e.reason));});"
            + "})();";

    private BroadcastReceiver jsReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String js = intent.getStringExtra("js");
            if (js != null && webView != null) {
                Log.d(TAG, "Executing JS: " + js);
                webView.evaluateJavascript(js, null);
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView.setWebContentsDebuggingEnabled(true);
        webView = new WebView(this);
        webView.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setAllowFileAccess(true);
        s.setAllowContentAccess(true); s.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        s.setBuiltInZoomControls(true); s.setDisplayZoomControls(false);
        s.setLoadWithOverviewMode(true); s.setUseWideViewPort(true);
        webView.setWebChromeClient(new WebChromeClient(){
            @Override
            public boolean onConsoleMessage(ConsoleMessage cm) {
                Log.d(TAG, "JS [" + cm.messageLevel() + "]: " + cm.message()
                    + " (" + cm.sourceId() + ":" + cm.lineNumber() + ")");
                return true;
            }

            /* Import JSON: let the WebView open the system file picker */
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback,
                                             FileChooserParams params) {
                if (fileChooserCallback != null) {
                    fileChooserCallback.onReceiveValue(null);
                }
                fileChooserCallback = callback;
                Intent chooser = new Intent(Intent.ACTION_GET_CONTENT);
                chooser.addCategory(Intent.CATEGORY_OPENABLE);
                chooser.setType("*/*");
                chooser.putExtra(Intent.EXTRA_MIME_TYPES,
                    new String[]{"application/json", "text/json", "text/plain"});
                try {
                    startActivityForResult(chooser, REQ_FILE_CHOOSER);
                } catch (Exception e) {
                    Log.e(TAG, "No activity can open the file chooser", e);
                    fileChooserCallback = null;
                    callback.onReceiveValue(null);
                }
                return true;
            }
        });
        /* Export JSON: JS hands the file content to native code */
        webView.addJavascriptInterface(new JsBridge(), "IstqbNative");
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public void onPageFinished(WebView v, String u) {
                super.onPageFinished(v, u);
                if (clearHistoryOnNextPage) {
                    clearHistoryOnNextPage = false;
                    v.clearHistory();
                    Log.d(TAG, "History cleared after load: " + u);
                }
                v.evaluateJavascript(BANNER, null);
                applyInsetsToPage();
            }
        });
        /* Ecrã sempre aceso durante o exame/revisão (como nos vídeos) */
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        /* Edge-to-edge é imposto com targetSdk 35: a decor consome os
           insets (a WebView recebe-os a zero e o padding nela não move
           elementos position:fixed). Por isso os valores brutos são lidos
           na decor e aplicados à página como variáveis CSS. */
        getWindow().getDecorView().setOnApplyWindowInsetsListener((v, insets) -> {
            insetTopPx = insets.getSystemWindowInsetTop();
            insetBottomPx = insets.getSystemWindowInsetBottom();
            Log.d(TAG, "insets top=" + insetTopPx + " bottom=" + insetBottomPx);
            applyInsetsToPage();
            return insets;
        });

        setContentView(webView);
        webView.loadUrl(HOME_URL);

        IntentFilter filter = new IntentFilter("com.istqb.ctfl.EXEC_JS");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            registerReceiver(jsReceiver, filter, Context.RECEIVER_EXPORTED);
        } else {
            registerReceiver(jsReceiver, filter);
        }
    }

    /* Results from the file chooser (import) and the save dialog (export) */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQ_FILE_CHOOSER) {
            Uri[] uris = null;
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                uris = new Uri[]{data.getData()};
            }
            if (fileChooserCallback != null) {
                fileChooserCallback.onReceiveValue(uris);
                fileChooserCallback = null;
            }
            return;
        }
        if (requestCode == REQ_SAVE_FILE) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null
                    && pendingSaveBytes != null) {
                try (OutputStream os = getContentResolver().openOutputStream(data.getData())) {
                    if (os != null) {
                        os.write(pendingSaveBytes);
                        Toast.makeText(this, "JSON file saved", Toast.LENGTH_SHORT).show();
                        Log.d(TAG, "Exported JSON: " + pendingSaveBytes.length + " bytes");
                    } else {
                        Toast.makeText(this, "Could not open the save location", Toast.LENGTH_LONG).show();
                    }
                } catch (IOException | SecurityException e) {
                    Log.e(TAG, "Failed to write exported file", e);
                    Toast.makeText(this, "Save failed: " + e.getMessage(), Toast.LENGTH_LONG).show();
                }
            }
            pendingSaveBytes = null;
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    /**
     * Native side of the JSON export: receives filename + base64 content from JS
     * and lets the user pick a save location via the system document picker.
     */
    public class JsBridge {
        @JavascriptInterface
        public void saveJsonFile(final String filename, final String base64) {
            runOnUiThread(() -> {
                try {
                    pendingSaveBytes = Base64.decode(base64, Base64.NO_WRAP);
                    Intent save = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                    save.addCategory(Intent.CATEGORY_OPENABLE);
                    save.setType("application/json");
                    save.putExtra(Intent.EXTRA_TITLE, filename != null ? filename : "istqb-export.json");
                    startActivityForResult(save, REQ_SAVE_FILE);
                } catch (IllegalArgumentException e) {
                    Log.e(TAG, "Invalid base64 payload for export", e);
                    pendingSaveBytes = null;
                    Toast.makeText(MainActivity.this, "Export failed: invalid data", Toast.LENGTH_LONG).show();
                }
            });
        }
    }

    @Override
    protected void onDestroy() {
        unregisterReceiver(jsReceiver);
        super.onDestroy();
    }

    private void goBackOrHome() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            webView.loadUrl(HOME_URL);
        }
    }

    @Override
    public void onBackPressed() {
        if (webView == null) { super.onBackPressed(); return; }

        String currentUrl = webView.getUrl();
        Log.d(TAG, "Back press on: " + currentUrl);

        /* Main screen (Home / Attempts): never goBack(), run the exit routine */
        if (currentUrl != null && currentUrl.contains("index.html")) {
            Log.d(TAG, "branch=home-exit");
            handleExitBackPress();
            return;
        }

        webView.evaluateJavascript(
            "(function(){"
            + " if(window.__inReviewMode||document.querySelector('.results-list')) return 'review';"
            + " try{"
            + "   if(typeof ExamEngine!=='undefined'&&ExamEngine.getState){"
            + "     var s=ExamEngine.getState();"
            + "     if(s&&s.configDone&&!s.submitted) return 'exam';"
            + "   }"
            + " }catch(e){}"
            + " return 'other';"
            + "})()",
            value -> {
                if (value != null && value.contains("review")) {
                    Log.d(TAG, "branch=review");
                    showReviewNavDialog();
                    return;
                }
                if (value != null && value.contains("exam")) {
                    Log.d(TAG, "branch=exam");
                    showExitConfirmation();
                    return;
                }
                if (webView.canGoBack()) {
                    Log.d(TAG, "branch=go-back");
                    webView.goBack();
                    return;
                }
                Log.d(TAG, "branch=exit-timer");
                handleExitBackPress();
            });
    }

    private void handleExitBackPress() {
        long now = System.currentTimeMillis();
        if (now - lastBackPress < 2000) {
            finish();
        } else {
            lastBackPress = now;
            Toast.makeText(MainActivity.this, "Press back again to exit", Toast.LENGTH_SHORT).show();
        }
    }

    private void navigateAwayFromReview(String url) {
        clearHistoryOnNextPage = true;
        webView.clearHistory();
        webView.loadUrl(url);
        lastBackPress = 0;
        Log.d(TAG, "Navigate away from review -> " + url);
    }

    private void showReviewNavDialog() {
        new AlertDialog.Builder(this)
            .setTitle("Voltar")
            .setMessage("Para onde pretende voltar?")
            .setPositiveButton("Back to Home", (dialog, which) -> navigateAwayFromReview(HOME_URL))
            .setNegativeButton("Back to Attempts", (dialog, which) -> navigateAwayFromReview(ATTEMPTS_URL))
            .setNeutralButton("Cancelar", null)
            .show();
    }

    private void showExitConfirmation() {
        new AlertDialog.Builder(this)
            .setTitle("Sair do exame")
            .setMessage("Tem certeza que deseja sair do exame em andamento? Suas respostas não serão salvas.")
            .setPositiveButton("Sair", (dialog, which) -> goBackOrHome())
            .setNegativeButton("Cancelar", null)
            .show();
    }
}
