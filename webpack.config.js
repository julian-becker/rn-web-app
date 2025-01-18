const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.ts', '.web.tsx', '.tsx', '.ts', '.web.js', '.js', '.jsx', '.json'], // Add .ts and .tsx
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
  },
};
