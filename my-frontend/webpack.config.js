const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './index.web.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Cleans the output directory before each build
      publicPath: '/', // Ensures proper routing for SPAs
    },
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
      extensions: [
        '.web.ts',
        '.web.tsx',
        '.tsx',
        '.ts',
        '.web.js',
        '.js',
        '.jsx',
        '.json',
      ], // Includes TypeScript support
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Add support for CSS files
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2|eot)$/,
          type: 'asset/resource', // Handles asset files like images and fonts
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      historyApiFallback: true, // Enables SPA routing support
    },
    optimization: isProduction
      ? {
          minimize: true, // Minifies the output for production
          splitChunks: {
            chunks: 'all', // Code splitting for better caching
          },
        }
      : undefined,
    mode: isProduction ? 'production' : 'development',
  };
};
