'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

  /**
  * math_arithmetic code generation
  * @return {String} Code generated with block parameters
  */


Blockly.Arduino.math_arithmetic = function() {
    // Basic arithmetic operators, and power.
    var mode = this.getFieldValue('OP');
    var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
    var code;
    if (!operator) {
        code = JST['math_arithmetic_pow']({
            'argument0':argument0,
            'argument1':argument1
        });
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
    code = JST['math_arithmetic']({
            'argument0':argument0,
            'argument1':argument1,
            'operator':operator
        });
    return [code, order];
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
    ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
    MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
    MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
    DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
    POWER: [null, Blockly.Arduino.ORDER_NONE]
};




Blockly.Blocks.math_arithmetic = {
  // Basic arithmetic operator.
    category: RoboBlocks.LANG_CATEGORY_MATH,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/math_arithmetic',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.setOutput(true, Number);
        this.appendValueInput('A')
            .setCheck(Number);
        this.appendValueInput('B')
            .setCheck(Number)
            .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('OP');
            return Blockly.Blocks.math_arithmetic.TOOLTIPS[mode];
        });
    }
};

Blockly.Blocks.math_arithmetic.OPERATORS =
    [['+', 'ADD'],
     ['-', 'MINUS'],
     ['\u00D7', 'MULTIPLY'],
     ['\u00F7', 'DIVIDE'],
     ['^', 'POWER']];

Blockly.Blocks.math_arithmetic.TOOLTIPS = {
    ADD: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_ADD,
    MINUS: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS,
    MULTIPLY: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
    DIVIDE: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE,
    POWER: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_POWER
};
