package com.istqb.ctfl;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends Activity {
    private WebView webView;
    private long lastBackPress = 0;
    private static final String TAG = "ISTQB_WV";
    private static final String HOME_URL = "file:///android_asset/www/index.html";
    private static final String ATTEMPTS_URL = HOME_URL + "?goto=attempts#stats-dashboard";
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
        });
        webView.setWebViewClient(new WebViewClient(){ public void onPageFinished(WebView v,String u){super.onPageFinished(v,u);v.evaluateJavascript(BANNER,null);}});
        setContentView(webView);
        webView.loadUrl(HOME_URL);

        IntentFilter filter = new IntentFilter("com.istqb.ctfl.EXEC_JS");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            registerReceiver(jsReceiver, filter, Context.RECEIVER_EXPORTED);
        } else {
            registerReceiver(jsReceiver, filter);
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
                    showReviewNavDialog();
                    return;
                }
                if (value != null && value.contains("exam")) {
                    showExitConfirmation();
                    return;
                }
                if (webView.canGoBack()) {
                    webView.goBack();
                    return;
                }
                long now = System.currentTimeMillis();
                if (now - lastBackPress < 2000) {
                    finish();
                } else {
                    lastBackPress = now;
                    Toast.makeText(MainActivity.this, "Press back again to exit", Toast.LENGTH_SHORT).show();
                }
            });
    }

    private void exitReviewToAttempts() {
        webView.evaluateJavascript(
            "(function(){"
            + " window.__inReviewMode=false;"
            + " var dash=document.getElementById('stats-dashboard');"
            + " var app=document.getElementById('app');"
            + " if(dash){"
            + "   if(app) app.innerHTML='';"
            + "   dash.style.display='';"
            + "   if(typeof ExamStats!=='undefined'&&ExamStats.renderStatsDashboard) ExamStats.renderStatsDashboard();"
            + "   return 'ok';"
            + " }"
            + " return 'nodash';"
            + "})()",
            value -> {
                if (value == null || value.contains("nodash")) {
                    webView.loadUrl(ATTEMPTS_URL);
                }
            });
    }

    private void showReviewNavDialog() {
        new AlertDialog.Builder(this)
            .setTitle("Voltar")
            .setMessage("Para onde pretende voltar?")
            .setPositiveButton("Back to Home", (dialog, which) -> webView.loadUrl(HOME_URL))
            .setNegativeButton("Back to Attempts", (dialog, which) -> exitReviewToAttempts())
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
