(function() {
	'use strict';
	
	angular.module('app', [
       
	   //Template Cache
	   'app.templates',
	   
       //Custom Angular-UI Router
       'ui.router' 
	                       
	]);

	angular.module('app').run(runModule);
	
	/**
     * @name runModule
     * @desc Has initialization logic after the application bootstraps
     * @memberOf Run.runModule
     */
	
	function runModule() {

	}
	
})();