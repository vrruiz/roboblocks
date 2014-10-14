
'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * variables_get code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_get = function() {
  // Variable setter.
    var varName = this.getFieldValue('VAR')||'';
    
    return [varName , Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.variables_get = {
  // Variable setter.
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_get',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('DUMMY')
            .appendField(RoboBlocks.LANG_VARIABLES_GET)
            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

        this.setOutput(true);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_GET_TOOLTIP);
    },
    getVariables: function(){
        var variables= Blockly.Variables.allVariables();
        var dropdown=[];
        if (variables.length>0){
            for (var i in variables){
                dropdown.push([variables[i],variables[i]]);
            }
        }
        else{
            dropdown.push(['', '']);
        }
        return dropdown;
    },
    onchange: function(){
        if (!this.last_variables){
            this.last_variables=Blockly.Variables.allVariables();
        }
        var variables=Blockly.Variables.allVariables();

        for (var i in variables){
            if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                try{
                    this.removeInput('DUMMY');
                }catch(e){}

                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_VARIABLES_GET)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.last_variables=Blockly.Variables.allVariables();
            }
        }
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};