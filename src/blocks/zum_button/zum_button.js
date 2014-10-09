'use strict';
/* global Blockly, options, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_button code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_button = function() {
    var dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
        'dropdown_pin': dropdown_pin,
    });

    var code = JST['zum_button']({
        'dropdown_pin': dropdown_pin,
    });
    code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_button block definition
 * @type {Object}
 */
Blockly.Blocks.zum_button = {
    category: RoboBlocks.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'button'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/zum_button',
    /**
    * zum_button initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
        .appendField(RoboBlocks.LANG_ZUM_BUTTON)
        .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
        .appendField(RoboBlocks.LANG_ZUM_BUTTON_PIN)
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.LANG_ZUM_BUTTON_TOOLTIP);
    }
};
