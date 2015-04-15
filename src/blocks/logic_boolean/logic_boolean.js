'use strict';
/* global Blockly, RoboBlocks */

/**
  * logic_boolean code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.logic_boolean = function() {
    // Boolean values true and false.
    var code = (this.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.logic_boolean = {
    // Boolean data type: true and false.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
    helpUrl: RoboBlocks.URL_LOGIC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, Boolean);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TRUE'), 'TRUE'],
     [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_FALSE'), 'FALSE']]), 'BOOL');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TOOLTIP'));
    }
};