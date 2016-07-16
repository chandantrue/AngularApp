module.exports = {
		
		appBuild: {
			files: [{
				expand: true,
				src: ['client/**'],
				dest: 'dist/grunt/'
			}]
		},
		
		appDev: {
			files: [{
				expand: true,
				src: ['client/app/assets/fonts/**'],
				dest: 'dist/grunt/'
			}, {
				expand: true,
				src: ['client/app/assets/images/**'],
				dest: 'dist/grunt/'
			}, {
				src: ['client/app/index.html', 'client/app/favicon.ico'],
				dest: 'dist/grunt/'
			}]
		}
}