'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* math_modulo code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.math_modulo = function() {
  // Remainder computation.
    var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
    var code = '';
    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];
    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];
    code += JST ['math_modulo']({
        'argument0':argument0,
        'argument1':argument1
    });

    //argument0 + ' % ' + argument1;
    return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Blocks.math_modulo = {
  // Remainder of a division.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.setOutput(true, Number);
        this.appendValueInput('DIVIDEND')
              .setCheck(Number)
              .appendField(RoboBlocks.locales.getKey('LANG_MATH_MODULO_INPUT_DIVIDEND'));
        this.appendValueInput('DIVISOR')
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField('%');
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MODULO_TOOLTIP'));
    }
};
