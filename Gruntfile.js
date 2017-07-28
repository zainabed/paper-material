module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    
    sass : {
    	dist: {
			files :{
				"public/css/build.css" : "sass/build.scss",
				"public/font/material-icons.woff" : "sass/font/build.scss",
			}
		}
    },
	htmlclean : {
		deploy: {
			expand: true,
			cwd: "template/",
			src: "**/*.html",
			dest: "public/template"
		}
	},
	watch: {
			css: {
				files: 'sass/**/*.scss',
				tasks: ['sass']
			},
			scripts: {
				files: ['public/js/components/*.js'],
				tasks: ['concat:dist']
			}
	},

	copy: {
	  main: {
	       src: 'node_moduels/material-design-icons/iconfont/*', 
	       dest: 'public/font/'
	  },
	},

	ngdoc: {
        options: {
            dest: 'docs',
            scripts: ['public/js/directives.js'],
            title: 'My Documentation'
        },
        api: {
            src: ['public/js/*.js'],
            title: 'API Documentation'
        }
    },

     concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: [
	      		'node_modules/angular/angular.min.js',
	      		'public/js/core.js',
	      		'public/js/components/*.js' 
	      	],
	      dest: 'public/dist/built.js',
	    },
	  },

  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-htmlclean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-ngdoc');

  grunt.registerTask("default", ['copy', 'sass','concat:dist', "watch" ]);
}
