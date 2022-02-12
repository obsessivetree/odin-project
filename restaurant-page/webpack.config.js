const path = require('path');

module.exports = {
  mode   : 'development',
  devtool: 'inline-source-map',
  entry  : {
      index  : './src/index.js',
      welcome: './src/welcome.js',
      menu   : './src/menu.js',
      contact: './src/contact.js',
  },
  output: {
    filename: 'main.js',
    path    : path.resolve(__dirname, 'dist'),
    // clean   : true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};