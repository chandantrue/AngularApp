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