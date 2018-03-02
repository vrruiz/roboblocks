'use strict';
/* global Blockly,  RoboBlocks */
/* jshint sub:true */
/**
 * variables_global_type code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.variables_global_type = function() {
    // Variable setter.
    var varType = this.getFieldValue('VAR_TYPE');
    var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = this.getFieldValue('VAR') || '';
    var isFunction = false;

    var varName = this.getFieldValue('VAR') || '';
    var code ='';

    var a=RoboBlocks.findPinMode(varValue);
    code+=a['code'];
    varValue=a['pin'];

    Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
    Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';

    RoboBlocks.variables[varName] = [varType, 'global'];
    RoboBlocks.variables['analogRead('+varName+')'] = [varType, 'global'];
    RoboBlocks.variables['digitalRead('+varName+')'] = [varType, 'global'];

    return '';
};

Blockly.Blocks.variables_global_type = {
    // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_VAR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE').
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL')).
            appendField(new Blockly.FieldTextInput(''), 'VAR').
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TYPE')).
            appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_CHAR'), 'char'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float']
            ]), "VAR_TYPE").
            appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
    },
    getVars: function() {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
        }
    },
    isVariable: function(varValue) {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === varValue) {
                return true;
            }
        }
        return false;
    },
    validName: function(name) {
        if (name && name.length > 0) {
            var i = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            name = name.replace(/([ ])/g, '_');
            name = name.replace(/([áàâä])/g, 'a');
            name = name.replace(/([éèêë])/g, 'e');
            name = name.replace(/([íìîï])/g, 'i');
            name = name.replace(/([óòôö])/g, 'o');
            name = name.replace(/([úùûü])/g, 'u');
            name = name.replace(/([ñ])/g, 'n');
            name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
            i = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                if (name === reserved_words[j]) {
                    this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                    name = '';
                    break;
                } else {
                    this.setWarningText(null);
                }
            }
        }
        return name;
    },
    onchange: function() {
        if (this.last_variable !== this.getFieldValue('VAR')) {
            var name = this.getFieldValue('VAR');
            name = this.validName(name);
            try {
                this.setFieldValue(name, 'VAR');
            } catch (e) {}
            this.last_variable = name;
        }
    }
};
