'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var stream = require('stream-series');
var files = require('../config/file.path.js');

gulp.task('build-index', function() {
	var index = gulp.src(files.index.src);
	var cssSource = gulp.src(files.css.src + '/' + files.css.name);
	var docCssSource = gulp.src(files.css.src + '/' + files.doc.sass.name);
	var jsSource = gulp.src(files.js.develop.src);
	var jsLibSource = gulp.src(files.js.lib);
	var source = stream(cssSource, docCssSource, jsLibSource, jsSource);

	index.pipe(inject(source, {
			ignorePath: files.index.develop.include,
			addRootSlash: false
		}))
		.pipe(gulp.dest(files.index.dest));
});
