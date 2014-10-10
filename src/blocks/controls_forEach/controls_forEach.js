'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* controls_forEach code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.controls_forEach = function() {
    // For each loop.
    var variable0 = Blockly.Arduino.variableDB_.getName(
        this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    variable0=variable0.substring(0,variable0.length-1);
    var argument0 = Blockly.Arduino.valueToCode(this, 'LIST',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '[]';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,'\'' + this.id + '\'') + branch;
    }
    var code = JST ['controls_forEach']({
        'variable0': variable0,
        'argument0':argument0,
        'branch':branch
    });

    //'for (var ' + variable0 + ' in  ' + argument0 + ') {\n' +branch + '}\n';
    return code;
};


Blockly.Blocks.controls_forEach = {
    // For each loop.
    category: RoboBlocks.LANG_CATEGORY_CONTROLS,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/controls_forEach',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('LIST')
            .setCheck(Array)
            .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_ITEM)
            .appendField(new Blockly.FieldVariable(null), 'VAR')
            .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_INLIST);
        this.appendStatementInput('DO')
            .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return RoboBlocks.LANG_CONTROLS_FOREACH_TOOLTIP.replace('%1',thisBlock.getTitleValue('VAR'));
        });
    },
    getVars: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};
