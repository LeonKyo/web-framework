//-- Plugins requires
//
var gulp = require('gulp'),
    config = require('../config'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    gzip = require('gulp-gzip'),
    cached = require('gulp-cached'),
    concat = require('gulp-concat'),
    bowerFiles = require('main-bower-files'),
    gulpFilter = require('gulp-filter'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    debowerify = require('debowerify'),
    uglify = require('gulp-uglify'),
    chalk = require('chalk'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    stripDebug = require('gulp-strip-debug'),
    browserSync = require('browser-sync'),
    handleErrors = require('../util/handleErrors');


gulp.task('javascript:dev', ['bower:dev'], function(){
  return gulp.src([config.path.assetspath + '/js/modules/**/*.js'])
    .pipe(plumber())
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js/modules')) //output directory
    .pipe(gulpIf(config.server.lrStarted, browserSync.reload({stream:true})));
});


gulp.task('javascript:stage', ['jshint','bower:stage'], function(){
  return gulp.src([config.path.assetspath + '/js/modules/**/*.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js'))
});


gulp.task('javascript:dist', ['jshint','bower:dist'], function(){
  return gulp.src([config.path.assetspath + '/js/modules/**/*.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js')) //output directory
});


gulp.task('bower:dev', function() {
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src(bowerFiles({
      paths: {
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      }
    }))
    .pipe(jsFilter)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js/libs'));
});


gulp.task('bower:stage', function() {
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src(bowerFiles({
      paths: {
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      }
    }))
    .pipe(jsFilter)
    .on('error', handleErrors)
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js'));
});


gulp.task('bower:dist', function() {
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src(bowerFiles({
      paths: {
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      }
    }))
    .pipe(jsFilter)
    .on('error', handleErrors)
    .pipe(concat('plugins.min.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/js'));
});


gulp.task('browserify-scripts', ['jshint'], function() {
    console.log(chalk.magenta.inverse('» browserify-scripts'));
    return browserify('./' + config.path.assetspath + '/js/modules/main.js') //read the main javascript file
      .transform(debowerify)
      .bundle()
      .on('error', handleErrors)
      .pipe(source('global.js')) //name the file
      .pipe(gulpIf(config.build.isProd, buffer()))
      .pipe(gulpIf(config.build.isProd, sourcemaps.init()))
      .pipe(gulpIf(config.build.isProd, uglify()))
      .pipe(gulpIf(config.build.isProd, stripDebug()))
      .pipe(gulpIf(config.build.isProd, sourcemaps.write()))
      .pipe(gulpIf(config.build.isProd, rename('global.min.js')))
      .pipe(gulp.dest(config.destPath + '/js')) //output directory
      .pipe(gulpIf(config.server.lrStarted, browserSync.reload({stream:true})));
});
