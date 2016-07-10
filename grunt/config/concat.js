module.exports = {
		
		//Concat's custom JS Files
		appFrameworks: {
			options: {},
			src: [
			      'bower_components/angular/angular.min.js',
			      'bower_components/angular-aria/angular-aria.min.js',
			      'bower_components/angular-animate/angular-animate.min.js',
			      'bower_components/angular-material/angular-material.min.js',
			      'bower_components/angular-ui-router/release/angular-ui-router.min.js'
			],
			dest: 'client/app/assets/js/frameworks.js'
		},
		
		//Concat's Custom CSS Files
		appFrameworksCss: {
			options: {},
			src: [
			      'bower_components/angular-material/angular-material.min.css'
			      
			],
			dest: 'client/app/assets/css/frameworks.css'
		},
		
		//Concat's Application Specific JS Files
		appScripts: {
			options: {},
			src: [
			      //Template Cache
			      'client/app/main/app.templates.js',
			      
			      //Main Application Modules
			      'client/app/main/app.module.js',
			      'client/app/main/app.route.js',
			      'client/app/main/app.constants.js',
			      'client/app/main/app.exception.js',
			      'client/app/main/app.error.js',
			      'client/app/main/app.logger.js',
			      
			      //Application Controllers
			      'client/app/main/main.controller.js',
			      
			      //Application Services
			      'client/app/main/main.service.js'
			],
			dest: 'client/app/main/app.js'
		},
		
		appCss: {
			options: {},
			src: [
			      'client/app/assets/css/app.less.css',
			      'client/app/assets/css/app.sass.css',
			      'client/app/assets/css/frameworks.css',
			      
			],
			dest: 'client/app/assets/css/app.css'
		}
};