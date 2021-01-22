import { src, dest, series, parallel } from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import insert from 'gulp-insert';
import jeditor from "gulp-json-editor";
import babel from "gulp-babel";
import del from 'del';

let devFolder   = '';
let distFolder  = '';
let currentVersion = 0;
let credits = '';

const distMoFile  = devFolder + 'build/mojs-player.js';
const libMainFile = devFolder + 'lib/mojs-player.js';
const pathSrcJS = devFolder +  'js/**/*.js'

const clean = async () => await del([ 'lib', './build/mojs-player.min.js' ]);

const babelLib = () => src(pathSrcJS)
  .pipe(plumber())
  .pipe(babel())
  .pipe(dest('lib/'));

const minify = () => src(distMoFile)
  .pipe(plumber())
  .pipe(
    insert.transform((contents) => {
      return credits + contents;
    })
  )
  .pipe(dest('./build'))
  .pipe(uglify())
  .pipe(
    insert.transform((contents) => {
      return credits + contents;
    })
  )
  .pipe(rename('mojs-player.min.js'))
  .pipe(dest('./build'));

const attributeLib = () => src(libMainFile)
  .pipe(plumber())
  .pipe(
    insert.transform((contents) => {
      return credits + contents;
    })
  )
  .pipe(dest('./lib'));

const getCurrentVersion = () => src('package.json')
  .pipe(plumber())
  .pipe(jeditor((json) => {
    currentVersion = json.version;
    credits = '/*! \n\t:: MojsPlayer :: Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.\n\tOleg Solomka @LegoMushroom 2016 MIT\n\t' + currentVersion + ' \n*/\n\n'
    return json;
  }));

const updateBowerVersion = () => src('bower.json')
  .pipe(plumber())
  .pipe(jeditor((json) => {
    json.version = currentVersion;
    return json;
  }))
  .pipe(dest('./'));

const updateMainFileVersion = () => src('js/mojs-player.js')
  .pipe(plumber())
  .pipe(insert.transform((contents) => {
    const newString =  'revision = \''+currentVersion+'\'';
    return contents.replace(/revision\s+?\=\s+?(\'|\")\d+\.\d+\.+\d+(\'|\")/i, newString);
  }))
  .pipe(dest('js/'));

const updateVersion = series(getCurrentVersion, updateBowerVersion, updateMainFileVersion);

export default series(clean, babelLib, attributeLib, updateVersion, minify);
