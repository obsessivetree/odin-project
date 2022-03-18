const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
