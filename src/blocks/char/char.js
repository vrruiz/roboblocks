'use strict';
/* global Blockly, RoboBlocks */

/**
  * char code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.char = function() {
    // char value.
    //var code = Blockly.Arduino.quote_(this.getFieldValue('CHAR'));
    var code = '\'' + this.getFieldValue('CHAR') + '\'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.char = {
    // char value.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField('\'')
            .appendField(new Blockly.FieldTextInput(''), 'CHAR')
            .appendField('\'');
        this.setOutput(true, String);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CHAR_TOOLTIP'));
    },
    onchange: function() {
        if (this.getFieldValue('CHAR').length > 1) {
            this.setWarningText(RoboBlocks.locales.getKey('LANG_CHAR_LENGTH'));
        } else {
            this.setWarningText(null);
        }
    }
};
