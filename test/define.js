'use strict';
/* global require, mochaPhantomJS, mocha */
/* jshint unused:false */
require.config({
    baseUrl: 'test',
    deps: ['testRunner'],
    paths: {
        src: '../src',
        roboblocks: '../dist/roboblocks',
        underscore: '../bower_components/underscore/underscore',

        blockly: '../bower_components/blockly/blockly_compressed',
        'blockly.extensions': '../src/blockly.extensions',
        'blockly.blocks': '../bower_components/blockly/blocks_compressed',
        'blockly.lang': '../bower_components/blockly/msg/js/en',
        'blockly.arduino': '../bower_components/blockly/arduino_compressed',

        jquery: '../bower_components/jquery/dist/jquery',
        mocha: '../bower_components/mocha/mocha',
        requirejs: '../bower_components/requirejs/require',
        sinonjs: '../bower_components/sinonjs/sinon',
        chai: '../bower_components/chai/chai'
    },
    shim: {
        blockly: {
            exports: 'Blockly'
        },
        'blockly.extensions': {
            deps: ['blockly']
        },
        'blockly.blocks': {
            deps: ['blockly']
        },
        'blockly.lang': {
            deps: ['blockly']
        },
        'blockly.arduino': {
            deps: ['blockly']
        },
        'roboblocks': {
            deps: ['underscore']
        },
        mocha: {
            exports: 'mocha'
        }
    }
});
