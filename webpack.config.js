const webpack = require('webpack');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }
                ]
            }
        ]
    }
};