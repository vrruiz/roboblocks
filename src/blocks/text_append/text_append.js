'use strict';
/* global Blockly, RoboBlocks */

/**
  * text_append code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_append = function() {
    // Append to a variable in place.
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
    return varName + ' = '+varName+' + String(' + argument0 + ');\n';
};


Blockly.Blocks.text_append = {
    // Append to a variable in place.
    category: RoboBlocks.LANG_CATEGORY_TEXT,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/text_append',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('TEXT')
            .appendField(RoboBlocks.LANG_TEXT_APPEND_TO)
            .appendField(new Blockly.FieldVariable(
            RoboBlocks.LANG_TEXT_APPEND_VARIABLE), 'VAR')
            .appendField(RoboBlocks.LANG_TEXT_APPEND_APPENDTEXT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return RoboBlocks.LANG_TEXT_APPEND_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
        });
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};