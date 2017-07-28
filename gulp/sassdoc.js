/*'use strict';

var gulp = require('gulp');
var sassdoc = require('sassdoc');
var files = require('../config/file.path.js');

gulp.task('build-sassdoc', function() {
	return gulp.src(files.sass.src)
		.pipe(sassdoc())
		.pipe(gulp.dest(files.sass.doc.dest));
});
*/