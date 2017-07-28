module.exports = function(grunt){
grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      sass: {
        dist: {
            files: [{
	            expand: true,
	            cwd: 'sass',
	            src: ['*.scss'],
	            dest: 'css',
	            ext: '.css'
	          }]
	     }
	  }
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.registerTask("default","Generate CSS files from Sass fiels.",["sass"]);
}
