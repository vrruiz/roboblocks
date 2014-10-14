'use strict';
/* global Blockly, profiles, RoboBlocks */

/**
  * pin code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.pin_analog = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_NONE);
    return [pin, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.pin_analog = {
    category: RoboBlocks.LANG_CATEGORY_VARIABLES,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/pin',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
        this.appendDummyInput('')
            .appendField('Analog pin')
            .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP);
    }
};
