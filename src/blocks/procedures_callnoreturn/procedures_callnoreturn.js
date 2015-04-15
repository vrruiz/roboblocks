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
    var code = '';
    var a;
    try {
        for (var x = 0; x < this.getVariables(funcName).length; x++) {
            args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || '';
            a=RoboBlocks.findPinMode(args[x]);
            code+=a['code'];
            args[x]=a['pin'];
        }
    } catch (e) {}
    var funcArgs = args.join(', ');
    code += JST['procedures_callnoreturn']({
        'funcName': funcName,
        'funcArgs': funcArgs
    });
    return code;
};
Blockly.Blocks.procedures_callnoreturn = {
    // Variable getter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_PROC_NO_RET,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
        this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
        this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
        this.quarkConnections_ = null;
        this.quarkArguments_ = null;
        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
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
        }
        return name;
    },
    getProcedures: function() {
        var procedures = Blockly.Procedures.allProcedures();
        var procedures_dropdown = [];
        if (procedures[0].length > 0) {
            for (var i in procedures[0]) {
                var proc_name = procedures[0][i][0];
                proc_name = this.validName(proc_name);
                procedures_dropdown.push([proc_name, proc_name]);
            }
        } else {
            procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
        }
        return procedures_dropdown;
    },
    maxVariableNumber: function() {
        var procedures = Blockly.Procedures.allProcedures();
        var procedures_dropdown = [];
        var max_num = 0;
        if (procedures[0].length > 0 || procedures[1].length > 0) {
            for (var i in procedures[0]) {
                if (procedures[0][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                    max_num = procedures[0][i][1].length;
                }
            }
            return max_num;
        } else {
            procedures_dropdown.push(['', '']);
        }
    },
    getVariables: function(funcName) {
        try {
            var procedures = Blockly.Procedures.allProcedures();
            var procedures_dropdown = [];
            if (procedures[0].length > 0) {
                for (var i in procedures[0]) {
                    if (procedures[0][i][0] === funcName) {
                        return procedures[0][i][1];
                    }
                }
            } else {
                procedures_dropdown.push(['', '']);
            }
        } catch (e) {}
    },
    exists: function() {
        var procedures = Blockly.Procedures.allProcedures();
        if (procedures[0].length > 0) {
            for (var i in procedures[0]) {
                if (procedures[0][i][0] === this.getFieldValue('PROCEDURES')) {
                    return true;
                }
            }
        } else {
            return false;
        }
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
            this.changeVariables();
            this.last_procedure = this.getFieldValue('PROCEDURES');
            this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
        } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
            this.addVariables();
            this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            this.last_procedure = this.getFieldValue('PROCEDURES');
        }
        if (!this.exists()) {
            try {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
            } catch (e) {}
        } else {
            try {
                this.setWarningText(null);
            } catch (e) {}
        }
    },
    addVariables: function() {
        var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
        var var_num = 0;
        if (func_variables) {
            if (!this.last_variables) {
                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            }
            if (func_variables.length >= this.last_variables.length) {
                var_num = func_variables.length;
            } else if (this.last_variables) {
                try {
                    var_num = this.last_variables.length;
                } catch (e) {}
            }
            for (var x = 0; x < var_num; x++) {
                if (this.getInput('ARG' + x) === null) {
                    this.appendValueInput('ARG' + x).appendField(func_variables[x], 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                        this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                    } else {
                        this.removeInput('ARG' + x);
                    }
                }
            }
            this.arguments_ = func_variables;
        }
    },
    renameProcedure: function(oldName, newName) {
        if (this.last_procedure) {
            var procedures = this.getProcedures();
            for (var i in procedures) {
                if (Blockly.Names.equals(oldName, procedures[i][0])) {
                    this.removeInput('DUMMY');
                    this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                }
            }
            if (this.last_procedure === oldName) {
                this.last_procedure = newName;
            }
            try {
                this.setFieldValue(this.last_procedure, 'PROCEDURES');
            } catch (e) {}
        }
    },
    changeVariables: function() {
        var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
        for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
            if (this.getInput('ARG' + i) === null) {
                break;
            }
            this.removeInput('ARG' + i);
        }
        for (var variable in func_variables) {
            this.appendValueInput('ARG' + variable).appendField(func_variables[variable]).setAlign(Blockly.ALIGN_RIGHT);
        }
        this.arguments_ = func_variables;
    },
    mutationToDom: function() {
        // Save the name and arguments (none of which are editable).
        var container = document.createElement('mutation');
        container.setAttribute('name', this.getFieldValue('PROCEDURES'));
        if (typeof this.arguments_ === 'undefined') {
            this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
        }
        if (typeof this.arguments_ === 'undefined') {
            this.arguments_ = [];
        }
        for (var x = 0; x < this.arguments_.length; x++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[x]);
            container.appendChild(parameter);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        this.xmlElement = xmlElement;
        // Restore the name and parameters.
        var name = xmlElement.getAttribute('name');
        this.last_procedure = name;
        this.setFieldValue(name, 'PROCEDURES');
        for (var x = 0; x < xmlElement.childNodes.length; x++) {
            this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
        }
    }
};