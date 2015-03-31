'use strict';
/* global Blockly, profiles, RoboBlocks */

/**
  * pin code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.pin_digital = function() {
    var pin = this.getFieldValue('PIN')||'';
    return [pin, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.pin_digital = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.URL_PIN_FUNC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL'))
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
    },
    onchange: function(){
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (this.getFieldValue('PIN')==='0') {
            try {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL0'));
            } catch (e) {}
        } else {
            try {
                this.setWarningText(null);
            } catch (e) {}
        }
    }
};
