'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * stepper_step code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.stepper_step = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';

    code += JST['stepper_step']({
        'value_num': value_num
    });

    return code;
};
/**
 * stepper_step block definition
 * @type {Object}
 */
Blockly.Blocks.stepper_step = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_STEPPER'),
    helpUrl: RoboBlocks.URL_STEPPER,
    /**
     * stepper_step initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_STEPPER);
        this.appendValueInput('NUM', Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_STEP')).setCheck(Number);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_STEPPER_STEP_NEXT'));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_STEPPER_STEP_TOOLTIP'));
    }
};