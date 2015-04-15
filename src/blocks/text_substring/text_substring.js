'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * text_substring code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_substring = function() {
    var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
    var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_NONE);
    var to = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_NONE);
    var code = '';
    var a=RoboBlocks.findPinMode(string1);
    code+=a['code'];
    string1=a['pin'];

    a=RoboBlocks.findPinMode(from);
    code+=a['code'];
    from=a['pin'];

    a=RoboBlocks.findPinMode(to);
    code+=a['code'];
    to=a['pin'];

    code += JST['text_substring']({
        'string1': string1,
        'from': from,
        'to':to
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.text_substring = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('STRING1')
            // .setCheck(String)
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING'));

        this.appendValueInput('FROM')
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_FROM'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('TO')
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TO'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        // this.appendDummyInput()
        //     .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_QUESTION'));

        this.setInputsInline(true);

        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TOOLTIP'));
    }
};