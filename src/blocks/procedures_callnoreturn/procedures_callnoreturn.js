'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * procedures_callnoreturn code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.procedures_callnoreturn = function() {
    // Call a procedure with a return value.
    var funcName = this.getFieldValue('PROCEDURES');
    var args = [];

    for (var x = 0; x < this.getVariables(funcName).length; x++) {
        args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,Blockly.Arduino.ORDER_NONE) || '';
    }
    var funcArgs=args.join(', ');
    var code = JST['procedures_callnoreturn']({
        'funcName':funcName,
        'funcArgs':funcArgs
    });

    return code;
};




Blockly.Blocks.procedures_callnoreturn = {
    // Variable getter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),  // Variables are handled specially.
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/procedures_callnoreturn',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

        this.appendDummyInput('DUMMY')
            .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
        this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
        this.quarkConnections_ = null;
        this.quarkArguments_ = null;
    },
    getProcedures: function() {
        var procedures=Blockly.Procedures.allProcedures();
        var procedures_dropdown=[];
        if(procedures[0].length>0){
            for (var i in procedures[0]){
                procedures_dropdown.push([procedures[0][i][0],procedures[0][i][0]]);
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
        if(procedures[0].length>0||procedures[1].length>0){
            for (var i in procedures[0]){
                if (procedures[0][i][1].length>max_num){// if the length of the variable array is larger than the max_num, equal max_num to that number
                    max_num=procedures[0][i][1].length;
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
        if(procedures[0].length>0 || procedures[1].length>0){
            for (var i in procedures[0]){
                if (procedures[0][i][0]===funcName){
                    return procedures[0][i][1];
                }
            }
        }
        else{
            procedures_dropdown.push(['','']);
        }
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!this.last_procedure){
            this.last_procedure=this.getFieldValue('PROCEDURES');
        }
        if (typeof this.last_variables==='undefined'){
            this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
        }
        else if (typeof this.last_variables!=='undefined' && typeof this.last_procedure!=='undefined'){
            if (this.getFieldValue('PROCEDURES')!== this.last_procedure){
                this.changeVariables();
                this.last_procedure=this.getFieldValue('PROCEDURES');
            }
            if(this.getVariables(this.getFieldValue('PROCEDURES'))!==this.last_variables){
                this.addVariables();
                this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
            }
        }
    },
    addVariables: function(){
        var func_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
        var var_num;
        if (typeof this.last_variables==='undefined'){
            this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
        }
        if(typeof func_variables!=='undefined'&& typeof this.last_variables!=='undefined'){
            if (typeof this.last_variables==='undefined'){
                this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
            }
            if (func_variables.length>=this.last_variables){
                var_num=func_variables.length;
            }
            else{
                var_num=this.last_variables.length;
            }
        }
        else{
            var_num=0;
        }

        for (var x = 0; x < var_num; x++) {
            if (this.getInput('ARG'+x)===null){
                this.appendValueInput('ARG'+x)
                        .appendField(func_variables[x], 'ARG_NAME'+x);
            }
            else {
                if(typeof func_variables[x]!=='undefined'){
                    this.setFieldValue(func_variables[x],'ARG_NAME'+x);
                }
                else{
                    this.removeInput('ARG'+x);
                }
            }
        }
        this.arguments_=func_variables;
    },

    renameProcedure: function(oldName, newName) {
        var procedures= this.getProcedures();
        for (var i in procedures){
            if (Blockly.Names.equals(oldName, procedures[i][0])) {
                this.removeInput('DUMMY');
                this.appendDummyInput('DUMMY')
                    .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
            }
        }
        if (this.last_procedure===oldName){
            this.last_procedure=newName;
        }
        this.setFieldValue(this.last_procedure, 'PROCEDURES');
    },
    changeVariables: function(){
        var func_variables=this.getVariables(this.getFieldValue('PROCEDURES'));//get the variables of the actual function
        for (var i=0; i<this.maxVariableNumber(); i++){// remove all the possible variable inputs
            if (this.getInput('ARG'+i)===null){
                break;
            }
            this.removeInput('ARG'+i);
        }
        for (var variable in func_variables){
            this.appendValueInput('ARG'+variable)
                .appendField(func_variables[variable]);
        }
        this.arguments_=func_variables;
    },
    mutationToDom: function() {
        // Save the name and arguments (none of which are editable).
        var container = document.createElement('mutation');
        container.setAttribute('name', this.getFieldValue('PROCEDURES'));
        if (typeof this.arguments_==='undefined'){
            this.arguments_=this.getVariables(this.getFieldValue('PROCEDURES'));
        }
        if (typeof this.arguments_==='undefined'){
            this.arguments_=[];
        }
        for (var x = 0; x < this.arguments_.length; x++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[x]);
            container.appendChild(parameter);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        this.xmlElement=xmlElement;
        // Restore the name and parameters.
        var name = xmlElement.getAttribute('name');
        this.last_procedure=name;
        this.setFieldValue(name, 'PROCEDURES');

        for (var x = 0; x < xmlElement.childNodes.length; x++) {
            // try{
            //     this.appendValueInput('ARG'+x)
            //         .appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME'+x);
            // }catch(e){console.log('aaaaaaaaaaa',e);}
            this.appendValueInput('ARG'+x)
                .appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME'+x);
        }
    }

};