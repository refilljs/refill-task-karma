# ZKflow task karma

Karma task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-karma)
[![npm](https://img.shields.io/npm/l/zkflow-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-karma)
[![npm](https://img.shields.io/npm/dm/zkflow-task-karma.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-karma)
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-karma/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-karma)<br>
[![bitHound Overall Score](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/badges/score.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma)
[![bitHound Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/badges/dependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/badges/devDependencies.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma/badges/code.svg)](https://www.bithound.io/github/zaklinaczekodu/zkflow-task-karma)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-karma.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-karma)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-karma.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-karma)
[![GitHub watchers](https://img.shields.io/github/watchers/zaklinaczekodu/zkflow-task-karma.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-karma)

Installation
------------

```bash
npm install --save zkflow-task-karma zkflow gulp
```

Example
-------

ZKflow taks karma is used in [ZKflow for Angular](https://github.com/zaklinaczekodu/zkflow-angular)

Usage
-----

gulpfile.js

```javaScript
require('zkflow')({
  js: {
    task: require('zkflow-task-karma')
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
  istanbulIgnore: [
    '**/node_modules/**',
    '**/bower_components/**',
    '*Spec.js',
    '**/*Spec.js'
  ],
  istanbulReporters: [{
    type: 'html',
    subdir: 'coverageHtml'
  }, {
    type: 'clover',
    subdir: 'coverageClover'
  }],
  browserifyTransforms: []
}
```

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
