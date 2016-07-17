(function() {
	'use strict';

	angular
		.module('app')
		.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.inject = ['$q', '$location'];
	
	/**
     * @name httpInterceptor
     * @desc intercepts all HTTP calls and Performs action on Request or Response
     * @param {$q, $location} Services to be Injected
     * @memberOf Interceptor.httpInterceptor
     */
	
	function httpInterceptor($q, $location) {
		var service =  {
			'request': request,
			'requestError': requestError,
			'response': response,
			'responseError': responseError
		};
		
		return service;
		
		function request(config) {
			// do something on success
			return config;
		}

		function requestError(rejection) {
			// do something on error
			if (canRecover(rejection)) {
				return responseOrNewPromise
			}
			return $q.reject(rejection);
		}

		function response(response) {
			// do something on success
			return response;
		}

		function responseError(rejection) {
			// do something on error
			if(rejection.status === 404){
				$location.path('error');                    
			}
			return $q.reject(rejection);
		}
	};
})();