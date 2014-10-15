'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* controls_forEach code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.controls_forEach = function() {
    // For each loop.
    var variable0 = this.getFieldValue('VAR')||'';
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
            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
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
                    this.removeInput('VALUE');

                    this.appendDummyInput('DUMMY')
                        .appendField(RoboBlocks.LANG_VARIABLES_SET)
                        .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                    this.appendValueInput('VALUE')
                        .appendField(RoboBlocks.LANG_VARIABLES_SET_AS)
                        .setAlign(Blockly.ALIGN_RIGHT);
                    this.setInputsInline(true);

                }catch(e){}
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
