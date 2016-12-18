'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * math_random_seed code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.math_random_seed = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';

    code += JST['math_random_seed']({
        'value_num': value_num
    });

    return code;
};
/**
 * math_random_seed block definition
 * @type {Object}
 */
Blockly.Blocks.math_random_seed = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    /**
     * inout_analog_write initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED')).setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP'));
    }
};