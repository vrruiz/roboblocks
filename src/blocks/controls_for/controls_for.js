'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */
/**
 * controls_for code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.controls_for = function() {
    var variable0 = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
    var argument0 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }

    var code='';
    var a=RoboBlocks.findPinMode(variable0);
    code+=a['code'];
    variable0=a['pin'];

    a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];

    a=RoboBlocks.findPinMode(argument1);
    code+=a['code'];
    argument1=a['pin'];

    var up = parseFloat(argument0) <= parseFloat(argument1);
    code += 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0 + (up ? '++' : '--') + ') {\n' + branch + '}\n';
    return code;
};
Blockly.Blocks.controls_for = {
    // For loop.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_FOR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('VAR').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'));
        // .appendField(new Blockly.FieldVariable(' '), 'VAR');
        this.appendValueInput('FROM').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
        this.appendValueInput('TO').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
        this.appendStatementInput('DO').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return RoboBlocks.LANG_CONTROLS_FOR_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
        });
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
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
    isVariable: function(varValue) {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === varValue) {
                return true;
            }
        }
        return false;
    },
    onchange: function() {
        try {
            if (this.isVariable(Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC))) {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_FROM_WARNING'));
            }
            else if ( this.isVariable(Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC))) {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_TO_WARNING'));
            } else {
                this.setWarningText(null);
            }
        } catch (e) {}


        // if (!this.workspace) {
        //     // Block has been deleted.
        //     return;
        // }
        // if (!this.last_variables){
        //     this.last_variables=Blockly.Variables.allVariables();
        // }
        // var variables=Blockly.Variables.allVariables();
        // for (var i in variables){
        //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
        //         try{
        //             this.removeInput('DUMMY');
        //             this.removeInput('FROM');
        //             this.removeInput('TO');
        //             this.removeInput('DO');
        //             this.appendDummyInput('DUMMY')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'))
        //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
        //             this.appendValueInput('FROM')
        //                 .setCheck(Number)
        //                 .setAlign(Blockly.ALIGN_RIGHT)
        //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
        //             this.appendValueInput('TO')
        //                 .setCheck(Number)
        //                 .setAlign(Blockly.ALIGN_RIGHT)
        //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
        //             this.appendStatementInput('DO')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
        //         }catch(e){}
        //         this.last_variables=Blockly.Variables.allVariables();
        //     }
        // }
        // try {
        //     if (!this.exists()) {
        //         this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
        //     } else {
        //         this.setWarningText(null);
        //     }
        // } catch (e) {}
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    },
    // exists: function() {
    //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Blockly.Variables.allVariables(), this.getFieldValue('VAR'));
    //     if (this.getFieldValue('VAR') === ' ') {
    //         return false;
    //     }
    //     for (var i in Blockly.Variables.allVariables()) {
    //         if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
    //             console.log('controls_for, variable!', this.getFieldValue('VAR'), Blockly.Variables.allVariables()[i]);
    //             return true;
    //         }
    //     }
    //     return false;
    // }
};