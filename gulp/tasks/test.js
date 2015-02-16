//-- Plugins requires
//

var gulp = require('gulp'),
    config = require('../config'),
    chalk = require('chalk'),
    handleErrors = require('../util/handleErrors'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    stylish = require('jshint-stylish'),
    scssLint = require('gulp-scss-lint'),
    plumber = require('gulp-plumber');


gulp.task('test', ['jshint', 'scss-lint'])


gulp.task('jshint', function () {
  // Hint all non-lib js files and exclude _ prefixed files
  console.log(chalk.blue('» Running task jshint'));
  return gulp.src(
    [
      config.path.assetspath + '/js/modules/**/*.js'
    ])
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish))
    .on('error', handleErrors)
});


var scssReport = function(file) {
  if (!file.scsslint.success) {
    gutil.log(chalk.red(file.scsslint.issues.length + ' issues found in ' + file.path));
  }
};

//-- SCSS Linting. taking rules from scsslint.yml file
gulp.task('scss-lint', function() {
    console.log(chalk.blue('» Running task scss-lint'));
    console.log('/' + config.path.assetspath + '/scss/**/*.scss');
    return (gulp.src([
            config.path.assetspath + '/scss/**/*.scss',
            '!' + config.path.assetspath + '/scss/**/_normalize.scss',
            '!' + config.path.assetspath + '/scss/vendor/**/*.scss' //Exclude vendor scss
        ])
        .pipe(plumber())
        .pipe(scssLint({
          config: './scsslint.yml',
          customReport: scssReport
        }))
        //.pipe(scssLint.reporter(scssReport))
        .on('error', handleErrors)
    );
});

