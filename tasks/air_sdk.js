/*
 * grunt-air-sdk
 * https://github.com/dayvson@/grunt-air-sdk
 *
 * Copyright (c) 2015 Maxwell Da Silva
 * Licensed under the MIT license.
 */
var shell = require('shelljs');
var airSdk = require('air-sdk');
airSdk.update();
module.exports = function(grunt) {
  grunt.registerMultiTask('air_sdk', 'A grunt plugin to compile Adobe Flex, Adobe Air, Actionscript, MXML applications using the Adobe AIR_SDK and binaries available (mxmlc, compc, etc.)', function() {
    var opts = this.options();
    var binary = airSdk.bin[opts.bin];
    var cmdLineOpts = [binary, opts.rawConfig];
    cmdLineOpts.push("-output=" + this.files[0].dest);
    cmdLineOpts.push(this.files[0].src[0]);
    console.log(cmdLineOpts.join(" "));
    var executed = shell.exec(cmdLineOpts.join(" "));
    if(executed.code === 0 ){
      console.log("File successfully created!");
    }else{
      console.log(executed.output);
    }
  });
};
