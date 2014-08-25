'use strict';
/* global require, mochaPhantomJS, mocha */
/* jshint unused:false */
require.config({
    baseUrl: 'test',
    shim: {
        mocha: {
            exports: 'mocha'
        }
    },
    paths: {
        lib: '../lib',
        blockly: "../bower_components/blockly/blockly_compressed",
        'blockly.blocks': '../bower_components/blockly/blocks_compressed',
        'blockly.lang': '../bower_components/blockly/msg/js/en',
        'blockly.arduino': '../bower_components/blockly/arduino_compressed',
        jquery: "../bower_components/jquery/dist/jquery",
        mocha: "../bower_components/mocha/mocha",
        requirejs: "../bower_components/requirejs/require",
        "chai-as-promised": "../bower_components/chai-as-promised/lib/chai-as-promised",
        sinonjs: "../bower_components/sinonjs/sinon",
        chai: "../bower_components/chai/chai"
    },
    deps: ['testRunner']
});
