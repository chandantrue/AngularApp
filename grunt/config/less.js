module.exports = {

		appLess: {
			options: {
				compress: true,
				yuicompress: true,
				optimization: 2
			},
			files: {
				'client/app/assets/css/app.less.css': 'client/app/assets/css/less/app.less'
			}
		}
};