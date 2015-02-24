'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * math_array code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.math_array = function() {
    // Numeric value.
    var code = '{';
    code+=window.parseFloat(this.getFieldValue('NUM0'));
    code+=',';
    code+=window.parseFloat(this.getFieldValue('NUM1'));
    code+=',';
    code+=window.parseFloat(this.getFieldValue('NUM2'));
    code+='}';

    // -4.abs() returns -4 in Dart due to strange order of operation choices.
    // -4 is actually an operator and a number.  Reflect this in the order.
    // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.math_array = {
  // Numeric value.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),  // Variables are handled specially.
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_ARRAY3'))
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET3'))
            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM0')
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));


        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM1')
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));

        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM2')
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET4'));

        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_TOOLTIP'));
    }
};


Blockly.Blocks.math_array.validator = function(text) {
  // Ensure that only a number may be entered.
  // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
    var n = window.parseFloat(text || 0);
    return window.isNaN(n) ? null : String(n);
};