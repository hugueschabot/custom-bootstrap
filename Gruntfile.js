module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
            dist: ['dist']
        },

        recess: {
            options: {
                compile: true
            },
            bootstrap: {
                src: ['less/custom-bootstrap.less'],
                dest: 'dist/css/<%= pkg.name %>.css'
            },
            bootstrap_min: {
                options: {
                    compress: true
                },
                src: ['less/custom-bootstrap.less'],
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        },

        watch: {
            recess: {
                files: 'less/*.less',
                tasks: ['recess']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-recess');

    // CSS distribution task.
    grunt.registerTask('dist-css', ['recess']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-css']);

    // Default task.
    grunt.registerTask('default', ['dist']);
};
