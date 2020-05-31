'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* math_min code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.math_min = function() {
    var argument0 = Blockly.Arduino.valueToCode(this, 'NUMBER1',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'NUMBER2',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var code = '';
    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];
    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];
    code += JST ['math_min']({
        'argument0':argument0,
        'argument1':argument1
    });

    return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Blocks.math_min = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.setOutput(true, Number);
        this.appendValueInput('NUMBER1')
              .setCheck(Number)
              .appendField(RoboBlocks.locales.getKey('LANG_MATH_MIN'));
        this.appendValueInput('NUMBER2')
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(RoboBlocks.locales.getKey('LANG_MATH_MIN_PARAM2'));
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MIN_TOOLTIP'));
    }
};
