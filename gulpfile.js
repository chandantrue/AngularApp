var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./gulp/tasks/' + task)(gulp, plugins);
}

gulp.task('concat', getTask('concat'));
gulp.task('sass', getTask('sass'));

gulp.task('default', ['concat', 'sass'], function () {
    gulp.watch('client/app/main/**/*.js', ['concat']);
    gulp.watch('client/app/assets/css/sass/**/*.{sass,scss}', ['sass']);
});