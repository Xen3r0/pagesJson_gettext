# grunt-pagesJson_gettext

> Convert JSON file for states to JS file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pagesJson_gettext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pagesJson_gettext');
```

## The "pagesJson_gettext" task

### Overview
In your project's Gruntfile, add a section named `pagesJson_gettext` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pagesJson_gettext: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.moduleName
Type: `String`
Default value: `'winlassie'`

Angular module name

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content state JSON, the generated result would be Javascript Array.

```js
grunt.initConfig({
  pagesJson_gettext: {
    options: {},
    files: {
      'dest/pages.js': ['src/pages.json', '....'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
