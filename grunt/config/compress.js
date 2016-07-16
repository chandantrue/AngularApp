module.exports = {
		appBuild : {
			options : {
				archive : 'dist/grunt/app-build-version.zip'
			},
			files : [{
				expand: true,
				cwd : 'dist/grunt/client/',
				src : ['**'],
				dest : 'app-version/'
			}]
		}
}