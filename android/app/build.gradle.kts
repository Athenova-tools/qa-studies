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
        versionCode = 3
        versionName = "4.0.1"
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
