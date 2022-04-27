const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}