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
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/pin',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendDummyInput('')
            .appendField('Digital pin')
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
    }
};
