module.exports = {
	appCache : {
		options:{
			base: 'client/app',
			module: 'app.templates',
			singleModule: true,
			useStrict: true,
			htmlmin: {
				collapseBooleanAttributes: true,
			    collapseWhitespace: true,
			    removeAttributeQuotes: true,
			    removeComments: true,
			    removeEmptyAttributes: true,
			    removeRedundantAttributes: true,
			    removeScriptTypeAttributes: true,
			    removeStyleLinkTypeAttributes: true
			},
			rename: function(templateCompletePath){
				return templateCompletePath.replace('partials/', '../app/partials/');
			}
		},
		src: ['client/app/partials/**/*.html'],
		dest: 'client/app/main/app.templates.js'
	}
}