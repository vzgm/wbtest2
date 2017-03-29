module.exports = {
	context: __dirname + '/frontend',

	entry: {
		app: './app'
	},

	output: {
		path: __dirname + '/public',
		publicPath: '/public/',
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

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	}


}