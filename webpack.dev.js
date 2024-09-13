const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
  },
  plugins:[
    new webpack.EnvironmentPlugin(['API_BASE_URL','API_SYNC_INTERVAL','DASHBOARD_REPO_URL','INFORMATION_REPO_URL']),
  ]
});