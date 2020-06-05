const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/exposure.ts',
    example: './example/index.js'
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