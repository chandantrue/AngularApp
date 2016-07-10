/**
 * Logger Factory
 * @namespace Factories
 */
(function(){
	angular
		.module('app')
		.factory('mainService', mainService);
	
	mainService.$inject = ['$http', 'logger'];
	
	/**
	 * @name logError
	 * @desc Logs errors
	 * @param {String} msg Message to log
	 * @returns {String}
	 * @memberOf Factories.Logger
	 */
	
	function mainService($http, logger){
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
	            logger.error('XHR Failed for getAvengers.' + error.data);
	        }
	    }
		
	}
})();