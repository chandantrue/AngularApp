describe(‘Hello World example ’, function() {

	beforeEach(module(‘app’));

	var MainController,
	scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		MainController = $controller('MainController', {
			$scope: scope
		});
	}));
	
	it('says hello world!', function () {
		expect(scope.greeting).toEqual("Hello world!”);
	});

});