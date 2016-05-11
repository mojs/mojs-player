var gulp          = require('gulp');
var fs            = require('fs');
var livereload    = require('gulp-livereload');
var changed       = require('gulp-changed');

var plumber       = require('gulp-plumber');
var concat        = require('gulp-concat');
var rename        = require('gulp-rename');
var uglify        = require('gulp-uglify');
var sequence      = require('run-sequence');

var insert        = require('gulp-insert');
var jeditor       = require("gulp-json-editor");
var shell         = require("gulp-shell");
var babel         = require("gulp-babel");

var devFolder   = '', distFolder  = '', currentVersion = 0;
var distMoFile  = devFolder + 'build/mojs-player.js';
var libMainFile = devFolder + 'lib/mojs-player.js';

var paths = {
  src: {
    babel:    devFolder +  'js/**/*.babel.js',
    index:    devFolder +  'index.jade',
    css:      devFolder +  'css/**/*.styl',
    tests:    distFolder + 'spec/**/*.coffee'
  },
  dist:{
    js:       distFolder + 'js/',
    index:    distFolder,
    css:      distFolder + 'css/',
    tests:    distFolder + 'spec/'
  }
}

var credits = ''

gulp.task('babel-lib', function(e){
  return gulp.src(paths.src.babel)
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015-loose'], plugins: [ 'transform-runtime' ] }))
    .pipe(rename(function (path) {
        return path.basename = path.basename.replace('.babel', '');
      })
    ).pipe(gulp.dest('lib/'))
  });

gulp.task('minify', function() {
  return gulp.src(distMoFile)
          .pipe(plumber())
          .pipe(livereload())
          .pipe(insert.transform(function(contents) {
            return credits + contents;
          }))
          .pipe(gulp.dest('./build'))
          .pipe(uglify())
          .pipe(insert.transform(function(contents) {
            return credits + contents;
          }))
          .pipe(rename('mojs-player.min.js'))
          .pipe(gulp.dest('./build'))
});

gulp.task('attribute-lib', function() {
  return gulp.src(libMainFile)
          .pipe(plumber())
          .pipe(insert.transform(function(contents) {
            return credits + contents;
          }))
          .pipe(gulp.dest('./lib'))
});

gulp.task('update-version', function() {
  sequence('get-current-version', 'update-bower-version', 'update-main-file-version');
});

gulp.task('get-current-version', function(e){
  return gulp.src('package.json')
          .pipe(plumber())
          .pipe(jeditor(function (json) {
            currentVersion = json.version;
            credits = '/*! \n\t:: MojsPlayer :: Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.\n\tOleg Solomka @LegoMushroom 2016 MIT\n\t' + currentVersion + ' \n*/\n\n'
            return json;
          }))
  });

gulp.task('update-bower-version', function(e){
  return gulp.src('bower.json')
          .pipe(plumber())
          .pipe(jeditor(function (json) {
            json.version = currentVersion;
            return json;
          }))
          .pipe(gulp.dest(''))
  });

gulp.task('update-main-file-version', function(e){
  return gulp.src('js/mojs-player.babel.js')
          .pipe(plumber())
          .pipe(insert.transform(function(contents) {
            var newString =  'revision = \''+currentVersion+'\'';
            return contents
              .replace(/revision\s+?\=\s+?(\'|\")\d+\.\d+\.+\d+(\'|\")/i, newString);
          }))
          .pipe(gulp.dest('js/'))
  });

gulp.task('default', function(){
  livereload.listen();
  gulp.run('get-current-version');
  gulp.watch(paths.src.babel, [ 'babel-lib' ]);
  gulp.watch(distMoFile,      [ 'minify' ]);
  gulp.watch(libMainFile,     [ 'attribute-lib' ]);
  gulp.watch('package.json', ['update-version']);
});








