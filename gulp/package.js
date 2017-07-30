'use strict';

var gulp = require('gulp');
var files = require('../config/file.path.js');
var concat = require('gulp-concat');
var angularSort = require('gulp-angular-filesort');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var argv = require('yargs').argv;
var sassExt = '.scss';

gulp.task('build-js-dev', function(cb) {
  return gulp.src(files.js.src)
  .pipe(angularSort())
  .pipe(concat(files.js.name))
  .pipe(gulp.dest(files.js.dest.build));
});


gulp.task('build-js-template', function(cb) {
  return gulp.src(files.js.templates.src)
  .pipe(templateCache({
    module: 'z-material'
  }))
  .pipe(concat(files.js.templateName))
  .pipe(gulp.dest(files.js.dest.build));
});


gulp.task('build-js-lib', function(cb) {
  return gulp.src(files.js.lib)
//  .pipe(angularSort())
  .pipe(concat(files.js.libName))
  .pipe(gulp.dest(files.js.dest.build));
});


gulp.task('build-css', function() {
	return gulp.src(files.sass.src).pipe(sass({
		includePaths : files.sass.lib
	}))
	.pipe(rename(files.sass.name))
	.pipe(gulp.dest(files.sass.dest));
});

gulp.task('build-doc-css', function(){
  return gulp.src(files.doc.sass.src).pipe(sass({
		includePaths : files.sass.lib
	}))
	.pipe(rename(files.doc.sass.name))
	.pipe(gulp.dest(files.doc.sass.dest));
});

gulp.task('build-examples', function(){
  return gulp.src(files.example.src)
    .pipe(gulp.dest(files.example.dest));
});

/*gulp.task('package-js-copy', function(cb) {
return gulp.src(files.js.temp.src)
.pipe(gulp.dest(files.js.dest.build));
})*/

gulp.task('build-package', function(cb) {
  return runSequence(
    'build-css',
    'build-doc-css',
    'build-font',
    'build-js-dev',
    'build-js-template',
    'build-js-lib',
    'build-examples',
    cb
  )
})
