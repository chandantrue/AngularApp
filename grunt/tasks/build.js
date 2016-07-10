module.exports = function(grunt) {
	
	grunt.registerTask('build', ['sass:appSass', 'less:appLess', 'html2js:appCache', 'concat:appFrameworks', 'concat:appFrameworksCss', 
	                               'concat:appScripts', 'concat:appCss', 'cssmin:appCss', 'uglify:appFrameworks', 
	                               'uglify:appScripts', 'clean:initBuild', 'copy:appBuild', 'clean:appBuild']);
};