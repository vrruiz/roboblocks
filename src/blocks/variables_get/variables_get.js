'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */
/**
 * variables_get code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.variables_get = function() {
    // Variable setter.
    var varName = this.getFieldValue('VAR') || '';
    if (RoboBlocks.variables[this.getFieldValue('VAR')]!==undefined){
        this.var_type = RoboBlocks.variables[this.getFieldValue('VAR')][0];
    }
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks.variables_get = {
    // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_VAR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('DUMMY').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
        // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
        .appendField(new Blockly.FieldVariable(' '), 'VAR');
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GET_TOOLTIP'));
    },
    getVariables: function() {
        var variables = Blockly.Variables.allVariables();
        var dropdown = [];
        if (variables.length > 0) {
            for (var i in variables) {
                dropdown.push([variables[i], variables[i]]);
            }
        } else {
            dropdown.push(['', '']);
        }
        return dropdown;
    },
    onchange: function() {
        // if (!this.workspace) {
        //     // Block has been deleted.
        //     return;
        // }
        // this.last_variable=this.getFieldValue('VAR');
        // if (!this.last_variables){
        //     this.last_variables=Blockly.Variables.allVariables();
        // }
        // var variables=Blockly.Variables.allVariables();
        // for (var i in variables){
        //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
        //         try{
        //             this.removeInput('DUMMY');
        //         }catch(e){}
        //         this.appendDummyInput('DUMMY')
        //             .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
        //             .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
        //         this.setFieldValue(this.last_variable, 'VAR');
        //         this.last_variables=Blockly.Variables.allVariables();
        //     }
        // }
        try {
            if (!this.exists()) {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
            } else {
                this.setWarningText(null);
            }
        } catch (e) {}
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    },
    exists: function() {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                return true;
            }
        }
        return false;
    }
};