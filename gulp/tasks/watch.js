//-- Plugins requires
//
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    config = require('../config');
    //watch = require('gulp-watch');
    //
    //

/**
 * Start browsersync task and then watch files for changes
 */

var changeEvent = function(evt) {
    gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + config.path.assetspath + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
};


gulp.task('watch', ['browsersync'], function() {
  gulp.watch([config.path.assetspath + '/images/**/*'],['imagemin:dev']).on('change', function(evt) {
    changeEvent(evt);
  });

  gulp.watch([config.path.assetspath + '/scss/**/*.{sass,scss}'],['scss']).on('change', function(evt) {
    changeEvent(evt);
  });
  if(!config.useBrowserify){
    gulp.watch([config.path.assetspath + '/js/**/*.js'],['javascript:dev']).on('change', function(evt) {
      changeEvent(evt);
    });
  }
  else{
    gulp.watch([config.path.assetspath + '/js/**/*.js'],['browserify-scripts']).on('change', function(evt) {
      changeEvent(evt);
    });
  }

  gulp.watch([config.path.templatepath + '/**/*.*'],['templates']).on('change', function(evt) {
    changeEvent(evt);
  });
});
