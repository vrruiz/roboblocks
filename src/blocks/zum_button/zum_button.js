'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_button code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_button = function() {
    var dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
        'dropdown_pin': dropdown_pin,
    });//'pinMode(' + dropdown_pin + ', INPUT_PULLUP);';

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
    category: Blockly.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'button'],
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_button',
    /**
    * zum_button initialization
    */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
        .appendField('Button')
        .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
        .appendField('PIN#')
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.setOutput(true, Boolean);
        this.setTooltip('bq Button');
    }
};
