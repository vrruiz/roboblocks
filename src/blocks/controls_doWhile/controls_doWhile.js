'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * controls_doWhile code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.controls_doWhile = function() {
    // Do while/until loop.
    var argument0 = Blockly.Arduino.valueToCode(this, 'WHILE', Blockly.Arduino.ORDER_NONE) || '';
    argument0 = argument0.replace(/&quot;/g, '"');
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/&quot;/g, '"');
    var code = '';
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
        // branch = branch.substring(0, branch.length - 2);
    }
    // branch=branch.replace(/&amp;/g, '');
    if (this.getFieldValue('MODE') === 'UNTIL') {
        if (!argument0.match(/^\w+$/)) {
            argument0 = '(' + argument0 + ')';
        }
        argument0 = '!' + argument0;
    }
    code += JST['controls_doWhile']({
        'argument0': argument0,
        'branch': branch
    });
    return code;
};
Blockly.Blocks.controls_doWhile = {
    // Do/while loop.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    // helpUrl: RoboBlocks.URL_DOWHILE,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendStatementInput('DO').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_DO'));
        this.appendValueInput('WHILE').setCheck(Boolean).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT')).appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
            [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
        ]), 'MODE');
        // this.appendValueInput('WHILE').setCheck(Boolean).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_WHILE'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_TOOLTIP'));
    }
};
