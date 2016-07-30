// Tests for testing 
describe('Landing Service', function() {
	var landingService;

	// Before each test load our app module
	beforeEach(angular.mock.module('app'));

	// Before each test set our injected landingService factory (_landingService_) to our local landingService variable
	beforeEach(inject(function(_landingService_) {
		landingService = _landingService_;
	}));

	it('should exist', function() {
		// Test to check the Factory Exists
		expect(landingService).toBeDefined();
	});
	
	// A set of tests for our landingService.getLanding() method
	describe('.getLanding()', function() {
		// A simple test to verify the method all exists
		it('should exist', function() {
			expect(landingService.getLanding).toBeDefined();
		});
	});
});