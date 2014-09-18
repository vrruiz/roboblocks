'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.math_random = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
    var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '10';
    value_dmax = value_dmax.replace('(', '').replace(')', '');
    var code = JST['math_random']({
        'value_num': value_num,
        'value_dmax': value_dmax
    });
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.math_random = {
    category: 'Math',
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/math_random',
    init: function() {
        this.appendValueInput('NUM', Number)
            .appendField('Random between')
            .setCheck(Number);
        this.appendValueInput('DMAX', Number)
            .appendField(' and ')
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Assign a random number');
    }
};