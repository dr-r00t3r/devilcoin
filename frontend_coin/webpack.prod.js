const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader :'img-loader',
        options: {
                name: 'img/[name].[ext]',
                limit: 4096
        }
      }
    ]
  },
  optimization: {
    minimize: true
  },
  mode: 'production',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   }),
  //   // new webpack.optimize.UglifyJsPlugin()
  ]
});