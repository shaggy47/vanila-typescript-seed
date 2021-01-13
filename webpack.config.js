'use strict';
const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');


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
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};
