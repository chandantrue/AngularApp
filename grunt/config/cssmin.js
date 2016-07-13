module.exports = {

		appCss: {
			files: [{
				expand: true,
				cwd: 'dist/grunt/client/app/assets/css',
				src: ['app.css'],
				dest: 'dist/grunt/client/app/assets/css',
				ext: '.min.css'
			}]
		}
};