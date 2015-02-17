var gulp = require('gulp'),
    config = require('../config'),
    hologram = require('gulp-hologram');



gulp.task('hologram', function() {
  gulp.src('styleguide/config.yml')
    .pipe(hologram());
});

