//-- Plugins requires
//
var gulp = require('gulp'),
    config = require('../config'),
    compileHandlebars = require('gulp-compile-handlebars'),
    browserSync = require('browser-sync'),
    tap = require('gulp-tap'),
    inject = require('gulp-inject'),
    _ = require('lodash'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached'),
    concat = require('gulp-concat'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
    chalk = require('chalk'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    globule = require('globule'),
    gutil = require('gulp-util'),
    stripDebug = require('gulp-strip-debug'),
    handleErrors = require('../util/handleErrors');

var cwd = process.cwd();

gulp.task('templates', function() {
    console.log(chalk.blue('» Running task templates'), 'destPath: ' + config.destPath);
    var numTemplates = globule.find(['templates/*.*', '!_*']).length,
        count = 0,
        unvalidatedFiles = [];

    console.log('numTemplates:', numTemplates)
    // Go over all root template files
    gulp.src([config.path.templatepath + '/*.*', '!' + config.path.templatepath + '/index.html', '!_*'])
        .pipe(tap(function(htmlFile) {
            var baseName = path.basename(htmlFile.path),
                cwdParts = cwd.replace(/\\/g, '/').split('/'),
                pluginjsPath = '',
                modulejsPath = '';

            if(!config.useBrowserify){
              if(config.build.isProd){
                console.log('isProd')
                pluginjsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/plugins.min.js'
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/main.min.js'
              }
              else if(config.build.isStage) {
                console.log('isStage')
                pluginjsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/plugins.js'
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/main.js'
              }
              else{
                console.log('isServe')
                pluginjsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/libs/**/*.js'
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/modules/**/*.js'
              }
            }
            else{
              if(config.build.isProd){
                console.log('isProd')
                pluginjsPath = '';
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/global.min.js'
              }
              else if(config.build.isStage) {
                console.log('isStage')
                pluginjsPath = '';
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/global.js'
              }
              else{
                console.log('isServe')
                pluginjsPath = '';
                modulejsPath = config.destPath + (config.path.buildassetspath.length > 0 ? '/'+config.path.buildassetspath : '') + '/js/global.js'
              }
            }


            console.log('pluginjsPath', pluginjsPath);
            console.log('modulejsPath', modulejsPath);

            console.log(chalk.blue('» compiling: '+config.path.templatepath + '/' + baseName));

            gulp.src(config.path.templatepath + '/' + baseName)
                .pipe(plumber())
                .pipe(compileHandlebars({
                    templateName: baseName
                }, {
                    batch: [config.path.templatepath + '/layout', config.path.templatepath + '/partials', config.path.templatepath + '/partials/components'],
                    helpers: {
                        equal: function(v1, v2, options) {
                            return (v1 == v2) ? options.fn(this) : options.inverse(this);
                        }
                    }
                }))
                .pipe(gulpIf(!config.useBrowserify, inject(gulp.src(pluginjsPath, {read: false}),
                  {
                    name: 'plugins',
                    ignorePath: config.destPath,
                    addRootSlash: true
                  })))
                /*.pipe(inject(gulp.src(pluginjsPath, {read: false}),
                  {
                    name: 'plugins',
                    ignorePath: config.destPath,
                    addRootSlash: true
                  }))*/
                .pipe(inject(gulp.src(modulejsPath, {read: false}),
                  {
                    ignorePath: config.destPath,
                    addRootSlash: true
                  }))
                .pipe(inject(es.merge(gulp.src(config.destPath + '/' + config.path.buildassetspath + '/css/**/*.css', {read: false})), {ignorePath: config.destPath, addRootSlash: true}))
                .on('error', handleErrors)
                .pipe(gulp.dest(config.destPath))
                .on('data', function () {
                  if (config.server.lrStarted) {
                    gulp.start('listing');
                  }
                  this.resume();
                })
                .pipe(gulpIf(config.server.lrStarted, browserSync.reload({stream:true})));

        }));
});
