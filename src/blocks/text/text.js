'use strict';
/* global Blockly, RoboBlocks */

/**
  * text code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text = function() {
    // Text value.
    var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.text = {
    // Text value.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField('"')
            .appendField(new Blockly.FieldTextInput(''), 'TEXT')
            .appendField('"');
        this.setOutput(true, String);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_TEXT_TOOLTIP'));
    }
};
