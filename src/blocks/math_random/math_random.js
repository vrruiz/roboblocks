'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.math_random = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

    var code = JST['math_random']({
        'value_num': value_num,
        'value_dmax': value_dmax
    });
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.math_random = {
    category: RoboBlocks.LANG_CATEGORY_MATH,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/math_random',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
            .appendField(RoboBlocks.LANG_ADVANCED_MATH_RANDOM)
            .setCheck(Number);
        this.appendValueInput('DMAX', Number)
            .appendField(RoboBlocks.LANG_ADVANCED_MATH_RANDOM_AND)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.LANG_ADVANCED_MATH_RANDOM_TOOLTIP);
    }
};
