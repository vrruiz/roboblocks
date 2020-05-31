'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * text_charat code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_charat = function() {
    var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
    string1=string1.replace(/&quot;/g,'"');
    var position = Blockly.Arduino.valueToCode(this, 'POSITION', Blockly.Arduino.ORDER_NONE);
    var code = '';
    var a=RoboBlocks.findPinMode(string1);
    code+=a['code'];
    string1=a['pin'];
    a=RoboBlocks.findPinMode(position);
    code+=a['code'];
    position=a['pin'];
    code += JST['text_charat']({
        'string1': string1,
        'position': position
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.text_charat = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('STRING1').setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT'));
        this.appendValueInput('POSITION').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT_POSITION')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT_TOOLTIP'));
    }
};