# Refill task karma

Karma task in [Refill](https://github.com/refilljs/refill) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-karma)
[![npm](https://img.shields.io/npm/l/refill-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-karma)
[![npm](https://img.shields.io/npm/dm/refill-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-karma)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-karma/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-karma)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-karma/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-karma)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-karma/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-karma/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-karma/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-karma/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-karma/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-karma)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-karma.svg?style=flat-square)](https://github.com/refilljs/refill-task-karma)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-karma.svg?style=flat-square)](https://github.com/refilljs/refill-task-karma)
[![GitHub watchers](https://img.shields.io/github/watchers/refilljs/refill-task-karma.svg?style=flat-square)](https://github.com/refilljs/refill-task-karma)

Installation
------------

```bash
npm install --save refill-task-karma refill gulp
```

Example
-------

Refill taks karma is used in [Refill for Angular](https://github.com/refilljs/refill-angular)

Usage
-----

gulpfile.js

```javaScript
require('refill')({
  js: {
    task: require('refill-task-karma')
  }
}, require('gulp'), mode)
```

### mode

Mode object. Determines task mode of operation.

```javaScript
{
  // If true rerun all tests on any js file changes. Do not stop on errors.
  // skip coverage and junit
  // If false run only once and stop on any error
  // generate coverage and junit
  watch: true 
}
```

Default options
---------------

```javaScript
{
  files: [
    'src/*Spec.js',
    'src/**/*Spec.js'
  ],
  logLevel: 'warn',
  frameworks: ['jasmine', 'browserify'],
  browserNoActivityTimeout: 120000,
  preprocessors: {
    'src/**': ['browserify']
  },
  browsers: ['Chrome'],
  reporters: ['progress'],
  plugins: [],
  reportsBaseDir: 'reports/test/',
  junitReporterOutputDir: 'junit/',
  htmlReporterOutputDir: 'html/',
  istanbulReporters: [{
    type: 'html',
    subdir: 'coverageHtml'
  }, {
    type: 'clover',
    subdir: 'coverageClover'
  }, {
    type: 'text-summary'
  }],
  browserifyTransforms: [],
  babelPluginIstanbulOptions: {
    exclude: [
      '**/node_modules/**',
      '*Spec.js',
      '**/*Spec.js'
    ]
  }
}
```

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-task-karma/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
