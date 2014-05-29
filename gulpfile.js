var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('gulp-bower');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('bower', function() {
  bower();
  gulp.src('_vendor/jquery/dist/jquery.js')
    .pipe(rename('01-jquery.js'))
    .pipe(gulp.dest('_assets/js/vendor'));
  gulp.src('_vendor/jquery.stellar/jquery.stellar.js')
    .pipe(rename('02-jquery.stellar.js'))
    .pipe(gulp.dest('_assets/js/vendor'));
  gulp.src('_vendor/masonry/dist/masonry.pkgd.js')
    .pipe(rename('03-masonry.js'))
    .pipe(gulp.dest('_assets/js/vendor'));
});

gulp.task('js', function() {
  gulp.src(['_assets/js/vendor/*.js','_assets/js/*.js'])
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('kelsin.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('less', function() {
  gulp.src('_assets/less/main.less')
    .pipe(less().on('error', gutil.log))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
    .pipe(minify())
    .pipe(concat('kelsin.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('_assets/less/**/*.less', ['less']);
  gulp.watch('_assets/js/*.js', ['js']);
});

gulp.task('init', ['bower']);
gulp.task('build', ['js', 'less']);
gulp.task('default', ['build', 'watch']);
