angular.module('app.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../app/partials/common/landing/landing.html",
    "<md-content>{{vm.greeting}}</md-content>");
}]);

(function() {
	'use strict';
	
	angular.module('app', [
       
	   //Template Cache
	   'app.templates',
	   
       //Custom Angular-UI Router
       'ui.router' 
	                       
	]);

	angular.module('app').run(runModule);
	
	/**
     * @name runModule
     * @desc Has initialization logic after the application bootstraps
     * @memberOf Run.runModule
     */
	
	function runModule() {

	}
	
})();
(function(){

	angular
		.module('app')
		.config(configModule);
	
	configModule.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
	
	/**
     * @name configModule
     * @desc Holds the Routing Logic for the Angular Application
     * @param {$stateProvider, $urlRouterProvider} Services to be Injected
     * @memberOf Config.configModule
     */
	
	function configModule($stateProvider, $urlRouterProvider) {
		
		// For any unmatched url, send to /landing
		$urlRouterProvider.otherwise("/landing")
	
		$stateProvider
			.state('landing', {
				url: '/landing',
				templateUrl: '../app/partials/common/landing/landing.html',
				controller: 'LandingController',
				controllerAs: 'vm'
			})
			
		//Registering Error Interceptor for HTTP's Requests
		//$httpProvider.interceptors.push('httpInterceptor');
	}
})();
/* global toastr:false, moment:false */
(function() {
    'use strict';

    /*angular
        .module('app')
        .constant('toastr', toastr)
        .constant('moment', moment);
    
    // Constants used by the entire app
    angular
        .module('app')
        .constant('moment', moment);

    // Constants used only by the sales module
    angular
        .module('app')
        .constant('events', {
            ORDER_CREATED: 'event_order_created',
            INVENTORY_DEPLETED: 'event_inventory_depleted'
    });*/
})();
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
(function() {
	'use strict';

	angular
		.module('app')
		.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.inject = ['$q', '$location'];
	
	/**
     * @name httpInterceptor
     * @desc intercepts all HTTP calls and Performs action on Request or Response
     * @param {$q, $location} Services to be Injected
     * @memberOf Interceptor.httpInterceptor
     */
	
	function httpInterceptor($q, $location) {
		var service =  {
			'request': request,
			'requestError': requestError,
			'response': response,
			'responseError': responseError
		};
		
		return service;
		
		function request(config) {
			// do something on success
			return config;
		}

		function requestError(rejection) {
			// do something on error
			if (canRecover(rejection)) {
				return responseOrNewPromise
			}
			return $q.reject(rejection);
		}

		function response(response) {
			// do something on success
			return response;
		}

		function responseError(rejection) {
			// do something on error
			if(rejection.status === 404){
				$location.path('error');                    
			}
			return $q.reject(rejection);
		}
	};
})();
(function() {
	'use strict';
	
	/*angular
	    .module('app')
	    .factory('logger', logger);
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Factories.Logger
     */
	
	/*function logger() { 
		var someValue = '';
	    var service = {
	        save: save,
	        someValue: someValue,
	        validate: validate
	    };
	    return service;

	    ////////////

	    function save() {
	        //
	    };

	    function validate() {
	        //
	    };
	}*/
	
})();
/**
 * Main Controller
 * @namespace Controllers
 */
(function() {

	angular
		.module('app')
		.controller('MainController', MainController);
	
	MainController.$inject = ['mainService'];
	
	/**
     * @name MainController
     * @desc Binds logic to index.html
     * @param {mainService} Services to be Injected
     * @memberOf Controllers.MainController
     */
	
	function MainController(mainService){
		var vm = this;
		
		vm.greeting = 'Hello World';
		/*vm.greet = greet;
		vm.getAvengers = getAvengers;*/
		
		function greet(){
			return 'Hello World';
		}
		
		/*function getAvengers() {
	        return mainService.getAvengers()
		        .then(function(data) {
		            vm.greet = data;
		            return vm.greet;
		        })
		        .catch(showError);
	    }*/
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
/**
 * Landing Controller
 * @namespace Controllers
 */
(function() {

	angular
		.module('app')
		.controller('LandingController', LandingController);
	
	LandingController.$inject = ['landingService'];
	
	/**
     * @name LandingController
     * @desc Binding logic with landing.html
     * @param {mainService}Services to be Injected
     * @memberOf Controllers.Landing
     */
	
	function LandingController(landingService){
		var vm = this;
		
		vm.greeting = 'Hello World';
		vm.greet = greet;
		vm.getLanding = getLanding;
		
		function greet(){
			return vm.greeting;
		}
		
		function getLanding() {
	        return landingService.getLanding()
		        .then(function(data) {
		            vm.greet = data;
		            return vm.greet;
		        })
		        .catch(showError);
	    }
	}
	
})();
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