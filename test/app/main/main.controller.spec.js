describe('Main Controller', function() {
	
	var $controller;
	
	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));
	
	it('should exist', function () {
		var $scope = {};
	    var controller = $controller('MainController', { $scope: $scope });
		expect(controller).toBeDefined();
	});

});