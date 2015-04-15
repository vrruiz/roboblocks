'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* logic_compare code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.logic_compare = function() {
    // Comparison operator.
    var mode = this.getFieldValue('OP');
    var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
    var order = (operator === '==' || operator === '!=') ?
        Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';

    var code = '';

    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];

    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];

    code += JST['logic_compare']({
        'argument0':argument0,
        'argument1':argument1,
        'operator':operator
    });

    return [code, order];
};

Blockly.Arduino.logic_compare.OPERATORS = {
    EQ: '==',
    NEQ: '!=',
    LT: '<',
    LTE: '<=',
    GT: '>',
    GTE: '>='
};


Blockly.Blocks.logic_compare = {
    // Comparison operator.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
    helpUrl: RoboBlocks.URL_LOGIC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, Boolean);
        this.appendValueInput('A');
        this.appendValueInput('B')
            .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('OP');
            return Blockly.Blocks.logic_compare.TOOLTIPS[op];
        });
    }
};

Blockly.Blocks.logic_compare.OPERATORS =
    [['=', 'EQ'],
     ['\u2260', 'NEQ'],
     ['<', 'LT'],
     ['\u2264', 'LTE'],
     ['>', 'GT'],
     ['\u2265', 'GTE']];

Blockly.Blocks.logic_compare.TOOLTIPS = {
    EQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_EQ'),
    NEQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_NEQ'),
    LT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LT'),
    LTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LTE'),
    GT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GT'),
    GTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GTE')
};
