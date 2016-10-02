'use strict';

var zkutils = require('gulp-zkflow-utils');
var ZkflowNextHandler = require('zkflow-next-handler');
var karma = require('karma');
var browserifyIstanbul = require('browserify-istanbul');
var watch = require('gulp-watch');
var karmaBrowserify = require('karma-browserify');
var karmaJasmine = require('karma-jasmine');
var karmaChromeLauncher = require('karma-chrome-launcher');
var karmaJunitReporter = require('karma-junit-reporter');
var karmaCoverage = require('karma-coverage');

function getKarmaTask(options, gulp, mode) {

  function karmaTask(next) {

    var logger = zkutils.logger('test');
    var zkflowNextHandler;

    var noTestFilesMessage =
      '\nNo test files found.\n\n' +
      'Your test files are determined by globs\n' +
      options.files.toString() + '\n\n' +
      'You can add some matching files with tests.\n' +
      'Learn more about ZKFlow testing toolstack:\n' +
      'http://karma-runner.github.io/0.13/index.html\n' +
      'http://jasmine.github.io/2.3/introduction.html\n' +
      'http://browserify.org/\n';

    var reporters = options.reporters;
    var transform = options.browserifyTransforms;
    var plugins = options.plugins.concat([
      karmaBrowserify,
      karmaJasmine,
      karmaChromeLauncher
    ]);

    if (!mode.watch) {
      reporters = reporters.concat(['junit', 'coverage']);
      transform = transform.concat([browserifyIstanbul({
        ignore: options.istanbulIgnore
      })]);
      plugins.push(karmaJunitReporter);
      plugins.push(karmaCoverage);
    }

    function runKarma() {

      var karmaResolve;
      var karmaReject;
      var karmaPromise;
      var server;

      function newKarmaPromise() {
        karmaPromise = new Promise(function (resolve, reject) {
          karmaResolve = resolve;
          karmaReject = reject;
        });
      }

      newKarmaPromise();

      server = new karma.Server({
        files: options.files,
        plugins: plugins,
        logLevel: options.logLevel,
        frameworks: options.frameworks,
        browserNoActivityTimeout: 120000,
        singleRun: !mode.watch,
        autoWatch: mode.watch,
        preprocessors: options.preprocessors,
        browserify: {
          debug: true,
          configure: function(bundle) {
            bundle.on('update', logger.changed);
          },
          transform: transform
        },
        browsers: options.browsers,
        reporters: reporters,
        junitReporter: {
          outputDir: options.reportsBaseDir + options.junitReporterOutputDir
        },
        coverageReporter: {
          dir: options.reportsBaseDir,
          reporters: options.istanbulReporters
        }
      }, function() {
        // without this empty function karma will stop execution of entire script after tests
      });

      server.on('run_complete', function(browsers, results) {

        var oldKarmaResolve = karmaResolve;
        var oldKarmaReject = karmaReject;

        newKarmaPromise();
        zkflowNextHandler.handle(karmaPromise);

        if (results.exitCode === 0) {
          oldKarmaResolve();
          return;
        }

        oldKarmaReject('failed');

      });

      server.start();

      return zkflowNextHandler.handle(karmaPromise);

    }

    zkflowNextHandler = new ZkflowNextHandler({
      next: next,
      watch: mode.watch,
      logger: logger,
      quickFinish: true
    });

    zkflowNextHandler.handle(
        zkutils.del(options.reportsBaseDir + '**')
        .then(zkutils.globby.bind(undefined, options.files, noTestFilesMessage)), {
          ignoreFailures: true,
          handleSuccess: false
        })
      .then(runKarma, function() {
        var watchStream;
        if (!mode.watch) {
          return;
        }
        watchStream = watch(options.files, function(event) {
          watchStream.close();
          logger.changed(event);
          runKarma();
        });
      });

  }

  return karmaTask;

}

module.exports = {
  getTask: getKarmaTask,
  defaultOptions: {
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
};
