'use strict';

var gulp = require('gulp');
var files = require('../config/file.path.js');
var runSequence = require('run-sequence');

gulp.task('watch-css', function() {
    return	gulp.watch(files.sass.src, ['build-css', 'build-docs']);
});

gulp.task('watch-js', function() {
 return	gulp.watch(files.js.src, ['build-js-dev']);
});

gulp.task('watch-template', function() {
  return	gulp.watch(files.js.templates.src, ['build-package']);
});

gulp.task('watch-comment', function() {
	return gulp.watch(files.sass.basePath, ['sass-comment']);
});

gulp.task('watch-all', function(cb) {
  return runSequence(
  	'watch-css',
  	'watch-js',
  	'watch-template',
  	'watch-comment',
  	cb
  	)
});