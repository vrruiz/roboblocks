'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_button code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_button = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['zum_button_setups']({
            'dropdown_pin': dropdown_pin,
        });
    } else {
        Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
            'dropdown_pin': dropdown_pin,
        });
    }
    code += JST['zum_button']({
        'dropdown_pin': dropdown_pin,
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * zum_button block definition
 * @type {Object}
 */
Blockly.Blocks.zum_button = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['button'],
    helpUrl: RoboBlocks.URL_BUTTON,
    /**
     * zum_button initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON')).appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_PIN'));
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_TOOLTIP'));
    }
};