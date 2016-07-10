(function() {
	'use strict';
	
	angular.module('app', [
       
       //Custom Angular-UI Router
       'ui.router' 
	                       
	]);

	angular.module('app').run(runModule);
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     */
	
	function runModule() {

	}
	
})();
angular
	.module('app')
	.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/route1")

	$stateProvider
	.state('route1', {
		url: "/route1",
		templateUrl: "route1.html"
	})
	.state('route1.list', {
		url: "/list",
		templateUrl: "route1.list.html",
		controller: function($scope){
			$scope.items = ["A", "List", "Of", "Items"];
		}
	})

	.state('route2', {
		url: "/route2",
		templateUrl: "route2.html"
	})
	.state('route2.list', {
		url: "/list",
		templateUrl: "route2.list.html",
		controller: function($scope){
			$scope.things = ["A", "Set", "Of", "Things"];
		}
	})
}
/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
    
    // Constants used by the entire app
    angular
        .module('app.core')
        .constant('moment', moment);

    // Constants used only by the sales module
    angular
        .module('app.sales')
        .constant('events', {
            ORDER_CREATED: 'event_order_created',
            INVENTORY_DEPLETED: 'event_inventory_depleted'
        });
})();
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
(function() {
	'use strict';
	
	angular
	    .module('app')
	    .factory('logger', logger);
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     */
	
	function logger() { 
		var someValue = '';
	    var service = {
	        save: save,
	        someValue: someValue,
	        validate: validate
	    };
	    return service;

	    ////////////

	    function save() {
	        /* */
	    };

	    function validate() {
	        /* */
	    };
	}
	
})();
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
	
	var handlingRouteChangeError = false;
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     */
	
	function handleRoutingErrors() {
	    /**
	     * Route cancellation:
	     * On routing error, go to the dashboard.
	     * Provide an exit clause if it tries to do it twice.
	     */
	    $rootScope.$on('$routeChangeError',
	        function(event, current, previous, rejection) {
	            if (handlingRouteChangeError) { return; }
	            handlingRouteChangeError = true;
	            var destination = (current && (current.title ||
	                current.name || current.loadedTemplateUrl)) ||
	                'unknown target';
	            var msg = 'Error routing to ' + destination + '. ' +
	                (rejection.msg || '');

	            /**
	             * Optionally log using a custom service or $log.
	             * (Don't forget to inject custom service)
	             */
	            logger.warning(msg, [current]);

	            /**
	             * On routing error, go to another route/state.
	             */
	            $location.path('/');

	        }
	    );
	}
	
})();
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