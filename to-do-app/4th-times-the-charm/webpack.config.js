const path = require("path");

module.exports = {
  entry: ["./src/main.js", "./src/app.js"],
  devtool: "inline-source-map",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
