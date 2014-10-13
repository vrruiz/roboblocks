'use strict';
/* global Blockly, RoboBlocks */

/**
  * logic_null code generation
  * @return {String} Code generated with block parameters
  */


Blockly.Arduino.logic_null = function() {
    var code = 'NULL';
    return [code ,Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks.logic_null = {
    // Null data type.
    category: RoboBlocks.LANG_CATEGORY_LOGIC,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/logic_null',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, null);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_LOGIC_NULL);
        this.setTooltip(RoboBlocks.LANG_LOGIC_NULL_TOOLTIP);
    }
};

