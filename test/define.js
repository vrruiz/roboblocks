'use strict';
/* global require, mochaPhantomJS, mocha */
/* jshint unused:false */
require.config({
    baseUrl: 'test',
    deps: ['testRunner'],
    paths: {
        load_xml: 'load_xml',
        src: '../src',
        roboblocks: '../dist/roboblocks',
        underscore: '../bower_components/underscore/underscore',

        'blockly-bq': '../bower_components/blockly-bq/blockly_compressed',
        'blockly.extensions': '../src/blockly.extensions',
        'blockly.blocks': '../bower_components/blockly-bq/blocks_compressed',
        'blockly.lang': '../bower_components/blockly-bq/msg/js/en',
        'blockly.arduino': '../bower_components/blockly-bq/arduino_compressed',

        jquery: '../bower_components/jquery/dist/jquery',
        mocha: '../bower_components/mocha/mocha',
        requirejs: '../bower_components/requirejs/require',
        sinonjs: '../bower_components/sinonjs/sinon',
        chai: '../bower_components/chai/chai'
    },
    shim: {
        'blockly-bq': {
            exports: 'Blockly'
        },
        'blockly.extensions': {
            deps: ['blockly-bq']
        },
        'blockly.blocks': {
            deps: ['blockly-bq']
        },
        'blockly.lang': {
            deps: ['blockly-bq']
        },
        'blockly.arduino': {
            deps: ['blockly-bq']
        },
        'roboblocks': {
            deps: ['underscore']
        },
        mocha: {
            exports: 'mocha'
        }
    }
});
