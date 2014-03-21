/*
 * fdserver
 * https://github.com/xiaoyue3/gruntplugin
 *
 * Copyright (c) 2014 xiaoyue
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp/*.js']
    },

    // Configuration to be run (and then tested).
    fdserver: {
      default_options: {
        options: {
          // baseUrl : 'test/',
          projectName : 'blog7',      //工程名
          reset : true                //是否进行增量打包
        },
        files: {
          'test/tmp': 'test/source'
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'fdserver', 'nodeunit']);

  grunt.registerTask('test', ['clean','fdserver']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};