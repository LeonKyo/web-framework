//-- Plugins requires
//
var gulp = require('gulp'),
    config = require('../config'),
    gutil = require('gulp-util'),
    rsync  = require('gulp-rsync');



gulp.task('ftp', function () {
    console.log('option:', config.rsync);

    return gulp.src(config.destPath+'/**/*.*')
        .pipe(rsync(config.rsync))

});
