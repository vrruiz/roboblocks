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
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];

    var b = RoboBlocks.findPinMode(value_num);
    code += b['code'];
    value_num = b['pin'];


    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['inout_analog_write_setups']({
            'dropdown_pin': dropdown_pin,
            'value_num': value_num
        });
    } else {
        Blockly.Arduino.setups_['setup_analog_write' + dropdown_pin] = JST['inout_analog_write_setups']({
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
    helpUrl: RoboBlocks.URL_PIN_FUNC,
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