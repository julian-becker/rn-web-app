import { defineConfig } from 'vite';
import path from "node:path"
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import reactNativeWeb from "vite-plugin-react-native-web";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });

export default defineConfig({
    plugins: [
        laravel({
            input: './src/index.tsx',
            refresh: true,
        }),
        react(),
        reactNativeWeb()
    ],
    build: {
        outDir: '../my-backend/public/build', // Ensure the manifest.json is placed in Laravel's public/build
        emptyOutDir: true, // Clean up the directory before building
        rollupOptions: {
            input: './src/index.tsx',        // Ensure this points to your main entry file
        },
    },
    resolve: {
        alias: {
            // Alias to include React Native Web components
            'react-native$': 'react-native-web',
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
