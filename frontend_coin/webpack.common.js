const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app : __dirname + '/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../backend_coin/core/static/core',''),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            // presets: ['env', 'react', 'es2015', 'stage-3']
          },
        }
        // query: {
          // presets:['@babel/react', '@babel/es2015'],
          // ['env', 'react', 'es2015', 'stage-3']
          // plugins: ['@babel/proposal-class-properties'],
        // }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // image loader different in dev & prod
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'videos/[hash].[ext]'
        }
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader',
        options: {
          name: 'audios/[hash].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
      // new HtmlWebpackPlugin({
      //       template: path.join(__dirname,'/public/index.html')
      //  })
    // new ExtractTextPlugin('[name].css')
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ]
};
