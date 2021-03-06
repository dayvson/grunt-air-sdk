# grunt-air-sdk

> A grunt plugin to compile Adobe Flex, Adobe Air, Actionscript, MXML applications using the Adobe AIR_SDK and binaries available (mxmlc, compc, etc.)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-air-sdk --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-air-sdk');
```

## The "air_sdk" task

### Overview
In your project's Gruntfile, add a section named `air_sdk` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
    }
  }
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  air_sdk: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  air_sdk: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
