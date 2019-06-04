const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  }
};
