'use strict';
/* global require, mochaPhantomJS, mocha */
/* jshint unused:false */

/* require test suite */
require([
        'jquery',
        'roboblocks',
        'roboblocks.test.options',
        'blockly',
        'blockly.extensions',
        'blockly.blocks',
        'blockly.lang',
        'blockly.arduino',
        'sinonjs',
        'mocha',
        'chai',
        'spec/testSuite'
    ],
    function($, RoboBlocks, options, Blockly, BlocklyExtensions, BlocklyBlocks, BlocklyLang, BlocklyArduino, sinonjs, mocha, chai, testSuite) {

        mocha.ui('bdd');
        mocha.reporter('html');

        chai.config.includeStack = true;

        // https://github.com/chaijs/chai/issues/107
        var should = chai.should();
        window.expect = chai.expect;
        window.assert = chai.assert;

        RoboBlocks.load(options);


        // New workspace for each test case
        var el;
        beforeEach(function () {
            el = document.createElement('div');
            Blockly.inject(document.body.appendChild(el), {
                toolbox: Blockly.createToolbox()
            });
        });

        afterEach(function () {
            document.body.removeChild(el);
        });

        // Mocha starter
        $(document).ready(function() {
            require(testSuite.specs, function() {
                if (window.mochaPhantomJS) {
                    mochaPhantomJS.run();
                } else {
                    mocha.run();
                }

            });
        });
    });