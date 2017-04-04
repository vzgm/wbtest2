'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

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
		publicPath: NODE_ENV == 'production' ? '/assets/' : '/public/',
		filename: '[name].js'
	},

	module: {
	    loaders: [
	      {
	        test   : /\.css$/,
	        loader : 'style-loader!css-loader'
	      },
	      {
	        test   : /\.scss$/,
	        loader : ['style-loader', 'css-loader', 'sass-loader']
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
	    })
	  ] : [],

	//watch: true,

	//watchOptions: {
	//	aggregateTimeout: 100
	//}

	devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : 'none'
}