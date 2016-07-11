module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/js/**/*.js')
            .pipe(plugins.concat('concat.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dest'));
    };
};