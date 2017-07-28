'use strict';

var gulp = require('gulp');
var server = require('gulp-webserver');
var files = require('../config/file.path.js');

gulp.task('start-develop-server', function() {
	return gulp.src(files.index.dest)
		.pipe(server({
			livereload: true,
			host: 'localhost',
			port: 8085
		}));
})