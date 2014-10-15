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
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/pin',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('')
            .appendField('Digital pin')
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP);
    }
};
