'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * math_number code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.math_number = function() {
    // Numeric value.
    var code = window.parseFloat(this.getFieldValue('NUM'));
    // -4.abs() returns -4 in Dart due to strange order of operation choices.
    // -4 is actually an operator and a number.  Reflect this in the order.
    var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, order];
};

Blockly.Blocks.math_number = {
  // Numeric value.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),  // Variables are handled specially.
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_number.validator), 'NUM');
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_NUMBER_TOOLTIP'));
    }
};

Blockly.Blocks.math_number.validator = function(text) {
  // Ensure that only a number may be entered.
  // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
    var n = window.parseFloat(text || 0);
    return window.isNaN(n) ? null : String(n);
};
