var gulp = require('gulp'),
    config = require('../config'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    uglify = require('gulp-uglify'),
    chalk = require('chalk'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    install = require("gulp-install"),
    stripDebug = require('gulp-strip-debug'),
    handleErrors = require('../util/handleErrors');


var filterByExtension = function(extension){
    return filter(function(file){
        return file.path.match(new RegExp('.' + extension + '$'));
    });
};


gulp.task('bower-build', function(){
    var mainFiles = mainBowerFiles();

    if(!mainFiles.length){
        // No main files found. Skipping....
        return;
    }

    var jsFilter = filterByExtension('js');

    return gulp.src(mainFiles)
        .pipe(jsFilter)
        .pipe(gulpIf(config.build.isProd, sourcemaps.init()))
        .pipe(gulpIf(config.build.isProd, uglify()))
        .pipe(gulpIf(config.build.isProd, stripDebug()))
        .pipe(gulpIf(config.build.isProd, sourcemaps.write()))
        .pipe(gulpIf(config.build.isProd, rename('plugins.min.js')))
        .pipe(gulp.dest(config.destPath+'/js'))
        .pipe(jsFilter.restore())
        .pipe(filterByExtension('css'))
        .pipe(concat('plugins.css'))

        .pipe(gulp.dest(config.destPath+'/css'));
});



