(function(){

	angular
		.module('app')
		.config(configModule);
	
	configModule.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
	
	/**
     * @name configModule
     * @desc Holds the Routing Logic for the Angular Application
     * @param {$stateProvider, $urlRouterProvider} Services to be Injected
     * @memberOf Config.configModule
     */
	
	function configModule($stateProvider, $urlRouterProvider) {
		
		// For any unmatched url, send to /landing
		$urlRouterProvider.otherwise("/landing")
	
		$stateProvider
			.state('landing', {
				url: '/landing',
				templateUrl: '../app/partials/common/landing/landing.html',
				controller: 'LandingController',
				controllerAs: 'vm'
			})
			
		//Registering Error Interceptor for HTTP's Requests
		//$httpProvider.interceptors.push('httpInterceptor');
	}
})();