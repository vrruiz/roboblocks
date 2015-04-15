'use strict';
/* global Blockly,  RoboBlocks */
/* jshint sub:true */
/**
 * variable code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.variables_local = function() {
    // Variable setter.
    var varType;
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = this.getFieldValue('VAR') || '';
    var sufix = '';
    var code = '';
    var isFunction=false;


    var a=RoboBlocks.findPinMode(varValue);
    code+=a['code'];
    varValue=a['pin'];


    for (var i in Blockly.Arduino.definitions_) {
        if (Blockly.Arduino.definitions_[i].search(varValue+' \\(') >= 0) {
            isFunction = true;
            break;
        }
    }
    if (varValue.search('"') >= 0 || varValue.search('substring\\(') >= 0 ) {
        varType = 'String';
        code += varType + ' ' + varName + '=' + varValue + ';\n';
    } else if (isFunction) { //varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
        for (i in Blockly.Arduino.definitions_) {
            if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int'|| Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //bqbat function
                    if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *'|| Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                        varType = 'int *';
                    } else {
                        varType = 'int';
                    }
                } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                    varType = 'String';
                } else {
                    varType = '';
                }
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            }
        }
    } else if (varValue[0] === '{') {
        varType = 'int *';
        varValue = varValue.replace('{', '');
        varValue = varValue.replace('}', '');
        varValue = varValue.split(',');
        code += varType + varName + '='+'(int*)malloc(3*sizeof(int));\n';
        // code += varType + varName + ';\n';
        code += varName + '[0]=' + varValue[0] + ';\n' + varName + '[1]=' + varValue[1] + ';\n' + varName + '[2]=' + varValue[2] + ';\n';
    } else if (this.isVariable(varValue)) {
        varType = RoboBlocks.variables[varValue][0];
        code += varType + ' ' + varName + '=' + varValue + ';\n';
    } else if (varValue.search('readJoystick') >= 0) {
        varType = 'int *';
        code += varType + varName + '='+'(int*)malloc(3*sizeof(int));\n';
        code += varName + '=' + varValue + ';\n';
    } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue))) || (varValue.search('random') >= 0) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+')) ) {
        varType = 'int';
        code += varType + ' ' + varName + sufix + '=' + varValue + ';\n';
    } else {
        varType = 'unknown';
        code += varType + ' ' + varName + '=' + varValue + ';\n';
    }

    RoboBlocks.variables[varName] = [varType, 'local'];
    RoboBlocks.variables['analogRead('+varName+')'] = [varType, 'local'];
    RoboBlocks.variables['digitalRead('+varName+')'] = [varType, 'local'];

    return code;
};
Blockly.Blocks.variables_local = {
    // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_VAR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));
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