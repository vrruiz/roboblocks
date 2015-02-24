'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * advanced_map code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.advanced_map = function() {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var from_min = Blockly.Arduino.valueToCode(this, 'FROM_MIN', Blockly.Arduino.ORDER_NONE);
    var from_max = Blockly.Arduino.valueToCode(this, 'FROM_MAX', Blockly.Arduino.ORDER_NONE);
    var to_min = Blockly.Arduino.valueToCode(this, 'TO_MIN', Blockly.Arduino.ORDER_NONE);
    var to_max = Blockly.Arduino.valueToCode(this, 'TO_MAX', Blockly.Arduino.ORDER_NONE);

    var code = '';
    var a = RoboBlocks.findPinMode(num);
    code += a['code'];
    num = a['pin'];

    a = RoboBlocks.findPinMode(from_min);
    code += a['code'];
    from_min = a['pin'];

    a = RoboBlocks.findPinMode(from_max);
    code += a['code'];
    from_max = a['pin'];

    a = RoboBlocks.findPinMode(to_min);
    code += a['code'];
    to_min = a['pin'];

    a = RoboBlocks.findPinMode(to_max);
    code += a['code'];
    to_max = a['pin'];


    code += JST['advanced_map']({
        'num' : num,
        'from_min' : from_min,
        'from_max' : from_max,
        'to_min' : to_min,
        'to_max' : to_max
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * advanced_map block definition
 * @type {Object}
 */
Blockly.Blocks.advanced_map = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
     /**
      * advanced_map initialization
      */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_MAP') )
          .setCheck(Number);
        this.appendValueInput('FROM_MIN', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_FROM') )
          .setCheck(Number);
        this.appendValueInput('FROM_MAX', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
        this.appendValueInput('TO_MIN', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TO'))
          .setCheck(Number);
        this.appendValueInput('TO_MAX', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TOOLTIP'));
    }
};
