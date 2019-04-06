
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
//might need to be installed
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/scss/*.scss', ['sass']);
});