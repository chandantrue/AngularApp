/**
 * Main Service
 * @namespace Factories
 */
(function(){
	angular
		.module('app')
		.factory('landingService', landingService);
	
	landingService.$inject = ['mainService'];
	
	/**
	 * @name landingService
	 * @desc Holds functions to make HTTP calls to the backend
	 * @param {mainService service}
	 * @returns {response}
	 * @memberOf Factories.landingService
	 */
	
	function landingService(mainService){
		var service = {
	        getLanding: getLanding
	    };
		
		return service;
	
	    function getLanding() {
	        return mainService.get('/api/maa')
	            .then(getLandingComplete)
	            .catch(getLandingFailed);
	
	        function getLandingComplete(response) {
	            return response.data.results;
	        }
	
	        function getLandingFailed(error) {
	            //logger.error('XHR Failed for getAvengers.' + error.data);
	        }
	    }
		
	}
})();