var path = require("path");
var config = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {//CSS处理
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
        exclude: /node_modules/,
      },
      {//CSS处理
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /src/,
      },
    ]
  }
};

module.exports = config;