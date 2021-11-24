const path = require("path");
// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = 3000;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map", // any "source-map"-like devtool is possible

  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    hot: true,
  },

  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist/webapp"),
    filename: "public/js/main.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },

  module: {
    rules: [
      // Rules 1
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
      },
      // Rules 2
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // // Rules 3
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "public/img/[contenthash].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "tuto-webpack",
      template: "public/index.html",
      favicon: "public/favicon.ico",
    })
  ],
};
