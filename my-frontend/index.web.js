import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

// Register the app for web
AppRegistry.registerComponent(appName, () => App);

// Mount the app to the DOM
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
