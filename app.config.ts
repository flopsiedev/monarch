export default {
  expo: {
    name: 'monarch',
    slug: 'monarch',
    version: '0.0.1',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'monarch',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      bundleIdentifier: 'com.flopsie.monarch',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.flopsie.monarch',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
      NODE_ENV: process.env.NODE_ENV,
    },
    doctor: {
      reactNativeDirectoryCheck: {}
    }
  },
}; 
