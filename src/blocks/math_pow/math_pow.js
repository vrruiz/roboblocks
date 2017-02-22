'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* math_pow code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.math_pow = function() {
    var argument0 = Blockly.Arduino.valueToCode(this, 'BASE',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'EXP',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var code = '';
    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];
    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];
    code += JST ['math_pow']({
        'argument0':argument0,
        'argument1':argument1
    });

    return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Blocks.math_pow = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.setOutput(true, Number);
        this.appendValueInput('BASE')
              .setCheck(Number)
              .appendField(RoboBlocks.locales.getKey('LANG_MATH_POW'));
        this.appendValueInput('EXP')
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(RoboBlocks.locales.getKey('LANG_MATH_POW_PARAM2'));
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_POW_TOOLTIP'));
    }
};
