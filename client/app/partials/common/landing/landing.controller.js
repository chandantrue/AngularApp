/**
 * Landing Controller
 * @namespace Controllers
 */
(function() {

	angular
		.module('app')
		.controller('LandingController', LandingController);
	
	LandingController.$inject = ['mainService'];
	
	/**
     * @name logError
     * @desc Logs errors
     * @param {String} msg Message to log
     * @returns {String}
     * @memberOf Controllers.Landing
     */
	
	function LandingController(mainService){
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
	
})();