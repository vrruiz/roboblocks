'use strict';
/* global require, mochaPhantomJS, mocha */
/* jshint unused:false */

/* require test suite */
require([
        'lib/roboblocks',
        'jquery',
        'sinonjs',
        'mocha',
        'chai',
        'chai-as-promised',
        'spec/testSuite'
    ],
    function(roboblocks, $, sinonjs, mocha, chai, chaiAsPromised, testSuite) {

        mocha.ui('bdd');
        mocha.reporter('html');

        chai.Assertion.includeStack = true;

        // https://github.com/chaijs/chai/issues/107
        var should = chai.should();
        window.expect = chai.expect;
        window.assert = chai.assert;


        chai.use(chaiAsPromised);

        /* on dom ready require all specs and run */
        $(function() {
            require(testSuite.specs, function() {

                if (window.mochaPhantomJS) {
                    mochaPhantomJS.run();
                } else {
                    mocha.run();
                }

            });
        });
    });