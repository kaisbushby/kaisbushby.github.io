const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");


module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: 'development',
  
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss", ".json", ".webp"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options:{
              transpileOnly: true
            }
          }
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: ["source-map-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|webp|ico)$/,
        use: [
          {
            loader:"file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
      ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new BundleAnalyzerPlugin({analyzerMode: "disabled"}),
    new ForkTsCheckerWebpackPlugin()
  ]
};