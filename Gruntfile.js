/*
 * grunt-air-sdk
 * https://github.com/dayvson/grunt-air-sdk
 *
 * Copyright (c) 2015 Maxwell Da Silva
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

      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    air_sdk: {
      hello_world: {
        options: {
          bin:"mxmlc",
          rawConfig: "+configname=air --optimize"
        },
        files: {
          'tmp/HelloWorldApp.swf': 'test/fixtures/HelloWorldApp.as'
        }
      },
      hello_world_swc: {
        options: {
          bin:"compc",
          rawConfig: "-static-link-runtime-shared-libraries=true -target-player=10.1 -source-path test/fixtures -include-classes com.dayvson.lib.Sample"
        },
        files: {
          'tmp/SampleLibrary.swc': 'test/fixtures/SampleLibrary.as'
        }
      },
      VersionAppUsingExternalSWC: {
        options: {
          bin:"mxmlc",
          rawConfig: "+configname=air -debug --optimize -static-link-runtime-shared-libraries=true -target-player=10.1 -library-path+=tmp/SampleLibrary.swc"
        },
        files: {
          'tmp/VersionAppUsingExternalSWC.swf': 'test/fixtures/VersionAppUsingExternalSWC.as'
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'air_sdk', 'nodeunit']);
// grunt.registerTask('test', ['air_sdk']);
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
