plugins {
    id("com.android.application")
}

android {
    namespace = "com.istqb.ctfl"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.istqb.ctfl"
        minSdk = 24
        targetSdk = 35
        versionCode = 26
        versionName = "4.0.1"
    }

    androidResources {
        ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~:app-debug.apk"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
}
