const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    visible: './example/visible/index.js',
    lazyload: './example/lazyload/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}