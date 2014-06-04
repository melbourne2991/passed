module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/app.css': 'sass/app.scss'
				}
			}
		},
		watch: {
			dist: {
				files: 'sass/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
}