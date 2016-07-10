/**
 * Logger Factory
 * @namespace Factories
 */
(function() {

	angular
		.module('app')
		.controller('MainController', MainController);
	
	MainController.$inject = ['mainService'];
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     */
	
	function MainController(mainService){
		var vm = this;
		
		vm.greeting = 'Hello World';
		vm.greet = greet;
		vm.getAvengers = getAvengers;
		
		function greet(){
			return 'Hello World';
		}
		
		function getAvengers() {
	        return mainService.getAvengers()
		        .then(function(data) {
		            vm.greet = data;
		            return vm.greet;
		        })
		        .catch(showError);
	    }
	}
	
	/*var handlingRouteChangeError = false;
	
	*//**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     *//*
	
	function handleRoutingErrors() {
	    *//**
	     * Route cancellation:
	     * On routing error, go to the dashboard.
	     * Provide an exit clause if it tries to do it twice.
	     *//*
	    $rootScope.$on('$routeChangeError',
	        function(event, current, previous, rejection) {
	            if (handlingRouteChangeError) { return; }
	            handlingRouteChangeError = true;
	            var destination = (current && (current.title ||
	                current.name || current.loadedTemplateUrl)) ||
	                'unknown target';
	            var msg = 'Error routing to ' + destination + '. ' +
	                (rejection.msg || '');

	            *//**
	             * Optionally log using a custom service or $log.
	             * (Don't forget to inject custom service)
	             *//*
	            logger.warning(msg, [current]);

	            *//**
	             * On routing error, go to another route/state.
	             *//*
	            $location.path('/');

	        }
	    );
	}*/
	
})();