var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
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

//Static Server + watching scss/html files
/*gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);*/