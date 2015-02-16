var gulp = require('gulp'),
    config = require('../config'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    handleErrors = require('../util/handleErrors');



gulp.task('imagemin:dev', function () {
    return gulp.src([config.path.assetspath + '/images/**/*', '!' + config.path.assetspath + '/images/sprites{,/**}'])
        .on('error', handleErrors)
        .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/images')) //output directory
});


gulp.task('imagemin:stage', function () {
    return gulp.src([config.path.assetspath + '/images/**/*', '!' + config.path.assetspath + '/images/sprites{,/**}'])
        .on('error', handleErrors)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/images')) //output directory
});
