// This import allows using TypeScript for the config plugin
import 'tsx/cjs';

const config = {
  expo: {
    name: "GigsCourt",
    slug: "gigscourt",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.gigscourt.app"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.gigscourt.app"
    },
    plugins: [
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "15.1"
          },
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: "35.0.0"
          }
        }
      ]
    ],
    // Explicitly disabling New Architecture ensures a smooth first build.
    // You can remove this line later after testing the upgrade.
    newArchEnabled: false
  }
};

export default config;
