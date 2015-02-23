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

var useMXMLC = function(opts, files){
  var cmdLineOpts = [airSdk.bin[opts.bin], opts.rawConfig];
  cmdLineOpts.push("-output=" + files[0].dest);
  cmdLineOpts.push(files[0].src[0]);
  return cmdLineOpts.join(" ");
};

var useCOMPC = function(opts, files){
  var cmdLineOpts = [airSdk.bin[opts.bin], opts.rawConfig];
  cmdLineOpts.push("-output=" + files[0].dest);
  return cmdLineOpts.join(" ");
};

module.exports = function(grunt) {
  grunt.registerMultiTask('air_sdk', 'A grunt plugin to compile Adobe Flex, Adobe Air, Actionscript, MXML applications using the Adobe AIR_SDK and binaries available (mxmlc, compc, etc.)', function() {
    var opts = this.options();
    var cmdLineOpts = "";
    switch(opts.bin){
      case "mxmlc":
        cmdLineOpts = useMXMLC(opts, this.files);
        break;
      case "compc":
        cmdLineOpts = useCOMPC(opts, this.files);
        break;
      default:
        console.log("Binary not supported yet");
        return;
    }
    var executed = shell.exec(cmdLineOpts);
    if(executed.code === 0 ){
      console.log("File successfully created!");
    }else{
      console.log(executed.output);
    }
  });
};
