const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  devtool: 'source-map',
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([{
      from: './index.html',
      to: path.resolve(__dirname, 'dist')
    }, ]),
  ],
};
