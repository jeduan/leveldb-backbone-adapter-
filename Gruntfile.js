module.exports = function(grunt) {
	// grunt.initConfig({
	// });

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['test/*.js', 'lib/*.js'],
				tasks: ['mochaTest'],
				options: {
					spawn: true,
				}
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default");
};