const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  devtool: 'source-map',
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
