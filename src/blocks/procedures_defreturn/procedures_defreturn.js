'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * procedures_defreturn code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.procedures_defreturn = function(){
    // Define a procedure with a return value.
    var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(this, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,'\'' + this.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN',
        Blockly.Arduino.ORDER_NONE) || '';
    var returnType;
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    else if (!returnValue){
        returnType = 'void';
    }
    else if ( !isNaN(parseFloat(returnValue)) ){
        returnType='int';
    }
    else {
        returnType='String';
    }

    var args=this.paramString;

    var code = JST ['procedures_defreturn']({
        'returnType':returnType,
        'funcName':funcName,
        'args':args,
        'branch':branch,
        'returnValue':returnValue
    });


    code = Blockly.Arduino.scrub_(this, code);
    Blockly.Arduino.definitions_[funcName] = code;
    return null;
};



Blockly.Blocks.procedures_defreturn = {
    // Define a procedure with a return value.
    category: RoboBlocks.LANG_CATEGORY_PROCEDURES,  // Procedures are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/procedures_defreturn',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
        var name = Blockly.Procedures.findLegalName(
            RoboBlocks.LANG_PROCEDURES_DEFRETURN_PROCEDURE, this);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(name,
            Blockly.Procedures.rename), 'NAME')
            .appendField('', 'PARAMS');
        this.appendStatementInput('STACK')
            .appendField(RoboBlocks.LANG_PROCEDURES_DEFRETURN_DO);
        this.appendValueInput('RETURN')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.LANG_PROCEDURES_DEFRETURN_RETURN);
        this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        this.setTooltip(RoboBlocks.LANG_PROCEDURES_DEFRETURN_TOOLTIP);
        this.arguments_ = [];
    },
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
    getProcedureDef: function() {
        // Return the name of the defined procedure,
        // a list of all its arguments,
        // and that it DOES have a return value.
        return [this.getFieldValue('NAME'), this.arguments_, true];
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar
};
