'use export';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var files = require('../config/file.path.js');
var argv = require('yargs').argv;
var sassExt = '.scss';




gulp.task('sass-component', function(cb) {
	var component = argv.component;
	if (component) {
		var sassFile = files.sass.basePath + '_' + component + sassExt;
		return gulp.src(sassFile)
		.pipe(sass({
			includePaths : files.sass.lib
		}))
		.pipe(gulp.dest(files.sass.dest));
	}

});
