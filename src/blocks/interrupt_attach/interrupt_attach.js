'use strict';
/* global Blockly, JST, RoboBlocks */
/**
 * interrupt_attach code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.interrupt_attach = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var funcName = this.getFieldValue('PROCEDURES');
    var dropdown_mode = this.getFieldValue('MODE');
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    dropdown_pin = a['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['interrupt_attach']({
            'block_pin': dropdown_pin,
            'funcName': funcName,
            'mode': dropdown_mode
        });
    } else {
        code += JST['interrupt_attach']({
            'block_pin': dropdown_pin,
            'funcName': funcName,
            'mode': dropdown_mode
        });
    }
    return code;
};
Blockly.Blocks.interrupt_attach = {
    // Variable getter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_INTERRUPTS,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
        this.appendDummyInput('DUMMY')
                .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH'))
                .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES')
                .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM2'))
                .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_LOW')||'LOW' , 'LOW'],
            [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_CHANGE')||'CHANGE' , 'CHANGE'],
            [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_RISING')||'RISING' , 'RISING'],
            [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_FALLING')||'FALLING' , 'FALLING']
        ]), 'MODE');
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM3')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_TOOLTIP'));
        this.quarkConnections_ = null;
        this.quarkArguments_ = null;
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
            //this.changeVariables();
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
    renameProcedure: function(oldName, newName) {
        if (this.last_procedure) {
            var procedures = this.getProcedures();
            for (var i in procedures) {
                if (Blockly.Names.equals(oldName, procedures[i][0])) {
                    this.removeInput('DUMMY');
                    //this.removeInput('PIN');
                    //this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                    this.appendDummyInput('DUMMY')
                        .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH'))
                        .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES')
                        .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM2'))
                        .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_LOW')||'LOW' , 'LOW'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_CHANGE')||'CHANGE' , 'CHANGE'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_RISING')||'RISING' , 'RISING'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_FALLING')||'FALLING' , 'FALLING']
                    ]), 'MODE');
                    //this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM3')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                    this.moveInputBefore('DUMMY','PIN');
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
    mutationToDom: function() {
        // Save the name and arguments (none of which are editable).
        var container = document.createElement('mutation');
        container.setAttribute('name', this.getFieldValue('PROCEDURES'));
        if (typeof this.arguments_ === 'undefined') {
            //this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
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