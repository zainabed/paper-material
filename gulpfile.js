'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
// For Gulp 4 use series to run task.
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var files = require('./config/file.path.js');
var git = require('gulp-git');
var bump = require('gulp-bump');
var packageJSON = require('./package.json');

// Include Gulp tasks
requireDir('gulp');

gulp.task('build-app', function(cb) {
	return runSequence(
		//'clean',
		'build-docs',

		'build-package',
		'build-site',
    'start-develop-server',
    'watch-all',
		cb);
});

gulp.task('clean-build', function(cb) {
   return gulp.src(files.index.dest)
      .pipe(clean());
});

gulp.task('clean-install', function(cb) {
   return gulp.src(files.install.path)
      .pipe(clean());
})

gulp.task('install', function(cb) {
    return gulp.src(files.install.src)
    .pipe(gulp.dest(files.install.path));
});

gulp.task('prepublish', function(cb) {
  return runSequence(
  	  'clean-build',
  	  'clean-install',
  	  'process-sass',
	  'build-font',
	  'install',
	  //'push',
      cb
  	);
});

gulp.task('bump' , function(cb) {
  return gulp.src('./package.json')
     .pipe(bump())
     .pipe(gulp.dest('./'));
});

gulp.task('checkout', function(cb) {
  return git.checkout('master', cb, function(err) {
  	if(err) throw err;
  });
});

gulp.task('pull', ['bump'], function(cb) {
  return git.pull('origin', 'master',  function(err) {
  });
});

gulp.task('add', ['bump'], function(){
  return gulp.src('./package.json')
    .pipe(git.add());
});

gulp.task('commit', ['add'],function(cb) {
  return gulp.src('./package.json')
    .pipe(git.commit('bumping version ' + getVersion(), function(err){
    if(err) throw err;
  }));
});

gulp.task('push', ['commit'], function(cb) {
  return git.push('origin', 'master', {args: " --tags"}, function(err){
    if(err) throw err;
  });
});

function getVersion() {
	return packageJSON.version;
}
