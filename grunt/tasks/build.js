module.exports = function(grunt) {
	
	grunt.registerTask('build', ['clean:initBuild', 'copy:appDev', 'sass:appSass', 'less:appLess', 'html2js:appCache', 'concat:appFrameworks', 'concat:appFrameworksCss', 
	                               'concat:appScripts', 'concat:appCss', 'cssmin:appCss', 'uglify:appFrameworks', 
	                               'uglify:appScripts', 'processhtml:app', 'compress:appBuild']);
};