var gulp = require('gulp'),
    config = require('../config'),
    del = require('del'),
    chalk = require('chalk'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    fs = require('fs');



gulp.task('default', function(cb){
  fs.exists(config.path.assetspath + '/js/bower_components', function(exists) {
    if (!exists) {
      console.log(chalk.red('Please run bower install first!'));
    }
    else{
      config.destPath = config.path.servepath;
      console.log(chalk.magenta.inverse('» Building for development...'));

      if(!config.useBrowserify){
        runSequence('del', 'pngSprite', 'imagemin:dev', 'imgsprite', 'scss', 'javascript:dev', 'templates', 'watch');
      }
      else{
        runSequence('del', 'pngSprite', 'imagemin:dev', 'imgsprite', 'scss', 'browserify-scripts', 'templates', 'watch');
      }
    }
  });
});

gulp.task('del', function(){
  del([config.destPath], function (err, deletedFiles) {
    if(err){
      console.log(chalk.red('Error deleting files: '+err));
    }

  })
});
