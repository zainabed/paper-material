'use strict';

var gulp = require('gulp');
var files = require('../config/file.path.js');

gulp.task('build-font', function() {
	return gulp.src(files.font.src)
		.pipe(gulp.dest(files.font.dest));
});