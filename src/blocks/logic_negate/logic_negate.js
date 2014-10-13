'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * logic_negate code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.logic_negate = function() {
    // Negation.
    var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
    var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
    var code = JST ['logic_negate']({
        'argument0':argument0
    });

    //'!' + argument0;
    return [code, order];
};


Blockly.Blocks.logic_negate = {
    // Negation.
    category: RoboBlocks.LANG_CATEGORY_LOGIC,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/logic_negate',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
        this.setOutput(true, Boolean);
        this.appendValueInput('BOOL')
            .setCheck(Boolean)
            .appendField(RoboBlocks.LANG_LOGIC_NEGATE_INPUT_NOT);
        this.setTooltip(RoboBlocks.LANG_LOGIC_NEGATE_TOOLTIP);
    }
};
