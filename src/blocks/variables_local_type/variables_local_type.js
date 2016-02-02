'use strict';
/* global Blockly,  RoboBlocks */
/* jshint sub:true */
/**
 * variable code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.variables_local_type = function() {
    // Variable setter.
    var varType = this.getFieldValue('VAR_TYPE');
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = this.getFieldValue('VAR') || '';
    var code = '';

    var a=RoboBlocks.findPinMode(varValue);
    code+=a['code'];
    varValue=a['pin'];

    code += varType + ' ' + varName + '=' + varValue + ';\n';

    RoboBlocks.variables[varName] = [varType, 'local'];
    RoboBlocks.variables['analogRead('+varName+')'] = [varType, 'local'];
    RoboBlocks.variables['digitalRead('+varName+')'] = [varType, 'local'];

    return code;
};
Blockly.Blocks.variables_local_type = {
    // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_VAR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE').
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL')).
            appendField(new Blockly.FieldTextInput(''), 'VAR').
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TYPE')).
            appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float']
            ]), "VAR_TYPE").
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
        }
    },
    isVariable: Blockly.Blocks.variables_global.isVariable,
    onchange: Blockly.Blocks.variables_global.onchange,
    validName: Blockly.Blocks.variables_global.validName
};
