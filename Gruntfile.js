module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: ['{{ project_name }}/static/sass/vendor', '{{ project_name }}/static/sass/partials']
                },
                files: {
                    '{{ project_name }}/static/css/{{ project_name }}.css': '{{ project_name }}/static/sass/{{ project_name }}.scss'
                }
            },
            dev: {
                options: {
                    sourcemap: true,
                    style: 'expanded',
                    loadPath: ['{{ project_name }}/static/sass/vendor', '{{ project_name }}/static/sass/partials']
                },
                files: {
                    '{{ project_name }}/static/css/{{ project_name }}.css': '{{ project_name }}/static/sass/{{ project_name }}.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['{{ project_name }}/static/sass/{,**}/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['sass:dist']);

};
