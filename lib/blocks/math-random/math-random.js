'use strict';
/* global define */
define([
    'blockly',
    'templates/jst',
    'roboblocks'
], function (Blockly, jst, roboblocks) {

    var block = {
        template: jst['roboblock/math-random'],
        meta: require('./math-random.json')
    };

    //register with blockly arduino
    Blockly.Arduino.math_random = function () {
        var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
        var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '10';
        value_dmax = value_dmax.replace('(', '').replace(')', '');
        var code = block.template({
            'value_num': value_num,
            'value_dmax': value_dmax
        });
        return [code, Blockly.Arduino.ORDER_NONE];
    };

    roboblocks.load(block.meta);

    return block;
});