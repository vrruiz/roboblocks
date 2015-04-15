'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* base_map code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.base_map = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

    var code = '';
    var a = RoboBlocks.findPinMode(value_num);
    code += a['code'];
    value_num = a['pin'];

    a = RoboBlocks.findPinMode(value_dmax);
    code += a['code'];
    value_dmax = a['pin'];

    code += JST['base_map']({
        'value_num':value_num,
        'value_dmax':value_dmax
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.base_map = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP'))
            .setCheck(Number);
        this.appendValueInput('DMAX', Number)
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_VALUE_TO'))
            .setCheck(Number);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_BRACKET'));
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_TOOLTIP'));
    }
};
