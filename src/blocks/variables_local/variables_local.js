
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
    var varValue=Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = this.getFieldValue('VAR')||'';
    var sufix='';
    var code ='';


    if ( (varValue.search('analogRead')>=0) || (varValue.search('digitalRead')>=0) || (varValue.search('Distanc')>=0) || (!isNaN(parseFloat(varValue))) ){
        varType='int';
        code= varType+' '+varName+ sufix+'='+varValue+';\n';
    }
    else if (varValue[0]==='{'){
        varType='int ';
        varValue=varValue.replace('{','');
        varValue=varValue.replace('}','');
        varValue=varValue.split(',');
        code=varType+' * '+varName+';\n';
        code+=varName+'[0]='+varValue[0]+';\n'+varName+'[1]='+varValue[1]+';\n'+varName+'[2]='+varValue[2]+';\n';
    }
    else if (varValue.search('readJoystick')>=0){
        varType='int ';
        code=varType+' * '+varName+';\n';
        code+=varName+'='+varValue+';\n';
    }
    else {
        varType='String';
    }
    return code;
};


Blockly.Blocks.variables_local = {
  // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variable',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL'))
            .appendField(new Blockly.FieldTextInput(''), 'VAR');

        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));

        this.setInputsInline(true);
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
};
