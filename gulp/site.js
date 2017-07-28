'use strict';

var gulp = require('gulp');
var files = require('../config/file.path.js');
var inject = require('gulp-inject');
var stream = require('stream-series');

gulp.task('build-site', function(cb) {
  var target =  gulp.src(files.index.src)
  var buildSrc = gulp.src(files.build.src);
  var exampleSrc = gulp.src(files.example.src);
  var source = stream(buildSrc, exampleSrc);
  return target
  .pipe(inject(source, {
    ignorePath: files.index.ignore
  }))
  .pipe(gulp.dest(files.index.dest));
});
