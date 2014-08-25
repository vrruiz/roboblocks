'use strict';
require.config({
    baseUrl: 'lib',
    paths: {
        blockly: "../bower_components/blockly/blockly_compressed",
        'blockly.blocks': '../bower_components/blockly/blocks_compressed',
        'blockly.lang': '../bower_components/blockly/msg/js/en',
        'blockly.arduino': '../bower_components/blockly/arduino_compressed',
        jquery: "../bower_components/jquery/dist/jquery"
    },
    deps: ['blocks/math-random']
});