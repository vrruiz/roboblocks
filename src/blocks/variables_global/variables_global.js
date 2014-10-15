
'use strict';
/* global Blockly,  RoboBlocks */
/* jshint sub:true */

  /**
  * variable code generation
  * @return {String} Code generated with block parameters
  */
function isNumber(obj) {
    console.log('aaaaaaaaaaaaaaaa', obj, obj.search('read'));
    if (obj.search('Read')!==-1){
        return true;
    }
    else {
        return !isNaN(parseFloat(obj));
    }
}

Blockly.Arduino.variables_global = function() {
  // Variable setter.
    var varType;
    var varValue=Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    console.log('aaaaaaaaaaaaaaaa', varValue, varValue.search('read'));
    if(isNumber(varValue)){
        varType='int';
    }
    else{
        varType='String';
    }
    var varName = this.getFieldValue('VAR')||'';

    Blockly.Arduino.definitions_['declare_var'+varName]=varType+' '+varName+';';
    Blockly.Arduino.setups_['define_var'+varName]=varName+'='+varValue+';';
    
    return '';
};


Blockly.Blocks.variables_global = {
  // Variable setter.
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_global',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_VARIABLES_GLOBAL)
            .appendField(new Blockly.FieldTextInput(''), 'VAR');

        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.LANG_VARIABLES_GLOBAL_EQUALS);

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_GLOBAL_TOOLTIP);
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
