'use strict';
/* global Blockly, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.base_micros = function() {
    var code = 'micros()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.base_micros = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_LED,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MICROS'));
        this.setOutput(true, 'Number');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MICROS_TOOLTIP'));
    }
};
