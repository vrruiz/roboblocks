'use strict';
/* global Blockly, JST */

//register with blockly arduino
Blockly.Arduino.base_delay = function() {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';

    var code = JST['base_delay']({
        'delay_time': delay_time
    });
    return code;
};

Blockly.Blocks.base_delay = {
    category: Blockly.LANG_CATEGORY_CONTROLS,
    helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/base_delay',
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_CONTROL);
        this.appendValueInput('DELAY_TIME', Number)
        .appendField('Wait (ms)')
        .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Delay specific time (in ms)');
    }
};
