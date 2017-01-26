'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.base_delay_microseconds = function() {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
    var code ='';
    var a = RoboBlocks.findPinMode(delay_time);
    code += a['code'];
    delay_time = a['pin'];

    code += JST['base_delay_microseconds']({
        'delay_time': delay_time
    });
    return code;
};

Blockly.Blocks.base_delay_microseconds = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_LED,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('DELAY_TIME', Number)
        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_MICROSECONDS'))
        .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP'));
    }
};
