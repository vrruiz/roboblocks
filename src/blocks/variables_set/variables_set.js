
'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * variables_set code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_set = function() {
  // Variable setter.
    var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName.substring(0,varName.length-1) + ' = ' + argument0 + ';\n';
};


Blockly.Blocks.variables_set = {
  // Variable setter.
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
    helpUrl: RoboBlocks.LANG_VARIABLES_SET_HELPURL,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.LANG_VARIABLES_SET_Field_1)
            .appendField(new Blockly.FieldVariable(
        RoboBlocks.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_SET_TOOLTIP_1);
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
        }
    }
};