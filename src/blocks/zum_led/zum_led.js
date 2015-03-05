'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_led code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_led = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
    var dropdown_stat = this.getFieldValue('STAT');
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['zum_led_setups']({
            'dropdown_pin': dropdown_pin,
            'dropdown_stat': dropdown_stat
        });
    } else {
        Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['zum_led_setups']({
            'dropdown_pin': dropdown_pin,
            'dropdown_stat': dropdown_stat
        });
    }
    code += JST['zum_led']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat
    });
    return code;
};
/**
 * zum_led block definition
 * @type {Object}
 */
Blockly.Blocks.zum_led = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['led'],
    helpUrl: RoboBlocks.URL_LED,
    /**
     * zum_led initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED')).appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_PIN'));
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_STATE')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_ZUM_LED_ON') || 'ON', 'HIGH'],
            [RoboBlocks.locales.getKey('LANG_ZUM_LED_OFF') || 'OFF', 'LOW']
        ]), 'STAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_LED_TOOLTIP'));
    }
};