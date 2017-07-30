'use strict';
var packageJSON = require('../package.json');
module.exports = {
	sass : {
		src : 'src/assets/**/*.scss',
		dest : 'build',
		comment: 'css',
		basePath: 'src/assets/sass/**/*.scss',
		name : packageJSON.name + '.css',
		lib : ['node_modules/sass-mq/'],
		doc : {
			dest : 'sassdoc'
		}
	},
	css : {
		src : 'css/**/*.js',
		basePath : 'css', 
		name : packageJSON.name + '.css',
	},
	doc : {
		buildPath : 'docs/build/',
		sass: {
			src: ['docs/app/assets/sass/**/*.scss'],
			dest : 'build',
			name: packageJSON.name +  '_docs.css',
		}
	},
	js : {
		name : packageJSON.name + '.js',
		libName:  packageJSON.name + '.lib.js',
		templateName : packageJSON.name + '.template.js',
		src : [
			'docs/app/**/*.js',
			'docs/build/**/*.js'
		]
		,
		lib : [
			'node_modules/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js'
		],
		templates: {
			src: [
				'docs/build/**/*.html',
				'docs/app/**/*.html',
				'docs/config/**/*.html'
			],
			basePath: 'docs/build/partials/api/material'
		},

		dest: {
			dev: 'dev',
			build: 'build'
		}
	},
	example: {
		src: [
			'docs/build/examples/**/*.*'
		],
		dest: 'build/examples'
	},
	font : {
		src : 'src/assets/font/*.*',
		dest : 'build/font'
	},
	install : {
		src : 'temp/**/*.*',
		path : 'dist'
	},
	index1 : {
		src : 'src/index.html',
		dest : 'temp',
		develop : {
			include : ['temp', 'src/app', 'src/lib', 'node_modules', 'temp/font']
		}
	},
	clean: [
		'css',
		'docs/build',
		'dist',
		'build',
		'dev'
	],
	build: {
		src: [
			'build/' + packageJSON.name + '.lib.js',
			'build/' + packageJSON.name + '.js',
			'build/' + packageJSON.name + '.template.js',
			'build/' + packageJSON.name + '.css',
			'build/' + packageJSON.name + '_docs.css',
			'index.html'
		]
	},
	index: {
		src: 'docs/app/index.html',
		dest: 'build',
		ignore: ['build', 'example']
	}
};
