const path = require('path')
module.exports = {
  entry: './example/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
}