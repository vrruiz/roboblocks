'use strict';
/* global Blockly, RoboBlocks */
/**
 * logic_operation code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.logic_operation = function() {
    // Operations 'and', 'or'.
    var operator = (this.getFieldValue('OP') === 'AND') ? '&&' : '||';
    var order = (operator === '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
    // var code = JST['logic_operation']({
    //     'operator': operator,
    //     'argument0': argument0,
    //     'argument1': argument1
    // });
    var code = '';
    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];
    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];

    code += '('+argument0 + ') ' + operator + ' (' + argument1+')';
    return [code, order];
};
Blockly.Blocks.logic_operation = {
    // Logical operations: 'and', 'or'.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
    helpUrl: RoboBlocks.URL_LOGIC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, Boolean);
        this.appendValueInput('A').setCheck(Boolean);
        this.appendValueInput('B').setCheck(Boolean).appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_AND') || 'AND', 'AND'],
            [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_OR') || 'OR', 'OR']
        ]), 'OP');
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('OP');
            return Blockly.Blocks.logic_operation.TOOLTIPS[op];
        });
    }
};
Blockly.Blocks.logic_operation.TOOLTIPS = {
    AND: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_AND'),
    OR: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_OR')
};