var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('bower', function() {
  bower();
  gulp.src('_vendor/jquery/dist/jquery.js')
    .pipe(gulp.dest('js/vendor/01-jquery.js'));
  gulp.src('_vendor/jquery.stellar/jquery.stellar.js')
    .pipe(gulp.dest('js/vendor/02-jquery.stellar.js'));
});
