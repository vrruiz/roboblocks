'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.base_millis = function() {
    var code = 'millis()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.base_millis = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_LED,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS'));
        this.setOutput(true, 'Number');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS_TOOLTIP'));
    }
};
