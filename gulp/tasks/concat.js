module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([
				//Template Cache
				'client/app/main/app.templates.js',
				
				//Main Application Modules
				'client/app/main/app.module.js',
				'client/app/main/app.route.js',
				'client/app/main/app.constants.js',
				'client/app/main/app.exception.js',
				'client/app/main/app.error.js',
				'client/app/main/app.logger.js',
				
				//Application Controllers
				'client/app/main/main.controller.js',
				
				//Application Services
				'client/app/main/main.service.js'
            ])
            .pipe(plugins.concat('concat.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dest'));
    };
};