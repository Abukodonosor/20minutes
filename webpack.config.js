// This library allows us to combine paths easily
const path = require("path");

module.exports = {
  devtool: "source-map",

  entry: path.resolve(__dirname, "src/client", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "src/client"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015", "stage-0"],
          },
        },
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    contentBase: "./src/client",
    publicPath: "/src/client",
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  watchOptions: {
    ignored: /node_modules/,
  },
};
