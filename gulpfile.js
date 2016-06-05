var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('default',['watch']);

gulp.task('watch',['scripts'],function(){
  gulp.watch('./source/javascript/*.js',['scripts']);
});

gulp.task('scripts',function(){
  return gulp.src([
    './source/javascript/*.js',
  ])
  .pipe(uglify().on('error', gutil.log))
  .pipe(concat('custom-event-manager.min.js'))
  .pipe(gulp.dest('./dist/javascript'))
})
