(function() {
	'use strict';
	
	angular
	    .module('app')
	    .directive('myExample', myExample);
	
	/**
	* @desc spinner directive that can be used anywhere across apps at a company named Acme
	* @example <div acme-shared-spinner></div>
	*/
	
	function myExample() {
	    var directive = {
	        restrict: 'EA',
	        templateUrl: 'app/feature/example.directive.html',
	        scope: {
	            max: '='
	        },
	        link: linkFunc,
	        controller: ExampleController,
	        // note: This would be 'ExampleController' (the exported controller name, as string)
	        // if referring to a defined controller in its separate file.
	        controllerAs: 'vm',
	        bindToController: true // because the scope is isolated
	    };
	
	    return directive;
	
	    function linkFunc(scope, el, attr, ctrl) {
	        console.log('LINK: scope.min = %s *** should be undefined', scope.min);
	        console.log('LINK: scope.max = %s *** should be undefined', scope.max);
	        console.log('LINK: scope.vm.min = %s', scope.vm.min);
	        console.log('LINK: scope.vm.max = %s', scope.vm.max);
	    }
	}
	
	ExampleController.$inject = ['$scope'];
	
	function ExampleController($scope) {
	    // Injecting $scope just for comparison
	    var vm = this;
	
	    vm.min = 3;
	
	    console.log('CTRL: $scope.vm.min = %s', $scope.vm.min);
	    console.log('CTRL: $scope.vm.max = %s', $scope.vm.max);
	    console.log('CTRL: vm.min = %s', vm.min);
	    console.log('CTRL: vm.max = %s', vm.max);
	}
})();