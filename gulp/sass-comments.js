'use export';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var files = require('../config/file.path.js');
var argv = require('yargs').argv;
var comments = require('gulp-export-comments');
var sassExt = '.scss';
var extract = require('extract-comments');


gulp.task('sass-comment', function(cb) {
	//var component = argv.component;
	//if (component) {
		//var sassFile = files.sass.basePath + '_' + component + sassExt;
		//console.log(sassFile);
		return gulp.src(files.sass.basePath).pipe(comments()).pipe(gulp.dest(files.sass.comment));
	//}

});
