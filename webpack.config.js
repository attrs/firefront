var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ff.js',
    library: 'ff',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    setImmediate: false
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devtool: 'source-map'
};

