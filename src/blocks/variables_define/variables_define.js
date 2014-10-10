
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

  /**
  * variables_define code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.variables_define = function() {
  // Variable setter.
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT)||'';
    var varName = this.getFieldValue('VAR')||'';

    Blockly.Arduino.setups_['setup_var'+varName] = JST['variables_define']({
        'varName' : varName,
        'varValue' : varValue
    });

    return '';
};

Blockly.Blocks.variables_define = {
  // Variable setter.
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variables_define',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('DUMMY')
            .appendField(RoboBlocks.LANG_VARIABLES_DEFINE)
            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.LANG_VARIABLES_DEFINE_AS)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_DEFINE_TOOLTIP);
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
                this.removeInput('DUMMY');
                this.removeInput('VALUE');

                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_VARIABLES_DEFINE)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.LANG_VARIABLES_DEFINE_AS)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(true);

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