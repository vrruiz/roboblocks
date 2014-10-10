'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* controls_repeat code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.controls_repeat = function() {
    // Repeat n times.
    var repeats = Number(this.getFieldValue('TIMES'));
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,'\'' + this.id + '\'') + branch;
    }
    var loopVar = Blockly.Arduino.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);

    var code = JST ['controls_repeat']({
        'repeats':repeats,
        'branch':branch,
        'loopVar':loopVar
    });

    return code;
};

Blockly.Blocks.controls_repeat = {
    // Repeat n times.
    category: RoboBlocks.LANG_CATEGORY_CONTROLS,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/controls_repeat',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_REPEAT)
            .appendField(new Blockly.FieldTextInput('',Blockly.Blocks.math_number.validator), 'TIMES')
            .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_TIMES);
        this.appendStatementInput('DO')
            .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.LANG_CONTROLS_REPEAT_TOOLTIP);
    }
};