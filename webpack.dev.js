const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const dotenv = require('dotenv')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        static: {
          directory: path.join(__dirname, "dist"),
          watch: {
            ignored: '/node_modules/'
          }
        },
        historyApiFallback: true,
        hot: true,
        compress: true,
      },
    plugins:[
        new DefinePlugin({
            'process.env' : JSON.stringify(dotenv.config({
                path: './env.development'
            }))
        }),
        new BundleAnalyzerPlugin({analyzerMode: 'disabled'})
    ]
})