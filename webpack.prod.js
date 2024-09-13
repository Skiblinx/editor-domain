const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log statements
          },
          output: {
            comments: false, // Remove comments
          },
        },
      }),
    ],
    splitChunks: {
        //chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
    },
  },
  performance: {
    maxAssetSize: 590000, //250000
    maxEntrypointSize: 1590000, //250000
  },
  // performance: {
  //   hints: false
  // },
  plugins:[
    new webpack.EnvironmentPlugin(['API_BASE_URL','API_SYNC_INTERVAL','DASHBOARD_REPO_URL','INFORMATION_REPO_URL']),
    new webpack.optimize.AggressiveSplittingPlugin(),
  ]
});