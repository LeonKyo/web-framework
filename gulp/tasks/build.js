//-- Plugins requires
//
var gulp = require('gulp'),
    config = require('../config'),
    chalk = require('chalk'),
    runSequence = require('run-sequence'),
    fs = require('fs');


gulp.task('build', ['build:stage']);

gulp.task('build:stage', function(){
  fs.exists('assets/js/bower_components', function(exists) {
    if (!exists) {
      console.log(chalk.red('Please run bower install first!'));
    }
    else{
      config.destPath = config.path.stagepath;
      config.build.isStage = true;
      console.log(chalk.magenta.inverse('» Building for staging...'));
      if(!config.useBrowserify){
        runSequence('del', 'imagemin:stage', 'svgsprite', 'imgsprite', 'scss', 'javascript:stage', 'templates', 'browsersync');
      }
      else{
        runSequence('del', 'imagemin:stage', 'svgsprite', 'imgsprite', 'scss', 'browserify-scripts', 'templates', 'browsersync');
      }
    }
  });

});


gulp.task('build:dist', function(){
  fs.exists('assets/js/bower_components', function(exists) {
    if (!exists) {
      console.log(chalk.red('Please run bower install first!'));
    }
    else{
      config.destPath = config.path.distpath;
      config.build.isProd = true;
      console.log(chalk.magenta.inverse('» Building for distribute...'));

      if(!config.useBrowserify){
        runSequence('del', 'imagemin:stage', 'svgsprite', 'imgsprite','scss', 'javascript:dist', 'templates', 'browsersync');
      }
      else{
        runSequence('del', 'imagemin:stage', 'svgsprite', 'imgsprite','scss', 'browserify-scripts', 'templates', 'browsersync');
      }
    }
  });

});
