'use strict';
/* global Blockly, profiles, RoboBlocks */

/**
  * pin code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.pin_analog = function() {
    var pin = this.getFieldValue('PIN')||'';
    return [pin, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.pin_analog = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.URL_PIN_FUNC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_ANALOG'))
            .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
    }
};
