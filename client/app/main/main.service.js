/**
 * Main Service
 * @namespace Factories
 */
(function(){
	angular
		.module('app')
		.factory('mainService', mainService);
	
	mainService.$inject = ['$http'];
	
	/**
	 * @name mainService
	 * @desc Holds functions to make HTTP calls to the backend
	 * @param {$http service}
	 * @returns {response}
	 * @memberOf Factories.Logger
	 */
	
	function mainService($http){
		var service = {
	        getAvengers: getAvengers
	    };
		
		return service;
	
	    function getAvengers() {
	        return $http.get('/api/maa')
	            .then(getAvengersComplete)
	            .catch(getAvengersFailed);
	
	        function getAvengersComplete(response) {
	            return response.data.results;
	        }
	
	        function getAvengersFailed(error) {
	            //logger.error('XHR Failed for getAvengers.' + error.data);
	        }
	    }
		
	}
})();