(function() {
	'use strict';

	angular
	    .module('app')
	    .factory('$exceptionHandler', exceptionHandler);
	
	exceptionHandler.$inject = ['$log'];
	
	/**
	 * @name exceptionHandler
	 * @desc Handles exception and Informs User of actions
	 * @param {$log} msg Message to log
	 * @returns {function}
	 * @memberOf Exception.exceptionHandler
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