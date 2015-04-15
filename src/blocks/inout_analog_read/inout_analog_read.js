'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * inout_analog_read code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_analog_read = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';

    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];

    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['inout_analog_read_setups']({
            'dropdown_pin': dropdown_pin,
        });
    } else {
        Blockly.Arduino.setups_['setup_green_analog_read' + dropdown_pin] = JST['inout_analog_read_setups']({
            'dropdown_pin': dropdown_pin,
        });
    }
    code += JST['inout_analog_read']({
        'dropdown_pin': dropdown_pin,
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * inout_analog_read block definition
 * @type {Object}
 */
Blockly.Blocks.inout_analog_read = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.URL_PIN_FUNC,
    /**
     * inout_analog_read initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ'));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP'));
    }
};