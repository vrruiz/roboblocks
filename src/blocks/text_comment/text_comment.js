'use strict';
/* global Blockly, RoboBlocks */

/**
  * text_comment code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_comment = function() {
    var argument0 = this.getFieldValue('COMMENT');
    var code = '//' + argument0 + '\n';
    //Blockly.Arduino.definitions_['declare_text_comment'] = '/*' + argument0 + '*/\n';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.text_comment = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_COMMENT'))
            .appendField(new Blockly.FieldTextInput(''), 'COMMENT');
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_COMMENT_TOOLTIP'));
    }
};
