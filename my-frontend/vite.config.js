import { defineConfig } from 'vite';
import path from "node:path"
import { fileURLToPath, URL } from "url";
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import reactNativeWeb from "vite-plugin-react-native-web";
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';


// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });
const APP_URL = "http://127.0.0.1:8000";

export default defineConfig({
      plugins: [
          laravel({
              input: './src/index.tsx',
              refresh: true,
              env: {
                  APP_URL,
              },
          }),
          react(),
          reactNativeWeb(),
      ],
      build: {
          outDir: '../my-backend/public/build', // Ensure the manifest.json is placed in Laravel's public/build
          emptyOutDir: true, // Clean up the directory before building
          rollupOptions: {
              input: './src/index.tsx',        // Ensure this points to your main entry file
          },
      },
      resolve: {
        alias: [
          { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
          { find: 'react-native$', replacement: 'react-native-web' },
        ]
      },
  });