'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * procedures_callnoreturn code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.procedures_callnoreturn = function() {
    // Call a procedure with a return value.
    var funcName = this.getFieldValue('PROCEDURES');
    var args = [];//this.getInput('VARIABLES');//this.getVariables(funcName);

    for (var x = 0; x < this.getVariables(funcName).length; x++) {
        args[x] = Blockly.Arduino.valueToCode(this, 'VARIABLES' + x,Blockly.Arduino.ORDER_NONE) || '';
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

        this.addVariables();

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        
        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
        this.arguments_ = [];
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
    renameProcedure: function(oldName) {    //changed name!!
        var procedures= this.getProcedures();
        for (var i in procedures){
            if (Blockly.Names.equals(oldName, procedures[i][0])) {
                var dropdown=new Blockly.FieldDropdown(this.getProcedures());
                this.removeInput('DUMMY');
                this.appendDummyInput('DUMMY')
                    .appendField(dropdown, 'PROCEDURES');
            }
        }
        this.setFieldValue(this.no_last_procedure, 'PROCEDURES');
        this.addVariables();
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (this.getFieldValue('PROCEDURES')!== this.no_last_procedure){
            this.addVariables();
            this.no_last_procedure=this.getFieldValue('PROCEDURES');
        }
        if(this.getVariables(this.getFieldValue('PROCEDURES'))!==this.last_variables){
            this.addVariables();
            this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
        }
    },
    addVariables: function(){
        var func_variables=this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
        for (var i=0; i<this.maxVariableNumber(); i++){      // remove all the possible variable inputs
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
    setProcedureParameters: function(paramNames, paramIds) {
        // Data structures for parameters on each call block:
        // this.arguments = ['x', 'y']
        //     Existing param names.
        // paramNames = ['x', 'y', 'z']
        //     New param names.
        // paramIds = ['piua', 'f8b_', 'oi.o']
        //     IDs of params (consistent for each parameter through the life of a
        //     mutator, regardless of param renaming).
        // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
        //     Look-up of paramIds to connections plugged into the call block.
        // this.quarkArguments_ = ['piua', 'f8b_']
        //     Existing param IDs.
        // Note that quarkConnections_ may include IDs that no longer exist, but
        // which might reappear if a param is reattached in the mutator.
        if (!paramIds) {
            // Reset the quarks (a mutator is about to open).
            this.quarkConnections_ = {};
            this.quarkArguments_ = null;
            return;
        }
        if (paramIds.length !== paramNames.length) {
            throw 'Error: paramNames and paramIds must be the same length.';
        }
        if (!this.quarkArguments_) {
            // Initialize tracking for this block.
            this.quarkConnections_ = {};
            if (paramNames.join('\n') === this.arguments_.join('\n')) {
                // No change to the parameters, allow quarkConnections_ to be
                // populated with the existing connections.
                this.quarkArguments_ = paramIds;
            } else {
                this.quarkArguments_ = [];
            }
        }
        // Switch off rendering while the block is rebuilt.
        var savedRendered = this.rendered;
        this.rendered = false;
        var input, connection;
        // Update the quarkConnections_ with existing connections.
        for (var x = this.arguments_.length - 1; x >= 0; x--) {
            input = this.getInput('VARIABLES' + x);
            if (input) {
                connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkArguments_[x]] = connection;
                // Disconnect all argument blocks and remove all inputs.
                this.removeInput('VARIABLES' + x);
            }
        }
        // Rebuild the block's arguments.
        this.arguments_ = [].concat(paramNames);
        this.quarkArguments_ = paramIds;
        for (x = 0; x < this.arguments_.length; x++) {
            input = this.appendValueInput('VARIABLES' + x)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(this.arguments_[x]);
            if (this.quarkArguments_) {
                // Reconnect any child blocks.
                var quarkName = this.quarkArguments_[x];
                if (quarkName in this.quarkConnections_) {
                    connection = this.quarkConnections_[quarkName];
                    if (!connection || connection.targetConnection ||
                        connection.sourceBlock_.workspace !== this.workspace) {
                        // Block no longer exists or has been attached elsewhere.
                        delete this.quarkConnections_[quarkName];
                    } else {
                        input.connection.connect(connection);
                    }
                }
            }
        }
        // Restore rendering and show the changes.
        this.rendered = savedRendered;
        if (this.rendered) {
            this.render();
        }
    },
    mutationToDom: function() {
        // Save the name and arguments (none of which are editable).
        var container = document.createElement('mutation');
        container.setAttribute('name', this.getFieldValue('PROCEDURES'));
        for (var x = 0; x < this.arguments_.length; x++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[x]);
            container.appendChild(parameter);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        // Restore the name and parameters.
        var name = xmlElement.getAttribute('name');
        this.setFieldValue(name, 'PROCEDURES');
        // var def = Blockly.Procedures.getDefinition(name, this.workspace);
        // if (def && def.mutator.isVisible()) {
        //     // Initialize caller with the mutator's IDs.
        //     this.setProcedureParameters(def.arguments_, def.paramIds_);
        // } else {
        //     this.arguments_ = [];
        //     var childNode;
        //     for (var x = 0; x<xmlElement.childNodes.length; x++) {
        //         childNode=xmlElement.childNodes[x];
        //         if (childNode.nodeName.toLowerCase() === 'arg') {
        //             this.arguments_.push(childNode.getAttribute('name'));
        //         }
        //     }
        //     // For the second argument (paramIds) use the arguments list as a dummy
        //     // list.
        //     this.setProcedureParameters(this.arguments_, this.arguments_);
        // }
    }
};