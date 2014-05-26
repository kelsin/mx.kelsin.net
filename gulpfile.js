var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

var bower = require('gulp-bower');

gulp.task('bower', function() {
  bower()
    .pipe(gulp.dest('lib/'));
});
