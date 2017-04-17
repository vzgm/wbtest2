'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


console.log(`\nWebpack started in ${NODE_ENV} mode\n`);

if( NODE_ENV == 'development' ) {
	console.log(`To turn it to production use command:`);
	console.log(`$ NODE_ENV=production webpack\n`);
}

module.exports = {
	context: __dirname + '/frontend',

	entry: {
		app: './app'
	},

	output: {
		path: __dirname + '/public',
		//publicPath: NODE_ENV == 'production' ? '/assets/' : '/public/',
		publicPath: '/public/',
		filename: NODE_ENV == 'production' ? '[name].min.js' : '[name].js',
	},

	resolve: {
		alias: {
			'jquery': 		path.resolve(__dirname + '/frontend/vendors/jquery-2.2.4.min'),
			'jquery-ui': 	path.resolve(__dirname + '/frontend/vendors/jquery-ui-1.12.1.custom/jquery-ui.min')
		}
	},

	module: {
	    loaders: [
			{
				test   : /\.css$/,
				//loader : 'style-loader!css-loader',
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
			},
			{
				test   : /\.scss$/,
				//loader : ['style-loader', 'css-loader', 'sass-loader']
				 use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
	    ]
	},

	plugins: NODE_ENV == 'production' ? [
	    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true,
				drop_console: true,
				unsafe: true
			}
	    }),
	    new ExtractTextPlugin('style.min.css')
	  ] : [
	  	new ExtractTextPlugin('style.css')
	  ],

	//watch: true,

	//watchOptions: {
	//	aggregateTimeout: 100
	//}

	devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : 'none'
}
