(function() {
	'use strict';

	angular
	    .module('app')
	    .factory('$exceptionHandler', exceptionHandler);
	
	exceptionHandler.$inject = ['$log'];
	
	/**
	 * @name logError
	 * @desc Logs errors
	 * @param {String} msg Message to log
	 * @returns {String}
	 * @memberOf Factories.Logger
	 */
	
	function exceptionHandler($log) {
	    var service = {
	        catcher: catcher
	    };
	    return service;
	
	    function catcher(exception, cause) {
	            $log.warn(exception, cause);
	    }
	}
})();