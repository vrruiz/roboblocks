'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.base_delay = function() {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
    var code ='';
    var a = RoboBlocks.findPinMode(delay_time);
    code += a['code'];
    delay_time = a['pin'];

    code += JST['base_delay']({
        'delay_time': delay_time
    });
    return code;
};

Blockly.Blocks.base_delay = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_LED,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('DELAY_TIME', Number)
        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_WAIT'))
        .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_TOOLTIP'));
    }
};
