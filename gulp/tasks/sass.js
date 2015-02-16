//-- Plugins requires
//
var gulp = require('gulp'),
    config = require('../config'),
    rubySass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached'),
    gulpFilter = require('gulp-filter'),
    chalk = require('chalk'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    handleErrors = require('../util/handleErrors');





//-- compile scss into css and auto prefix css files
gulp.task('scss', function () {
  var filter = gulpFilter(['*.css', '!*.map']);
  return gulp.src([config.path.assetspath+'/scss/**/*.scss'])
    .pipe(plumber())
    .on('error', handleErrors)
    .pipe(rubySass({
        sourcemap: true,
        sourcemapPath: '../scss',
        style:(config.build.isProd ? 'compressed' : 'compact') ,
        precision: 5
      }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({
        browsers: [
          'last 2 version',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]
      }))
    .pipe(sourcemaps.write())
    .pipe(gulpIf(config.build.isProd, rename({suffix: '.min'})))
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath +'/css'))
    .pipe(gulpIf(config.server.lrStarted, browserSync.reload({stream:true})));
});
