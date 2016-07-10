module.exports = {

		appFrameworksCss: {
			files: [{
				expand: true,
				cwd: 'client/app/assets/css',
				src: ['app.css'],
				dest: 'client/app/assets/css',
				ext: '.min.css'
			}]
		}
};