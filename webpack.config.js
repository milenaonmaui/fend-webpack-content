const path = require('path') 
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },

    ]   
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}
