/*var gulp = require('gulp'),
 config = require('../config'),
 hologram = require('gulp-hologram');*/


var gulp = require('gulp'),
  config = require('../config'),
  gutil = require('gulp-util'),
  notify = require('gulp-notify'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  browserSync = require('browser-sync'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  config = require('../config'),
  hologram = require('gulp-hologram');

// SASS compile, autoprefix and minify task
gulp.task('styles', function() {
  return gulp.src('styleguide/assets/sass/cortana.scss')
    .pipe(sass())
    .on('error', gutil.beep)
    .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    //.pipe(minifycss())
    .pipe(gulp.dest('styleguide/theme-build/css'));
});

// CSS vendors concat and minify
gulp.task('css_vendors', function() {
  gulp.src([
    'styleguide/vendors/Slidebars/distribution/0.9.4/slidebars.css',
    'styleguide/vendors/angular-motion/dist/angular-motion.css'
  ])
    .pipe(concat('vendors.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('styleguide/theme-build/css'))
});

// JS task
gulp.task('scripts', function() {
  gulp.src('styleguide/assets/js/*.js')
    .pipe(jshint())
    //.pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('theme-build/js'))
    .pipe(rename({ suffix: '.min' }))
    //.pipe(uglify())
    .pipe(gulp.dest('styleguide/theme-build/js'));
});

// JS vendors concat and minify
gulp.task('js_vendors', function() {
  gulp.src([
    /*'styleguide/vendors/jquery/jquery.js',*/
    'styleguide/vendors/Slidebars/distribution/0.9.4/slidebars.min.js',

    'styleguide/vendors/angular/angular.js',
    'styleguide/vendors/angular/angular-animate.js',
    'styleguide/vendors/angular-strap/angular-strap.min.js',
    'styleguide/vendors/angular-strap/angular-strap.tpl.min.js',
    'styleguide/vendors/angular-bootstrap/ui-bootstrap-tpls-0.12.1.js',
    'styleguide/vendors/angular-bootstrap/ui-bootstrap-tpls-0.12.1.min.js'

    /*
     'styleguide/vendors/angular/Angular.js',
     'styleguide/vendors/angular-animate/angular-animate.js',
     'styleguide/vendors/angular-strap/dist/angular-strap.min.js',
     'styleguide/vendors/angular-strap/dist/angular-strap.tpl.min.js'
    */

  ])
    .pipe(concat('vendors.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('styleguide/theme-build/js'));
});

/*
 gulp.task('browser-sync', function() {
 browserSync.init(['theme-build/css*//*.css', '*.html', 'theme-build/js*//*.js'], {
 proxy: 'localhost',
 open: false
 });
 });
*/

gulp.task('hologram', function() {
  gulp.src('styleguide/hologram_config.yml')
    .pipe(hologram());
});

//gulp.task('default', ['watch', 'js_vendors', 'css_vendors', 'styles', 'scripts', 'browser-sync']);
//gulp.task('hologram-gen', ['js_vendors', 'css_vendors', 'styles', 'scripts', 'hologram']);
gulp.task('hologram-gen', ['css_vendors', 'styles', 'scripts', 'hologram']);



