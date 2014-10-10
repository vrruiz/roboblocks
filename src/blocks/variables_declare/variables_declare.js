
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

  /**
  * variables_declare code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_declare = function() {
  // Variable setter.
    var varType = Blockly.Arduino.valueToCode(this, 'TYPE', Blockly.Arduino.ORDER_ASSIGNMENT)||'';
    var varName = this.getFieldValue('VAR')||'';
    Blockly.Arduino.definitions_['define_var'+varName] = JST['variables_declare']({
        'varType': varType,
        'varName': varName
    });
    
    return '';
};

Blockly.Blocks.variables_declare = {
  // Variable setter.
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_declare',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_VARIABLES_DECLARE)
            // .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
            .appendField(new Blockly.FieldTextInput(''), 'VAR');


        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_VARIABLES_DECLARE_TYPE)
            .appendField(new Blockly.FieldDropdown([['int', 'int'],['String', 'String']]), 'TYPE');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_DECLARE_TOOLTIP);
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