const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        //   {
        //     test: /\.(csv|tsv)$/i,
        //     use: ['csv-loader'],
        //   },
        ],
      },
};