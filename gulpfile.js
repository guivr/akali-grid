'use strict'

/* Requires */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const csso = require('gulp-csso');


/* Tasks */
gulp.task('sass', () => {
  return gulp.src('sass/akali-grid.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', ['sass']);
});


/* Defaults */
gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);