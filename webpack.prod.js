const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const dotenv = require('dotenv')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    
    plugins:[
        new DefinePlugin({
            'process.env' : JSON.stringify(dotenv.config({
                path: './env.production'
            }))
        }),
        new BundleAnalyzerPlugin({analyzerMode: 'disabled'}),
        new CompressionPlugin({algorithm: 'gzip'})
    ]
})