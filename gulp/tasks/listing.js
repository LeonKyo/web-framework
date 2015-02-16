//-- Plugins requires
//
var gulp = require('gulp'),
    chalk = require('chalk'),
    config = require('../config'),
    inject = require('gulp-inject');


gulp.task('listing', function () {
  var count = 0;

  console.log(chalk.blue('» Running task listing'), 'destPath: ' + config.destPath);
  gulp.src([config.path.templatepath + '/index.html'])
    .pipe(inject(
      gulp.src([config.path.templatepath + '/**/*.html', '!' + config.path.templatepath + '/index.html', '!' + config.path.templatepath + '/partials/**/*', '!' + config.path.templatepath + '/layout/**/*'], {read: false}), {
        transform: function (filepath) {
          var html = '';
          if (filepath.slice(-5) === '.html') {
            var filename = filepath.slice(config.path.templatepath.length+1, filepath.length);
            count++;

            if(count == 1){
              html = '<h1>' + config.projName + '</h1><ul id="files">';
            }
            html += '<li><a href=' + filename + ' target="_blank">' +count+'. '+ filename + '</a></li>';

            return html;
          }
          // Use the default transform as fallback:
          return inject.transform.apply(inject.transform, arguments);
        }
      }
    ))
    .pipe(gulp.dest(config.destPath));
});
