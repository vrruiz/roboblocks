'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * inout_pulsein code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_pulsein = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = this.getFieldValue('MODE');
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['inout_pulsein_setups']({
            'dropdown_pin': dropdown_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_pulsein' + dropdown_pin] = JST['inout_pulsein_setups']({
            'dropdown_pin': dropdown_pin
        });
    }
    code += JST['inout_pulsein']({
        'dropdown_pin': dropdown_pin,
        'dropdown_mode': dropdown_mode
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * inout_pulsein block definition
 * @type {Object}
 */
Blockly.Blocks.inout_pulsein = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.URL_PIN_FUNC,
    /**
     * inout_digital_read initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN'));
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN_MODE')).appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH') || 'HIGH', 'HIGH'],
            [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW') || 'LOW', 'LOW']
        ]), 'MODE');
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP'));
    }
};