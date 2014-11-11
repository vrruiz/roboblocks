'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * procedures_callreturn code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.procedures_callreturn = function() {
    // Call a procedure with a return value.
    var funcName = this.getFieldValue('PROCEDURES');
    var args = [];

    for (var x = 0; x < this.getVariables(funcName).length; x++) {
        args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,Blockly.Arduino.ORDER_NONE) || 'null';
    }

    var funcArgs=args.join(', ');

    var code = JST['procedures_callreturn']({
        'funcName':funcName,
        'funcArgs':funcArgs
    });

    //funcName + '(' + args.join(', ') + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Blocks.procedures_callreturn = {
    // Variable getter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),// Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/procedures_callreturn',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

        this.appendDummyInput('DUMMY')
            .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');

        this.addVariables();
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLRETURN_TOOLTIP'));
        this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
        this.quarkConnections_ = null;
        this.quarkArguments_ = null;
    },
    getProcedures: function() {
        var procedures=Blockly.Procedures.allProcedures();
        var procedures_dropdown=[];
        if(procedures[1].length>0){
            for (var i in procedures[1]){
                procedures_dropdown.push([procedures[1][i][0],procedures[1][i][0]]);
            }
        }
        else{
            procedures_dropdown.push(['','']);
        }
        return procedures_dropdown;
    },
    maxVariableNumber: function(){
        var procedures=Blockly.Procedures.allProcedures();
        var procedures_dropdown=[];
        var max_num=0;
        if(procedures[1].length>0){
            for (var i in procedures[1]){
                if (procedures[1][i][1].length>max_num){// if the length of the variable array is larger than the max_num, equal max_num to that number
                    max_num=procedures[1][i][1].length;
                }
            }
            return max_num;
        }
        else{
            procedures_dropdown.push(['','']);
        }
    },
    getVariables: function(funcName){
        var procedures=Blockly.Procedures.allProcedures();
        var procedures_dropdown=[];
        if(procedures[1].length>0){
            for (var i in procedures[1]){
                if (procedures[1][i][0]===funcName){
                    return procedures[1][i][1];
                }
            }
        }
        else{
            procedures_dropdown.push(['','']);
        }
    },
    onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
    addVariables: Blockly.Blocks.procedures_callnoreturn.addVariables,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.onchange,
    changeVariables: Blockly.Blocks.procedures_callnoreturn.changeVariables,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: function(xmlElement) {
        this.xmlElement=xmlElement;
        // Restore the name and parameters.
        var name = xmlElement.getAttribute('name');
        this.setFieldValue(name, 'PROCEDURES');
    }
};