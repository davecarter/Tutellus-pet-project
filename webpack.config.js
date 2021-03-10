const path = require("path")
const webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const ASSET_PATH = process.env.ASSET_PATH || "/"

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    }),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./index.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH,
    clean: true
  }
}
