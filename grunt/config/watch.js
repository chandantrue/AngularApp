module.exports = {
		app: {
			files: [
			        'client/app/assets/css/sass/**/*.{sass,scss}',
			        'client/app/assets/css/less/**/*.less',
			        'client/app/assets/js/**/*.js',
			        'client/app/components/**/*.less',
			        'client/app/main/**/*.js',
			        'client/app/partials/**/*.js',
			        'client/app/partials/**/*.html',
			],
			tasks: ['copy:appDev', 'sass:appSass', 'less:appLess', 'html2js:appCache', 'concat:appScripts', 'concat:appCss', 
			                'cssmin:appCss', 'uglify:appScripts'
			],
			options: {
					nospawn: true
			}
		}
};