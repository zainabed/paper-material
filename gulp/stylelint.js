'use strict';

var gulp = require('gulp');
var stylelint = require('gulp-stylelint');
var files = require('../config/file.path.js');

gulp.task('validate-sass', function(){
  return gulp.src(files.sass.src)
  .pipe(stylelint({
  	reporters: [
        {formatter: 'string', console: true}
      ]
  }))
});