var gulp = require('gulp');
var Dgeni = require('dgeni');
var runSequence = require('run-sequence');

gulp.task('process-docs', function(cb) {
	var dgeni = new Dgeni([require('../docs/config')]);
	return dgeni.generate();
});

gulp.task('build-docs', function(cb){
	return runSequence(
 		'sass-comment',
 		'process-docs',
 		cb
	);
});
