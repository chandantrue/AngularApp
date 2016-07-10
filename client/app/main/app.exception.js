(function() {
	'use strict';

	angular
	    .module('app')
	    .factory('exception', exception);
	
	exception.$inject = ['logger'];
	
	/**
	 * @name logError
	 * @desc Logs errors
	 * @param {String} msg Message to log
	 * @returns {String}
	 * @memberOf Factories.Logger
	 */
	
	function exception(logger) {
	    var service = {
	        catcher: catcher
	    };
	    return service;
	
	    function catcher(message) {
	        return function(reason) {
	            logger.error(message, reason);
	        };
	    }
	}
})();