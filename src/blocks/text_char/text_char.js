'use strict';
/* global Blockly, RoboBlocks */

/**
  * text_char code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_char = function() {
    var code = '\'' + this.getFieldValue('CHAR') + '\'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * text_char block definition
 * @type {Object}
 */
Blockly.Blocks.text_char = {
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
        var car=this.getFieldValue('CHAR');
        if (car.length > 1 && car.charAt(0)!=='\\') {
            this.setWarningText(RoboBlocks.locales.getKey('LANG_CHAR_LENGTH'));
        } else {
            this.setWarningText(null);
        }
    }
};
