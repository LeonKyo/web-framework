var gulp = require('gulp'),
    config = require('../config'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),
    svgSprites = require('gulp-svg-sprites'),
    svg2png = require('gulp-svg2png'),
    handleErrors = require('../util/handleErrors');


/* Gulp task for creating image sprite */
gulp.task('imgsprite', function () {
  var spriteData = gulp.src(config.path.assetspath + '/images/sprites/img/**/*').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_imgsprite.scss',
    algorithm: 'left-right',
    imgPath: config.path.buildassetspath + '/images/sprite.png',
    cssTemplate: config.path.assetspath + '/scss/tpl/scss.imgsprite.template.mustache',
  }));

  spriteData.img
    .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/images'))

  spriteData.css
    .pipe(gulp.dest(config.path.assetspath + '/scss/mixin'))

});


/* Gulp task for creating SVG sprite with png fallback */
gulp.task('svgsprite', function () {

  return gulp.src(config.path.assetspath + '/images/sprites/svg/**/*')
    .pipe(svgSprites({
      cssFile: 'scss/mixin/_svgsprite.scss',
      preview: false,
      layout: 'left-right',
      padding: 0,
      svg: {
        sprite: 'images/svg/svg-sprites.svg'
      },
      preview: {
          sprite: '../'+ config.path.templatepath + '/svg-preview.html'
      },
      templates: {
        css: require("fs").readFileSync(config.path.assetspath + '/scss/tpl/_svgsprite-template.scss', "utf-8")
      }
    }))
    .pipe(gulp.dest(config.path.assetspath));

});

gulp.task('pngSprite', ['svgsprite'], function() {
  return gulp.src(config.path.assetspath + '/images/svg/svg-sprites.svg')
    .on('error', handleErrors)
    .pipe(svg2png())
    .pipe(gulp.dest(config.destPath + '/' + config.path.buildassetspath + '/images/svg/'));
});
