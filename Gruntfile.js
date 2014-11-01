'use strict';

/* jshint camelcase: false */
module.exports = function (grunt) {
    var gruntfile = 'Gruntfile.js';
    var sources = 'sources/**/*.js';
    var tests = 'tests/**/*.js';
    var tousLesJs = [gruntfile, sources, tests];

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            tout: {
                src: tousLesJs
            }
        },

        mochaTest: {
            console: {
                options: {
                    reporter: 'spec'
                },
                src: tests
            }
        },

        watch: {
            tout: {
                files: tousLesJs,
                tasks: [ 'test' ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'mochaTest:console']);
};