const HtmlWebpackPlugin = require('html-webpack-plugin');//
//const webpack = require('webpack');
require('dotenv').config()
const path = require('path')


module.exports = {
  //entry: './js/main.js',
  entry: {
    main: './js/main.js',
    // assest: './api/generateAsset.js',
    // dataaccess: './api/dataaccess.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ]
};