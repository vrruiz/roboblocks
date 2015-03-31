'use strict';
/* global Blockly, RoboBlocks */

/**
  * procedures_ifreturn code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.procedures_return = function() {
    // Conditionally return value from a procedure.
    var code ='';
    var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_NONE) || '';
    var a=RoboBlocks.findPinMode(value);
    code+=a['code'];
    code += '  return (' + value + ');\n';
    return code;
};



Blockly.Blocks.procedures_return = {
    // Conditionally return value from a procedure.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
    helpUrl: RoboBlocks.URL_PROC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_RETURN'));
        this.appendValueInput('VALUE');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_RETURN_TOOLTIP'));
        this.hasReturnValue_ = true;
    },
    mutationToDom: function() {
        // Save whether this block has a return value.
        var container = document.createElement('mutation');
        container.setAttribute('value', Number(this.hasReturnValue_));
        return container;
    },
    domToMutation: function(xmlElement) {
        // Restore whether this block has a return value.
        var value = xmlElement.getAttribute('value');
        this.hasReturnValue_ = (value === 1);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        var legal = false;
        // Is the block nested in a procedure?
        var block = this;
        do {
            if (block.type === 'procedures_defreturn') {
                legal = true;
                break;
            }
            block = block.getSurroundParent();
        } while (block);
        if (legal) {
            this.setWarningText(null);
        } else {
            try{
                this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
            }catch(err){
                console.log('Captured error: ', err);
            }
        }
    }
};
