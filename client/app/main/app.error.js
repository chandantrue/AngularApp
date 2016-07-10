(function() {
	'use strict';
	
	angular
	    .module('app')
	    .config(exceptionConfig);
	
	exceptionConfig.$inject = ['$provide'];
	
	/**
	 * @name logError
	 * @desc Logs errors
	 * @param {String} msg Message to log
	 * @returns {String}
	 * @memberOf Factories.Logger
	 */
	
	function exceptionConfig($provide) {
	    $provide.decorator('$exceptionHandler', extendExceptionHandler);
	}
	
	extendExceptionHandler.$inject = ['$delegate', 'toastr'];
	
	/**
	 * @name logError
	 * @desc Logs errors
	 * @param {String} msg Message to log
	 * @returns {String}
	 * @memberOf Factories.Logger
	 */
	
	function extendExceptionHandler($delegate, toastr) {
	    return function(exception, cause) {
	        $delegate(exception, cause);
	        var errorData = {
	            exception: exception,
	            cause: cause
	        };
	        /**
	         * Could add the error to a service's collection,
	         * add errors to $rootScope, log errors to remote web server,
	         * or log locally. Or throw hard. It is entirely up to you.
	         * throw exception;
	         */
	        toastr.error(exception.msg, errorData);
	    };
	}
})();