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
    category: RoboBlocks.LANG_CATEGORY_LOGIC,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/logic_boolean',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, Boolean);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'BOOL');
        this.setTooltip(RoboBlocks.LANG_LOGIC_BOOLEAN_TOOLTIP);
    }
};

Blockly.Blocks.logic_boolean.OPERATORS =
    [[RoboBlocks.LANG_LOGIC_BOOLEAN_TRUE, 'TRUE'],
     [RoboBlocks.LANG_LOGIC_BOOLEAN_FALSE, 'FALSE']];
