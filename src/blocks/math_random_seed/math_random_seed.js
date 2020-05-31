'use strict';
/* global Blockly, JST, RoboBlocks */

//register with blockly arduino
Blockly.Arduino.math_random_seed = function() {
    var seed_num = Blockly.Arduino.valueToCode(this, 'SEED_NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code ='';
    var a = RoboBlocks.findPinMode(seed_num);
    code += a['code'];
    seed_num = a['pin'];

    code += JST['math_random_seed']({
        'seed_num': seed_num
    });
    return code;
};

Blockly.Blocks.math_random_seed = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('SEED_NUM', Number)
        .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED'))
        .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP'));
    }
};
