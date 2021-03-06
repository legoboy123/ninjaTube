const path = require("path");
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const loader = require("sass-loader");

const config = {
  entry: ENTRY_FILE,
  devtool: "source-map",
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browswers: "cover 99.5%" })];
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
module.exports = config;
