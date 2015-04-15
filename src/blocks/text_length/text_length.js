'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * text_length code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.text_length = function() {
    // String length.
    var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
    var code ='';
    var a=RoboBlocks.findPinMode(argument0);
    code+=a['code'];
    argument0=a['pin'];

    code += JST['text_length']({
        'argument0':argument0
    });

    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Blocks.text_length = {
    // String length.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('VALUE')
            .setCheck([String, Array])
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_INPUT_LENGTH'));
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_TOOLTIP'));
    }
};