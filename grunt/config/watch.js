module.exports = {
  app: {
    files: [
            'client/app/assets/css/sass/**/*.{sass,scss}',
            'client/app/assets/css/less/**/*.less',
            'client/app/assets/js/**/*.js',
            'client/app/components/**/*.less',
            'client/app/main/**/*.js',
            'client/app/partials/**/*.js',
            'client/app/partials/**/*.html',
    ],
    tasks: ['sass:appSass', 'less:appLess', 'concat:appFrameworks', 'concat:appFrameworksCss', 
            'concat:appScripts', 'concat:appCss', 'cssmin:appFrameworksCss', 'uglify:appFrameworks', 'uglify:appScripts']
  }
};