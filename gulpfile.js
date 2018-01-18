var gulp = require('gulp');
var guppy = require('git-guppy')(gulp);
const eslint = require('gulp-eslint');


gulp.task('eslint', () => {
  return gulp.src(['./src/*.js'])
      .pipe(eslint('./.eslintrc'))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('pre-commit', ['eslint']);