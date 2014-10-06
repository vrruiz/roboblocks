'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_potentiometer code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_potentiometer = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var code = JST['zum_potentiometer']({
        'dropdown_pin': dropdown_pin
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_potentiometer block definition
 * @type {Object}
 */
Blockly.Blocks.zum_potentiometer = {
    category: Blockly.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'potentiometer'],
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_potentiometer',
    /**
    * zum_potentiometer initialization
    */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
        .appendField('Potentiometer')
        .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
        .appendField('PIN#')
        .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
        this.setOutput(true, Number);
        this.setTooltip('bq Potentiometer');
    }
};
