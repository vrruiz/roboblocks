'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * stepper_setspeed code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.stepper_setspeed = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';

    code += JST['stepper_setspeed']({
        'value_num': value_num
    });

    return code;
};
/**
 * stepper_setspeed block definition
 * @type {Object}
 */
Blockly.Blocks.stepper_setspeed = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_STEPPER'),
    helpUrl: RoboBlocks.URL_STEPPER,
    /**
     * stepper_setspeed initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_STEPPER);
        this.appendValueInput('NUM', Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_SETSPEED')).setCheck(Number);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_STEPPER_SETSPEED_NEXT'));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_STEPPER_SETSPEED_TOOLTIP'));
    }
};