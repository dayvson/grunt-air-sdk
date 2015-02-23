'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.air_sdk = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  compiling_swf_using_mxmlc_default_options: function(test) {

    var actual = grunt.file.read('tmp/HelloWorldApp.swf');
    var expected = grunt.file.read('test/expected/HelloWorldApp.swf');
    test.equal(actual, expected, "the compilation should generate the same file");
    test.done();
    
  },
  compiling_swf_using_an_external_swc_compiled_file: function(test) {
    var actual = grunt.file.read('tmp/VersionAppUsingExternalSWC.swf');
    var expected = grunt.file.read('test/expected/VersionAppUsingExternalSWC.swf');
    test.equal(actual, expected, "the compilation should generate the same file");
    test.done();
  }
};
