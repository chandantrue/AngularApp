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
	        get: get
	    };
		
		return service;
	
	    function get(path) {
	        return $http.get(path)
	            .then(getComplete)
	            .catch(getFailed);
	
	        function getComplete(response) {
	            return response.data.results;
	        }
	
	        function getFailed(error) {
	            //logger.error('XHR Failed for getAvengers.' + error.data);
	        }
	    }
		
	}
})();