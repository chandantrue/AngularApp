var webpack = require('webpack'),
path = require('path');

module.exports = {
		context: __dirname + '/client/app',
		entry: {
			app: ['webpack/hot/dev-server', './main/app.module.js']
		},
		output: {
			path: __dirname + '/dist/webpack/client/app/main',
			filename: 'app.min.js'
		},
		module: {
			loaders: [
			          { test: /\.scss$/, loader: 'style!css!sass' },
			          { test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/, loader : 'file-loader?name=res/[name].[ext]?[hash]' }
			]
		},
		plugins: [
		    /*new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor",  filename= "vendor.bundle.js")*/
		    new webpack.HotModuleReplacementPlugin()
		]
};