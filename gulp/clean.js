var clean = require('gulp-clean');
var gulp = require('gulp');
var files = require('../config/file.path.js');

gulp.task('clean', function(cb) {
	return gulp.src(files.clean)
	.pipe(clean());
})