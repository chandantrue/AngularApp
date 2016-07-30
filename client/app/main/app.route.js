(function(){

	angular
		.module('app')
		.config(configModule);
	
	configModule.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
	
	/**
     * @name configModule
     * @desc Holds the Routing Logic for the Angular Application
     * @param {$stateProvider, $urlRouterProvider, $httpProvider} Services to be Injected
     * @memberOf Config.configModule
     */
	
	function configModule($stateProvider, $urlRouterProvider, $httpProvider) {
		
		// For any unmatched url, send to /route1
		$urlRouterProvider.otherwise("/landing")
	
		$stateProvider
			.state('landing', {
				url: "/landing",
				templateUrl: "../app/partials/common/landing/landing.html",
				controller: 'LandingController',
				controllerAs: 'landing'
			})
			
		//Registering Error Interceptor for HTTP's Requests
		//$httpProvider.interceptors.push('httpInterceptor');
	}
})();