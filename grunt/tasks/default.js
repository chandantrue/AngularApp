module.exports = function(grunt) {
	
	grunt.registerTask('default', ['sass:appSass', 'less:appLess', 'concat:appFrameworks', 'concat:appFrameworksCss', 
	                               'concat:appScripts', 'concat:appCss', 'cssmin:appFrameworksCss', 'uglify:appFrameworks', 
	                               'uglify:appScripts', 'watch:app']);
};