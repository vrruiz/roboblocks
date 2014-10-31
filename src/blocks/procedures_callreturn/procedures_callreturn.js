'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * procedures_callreturn code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.procedures_callreturn = function() {
    // Call a procedure with a return value.
    var funcName = this.getFieldValue('PROCEDURES');
    var args = [];//this.getInput('VARIABLES');//this.getVariables(funcName);

    for (var x = 0; x < this.getVariables(funcName).length; x++) {
        args[x] = Blockly.Arduino.valueToCode(this, 'VARIABLES' + x,Blockly.Arduino.ORDER_NONE) || 'null';
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
        
        var dropdown=new Blockly.FieldDropdown(this.getProcedures());

        this.appendDummyInput('DUMMY')
            .appendField(dropdown, 'PROCEDURES');

        this.addVariables();
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLRETURN_TOOLTIP'));
        this.arguments_ = [];
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
    renameProcedure: function(oldName) {
        var procedures= this.getProcedures();
        for (var i in procedures){
            if (Blockly.Names.equals(oldName, procedures[i][0])) {
                var dropdown=new Blockly.FieldDropdown(this.getProcedures());
                this.removeInput('DUMMY');
                this.appendDummyInput('DUMMY')
                    .appendField(dropdown, 'PROCEDURES');
            }
        }
        this.setFieldValue(this.last_procedure, 'PROCEDURES');

        this.addVariables();
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (this.getFieldValue('PROCEDURES')!== this.last_procedure){
            this.addVariables();
            this.last_procedure=this.getFieldValue('PROCEDURES');
        }
        if(this.getVariables(this.getFieldValue('PROCEDURES'))!==this.last_variables){
            this.addVariables();
            this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
        }
    },
    addVariables: function(){
        var func_variables=this.getVariables(this.getFieldValue('PROCEDURES'));//get the variables of the actual function
        for (var i=0; i<this.maxVariableNumber(); i++){// remove all the possible variable inputs
            if (this.getInput('VARIABLES'+i)===null){
                break;
            }
            this.removeInput('VARIABLES'+i);
        }
        for (var variable in func_variables){
            this.appendValueInput('VARIABLES'+variable)
                .appendField(func_variables[variable]);
        }
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
    }
};




