'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * inout_analog_write code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_analog_write = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    if (this.childBlocks_ !== undefined && this.childBlocks_.length>=1) {
        var pin_block=[];
        for (var i in this.childBlocks_){
            if (this.childBlocks_[i].type==='variables_get' || this.childBlocks_[i].type==='math_number'){
                pin_block.push(this.childBlocks_[i].type);
            }
        }
        if (pin_block[0] === 'variables_get') {
            code += JST['inout_analog_write_setups']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });
        } else if (pin_block[0] === 'math_number') {
            Blockly.Arduino.setups_['setup_analog_write'+dropdown_pin] = JST['inout_analog_write_setups']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });
        }
    } else {
        Blockly.Arduino.setups_['setup_analog_write'+dropdown_pin] = JST['inout_analog_write_setups']({
            'dropdown_pin': dropdown_pin,
            'value_num': value_num
        });
    }
    code += JST['inout_analog_write']({
        'dropdown_pin': dropdown_pin,
        'value_num': value_num
    });
    return code;
};
/**
 * inout_analog_write block definition
 * @type {Object}
 */
Blockly.Blocks.inout_analog_write = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_write',
    /**
     * inout_analog_write initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE'));
        this.appendValueInput('NUM', Number).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE')).setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP'));
    }
};