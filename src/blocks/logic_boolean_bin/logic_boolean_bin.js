'use strict';
/* global Blockly, RoboBlocks */

/**
  * logic_boolean code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.logic_boolean_bin = function() {
    // Boolean values 1 and 0.
    var code = (this.getFieldValue('BOOL') === '1') ? '1' : '0';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.logic_boolean = {
    // Boolean data type: 1 and 0.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
    helpUrl: RoboBlocks.URL_LOGIC,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(1, Boolean);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TRUE'), '1'],
     [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_FALSE'), '0']]), 'BOOL');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TOOLTIP'));
    }
};
