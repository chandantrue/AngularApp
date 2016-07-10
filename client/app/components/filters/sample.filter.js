(function() {
    'use strict';
    
    angular
        .module('app')
        .filter('sample', sample);
    
    function sample() {
    	
        return sampleFilter;
        ////////////////
        function sampleFilter(params) {
            return params;
        }
    }
    
})();