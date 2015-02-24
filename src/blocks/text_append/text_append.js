'use strict';
/* global Blockly, RoboBlocks */
/**
 * text_append code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.text_append = function() {
    // Append to a variable in place.
    var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
    var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';

    var code = '';

    var a=RoboBlocks.findPinMode(varName);
    code+=a['code'];
    varName=a['pin'];
    a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];

    code +=varName + ' += String(' + argument0 + ');\n';
    return code;
};
Blockly.Blocks.text_append = {
    // Append to a variable in place.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('VAR')
        // .appendField(new Blockly.FieldVariable(' '), 'VAR')
        .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'));
        this.appendValueInput('TEXT').appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TOOLTIP'));
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
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
        // if (!this.last_variables){
        //     this.last_variables=Blockly.Variables.allVariables();
        // }
        // var variables=Blockly.Variables.allVariables();
        // for (var i in variables){
        //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
        //         try{
        //             this.removeInput('TEXT');
        //             this.appendValueInput('TEXT')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'))
        //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
        //                 .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
        //             this.setInputsInline(true);
        //         }catch(e){}
        //         this.last_variables=Blockly.Variables.allVariables();
        //     }
        // }
    }
};