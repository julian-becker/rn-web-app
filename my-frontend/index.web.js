import React from 'react';
import { AppRegistry } from 'react-native'
import { createInertiaApp } from '@inertiajs/inertia-react';
import { render } from 'react-dom';
import { name as appName } from './app.json';
import App from './src/Pages/App';

// Register the app for web
AppRegistry.registerComponent(appName, () => App);

// Mount the app to the DOM
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

AppRegistry.registerComponent(appName, () => App);

createInertiaApp({
    resolve: name => import(`./src/${name}`), // Adjust path as needed
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

