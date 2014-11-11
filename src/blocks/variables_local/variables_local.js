
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


    if ( (varValue.search('analogRead')>=0) || (varValue.search('digitalRead')>=0) || (varValue.search('Distanc')>=0) || (!isNaN(parseFloat(varValue)))|| (varValue.search('random')>=0) || varValue.search('\\[')>=0){
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
    else if (varValue.search('\\(')>=0 && varValue.search('\\)')>=0){
        console.log('aaaaaaaaaaaaaa--> function!', varValue);
        for (var i in Blockly.Arduino.definitions_){
            if(Blockly.Arduino.definitions_[i].search(varValue)>=0){
                // console.log('heeeeeeeeeeeeere', Blockly.Arduino.definitions_[i].substring(0,5));
                if (Blockly.Arduino.definitions_[i].substring(0,3)==='int'){
                    if(Blockly.Arduino.definitions_[i].substring(0,5)==='int *'){
                        varType='int *';
                    }
                    else{
                        varType='int';
                    }
                }

                else if (Blockly.Arduino.definitions_[i].substring(0,3)==='Str'){
                    varType='String';
                }
                else{
                    varType='';
                }
                console.log('heeeeeeeeeeeeeeere',varType);
                code=varType+' '+varName+'='+varValue+';\n';
            }
        }
        // console.log('  for (var name in Blockly.Arduino.definitions_) {',  Blockly.Arduino.definitions_) ;
        
    }
    else {
        varType='String';
        code=varType+' '+varName+'='+varValue+';\n';
    
    }

    return code;
};


Blockly.Blocks.variables_local = {
  // Variable setter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/variable',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendValueInput('VALUE')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL'))
            .appendField(new Blockly.FieldTextInput(''), 'VAR')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));

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
};
