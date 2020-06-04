const path = require('path')
module.exports = {
  mode: 'development',
  entry: './example/exposure',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "exposure.js",
    library: 'Exposure',
    libraryTarget: 'window'
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