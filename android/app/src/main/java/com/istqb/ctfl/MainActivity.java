package com.istqb.ctfl;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;
    private static final String TAG = "ISTQB_WV";
    private static final String BANNER = "(function(){"
            + "function showErr(m){var b=document.getElementById('err-banner');"
            + " if(!b){b=document.createElement('div');b.id='err-banner';"
            + " b.style.cssText='position:fixed;left:0;right:0;top:0;z-index:9999;background:#b00020;color:#fff;font:12px monospace;padding:8px;white-space:pre-wrap;';"
            + " document.body.appendChild(b);} b.textContent='JS Error: '+m;}"
            + "window.addEventListener('error',function(e){showErr(e.message);});"
            + "window.addEventListener('unhandledrejection',function(e){showErr(e.reason&&e.reason.message?e.reason.message:String(e.reason));});"
            + "})();";
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
        webView.setWebChromeClient(new WebChromeClient(){ public boolean onConsoleMessage(ConsoleMessage cm){Log.d(TAG,cm.message());return true;}});
        webView.setWebViewClient(new WebViewClient(){ public void onPageFinished(WebView v,String u){super.onPageFinished(v,u);v.evaluateJavascript(BANNER,null);}});
        setContentView(webView);
        webView.loadUrl("file:///android_asset/www/index.html");
    }
    @Override public void onBackPressed(){ if(webView.canGoBack())webView.goBack(); else super.onBackPressed(); }
}
