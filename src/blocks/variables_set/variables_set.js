'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * variables_set code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.variables_set = function() {
    // Variable setter.
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
    var varName = this.getFieldValue('VAR') || '';
    var code ='';

    var a=RoboBlocks.findPinMode(varValue);
    code+=a['code'];
    varValue=a['pin'];


    code += JST['variables_set']({
        'varName': varName,
        'varValue': varValue
    });
    return code;
};
Blockly.Blocks.variables_set = {
    // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_VAR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
        // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
        .appendField(new Blockly.FieldVariable(' '), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_TOOLTIP'));
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
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        // this.last_variable=this.getFieldValue('VAR');
        // if (!this.last_variables){
        //     this.last_variables=Blockly.Variables.allVariables();
        // }
        // var variables=Blockly.Variables.allVariables();
        // for (var i in variables){
        //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
        //         try{
        //             this.removeInput('VALUE');
        //             this.appendValueInput('VALUE')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
        //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
        //                 .setAlign(Blockly.ALIGN_RIGHT);
        //             this.setInputsInline(false);
        //             this.setFieldValue(this.last_variable, 'VAR');
        //         }catch(e){}
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