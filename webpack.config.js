'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    devtool: 'inline-source-map',
	entry: './src/app/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
            {
                test:'/.\css$/i',
                loader: 'css-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};
