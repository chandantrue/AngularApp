(function(){

	angular
		.module('app')
		.config(configModule);
	
	configModule.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
	
	function configModule($stateProvider, $urlRouterProvider, $httpProvider) {
		
		// For any unmatched url, send to /route1
		$urlRouterProvider.otherwise("/landing")
	
		$stateProvider
			.state('landing', {
				url: "/landing",
				templateUrl: "../partials/common/landing/landing.html"
			})
			
		//Registering Error Interceptor for HTTP's Requests
		$httpProvider.interceptors.push('httpInterceptor');
	}
})();