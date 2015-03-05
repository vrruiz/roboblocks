'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_potentiometer code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_potentiometer = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
    var code = '';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];

    code += JST['zum_potentiometer']({
        'dropdown_pin': dropdown_pin
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_potentiometer block definition
 * @type {Object}
 */
Blockly.Blocks.zum_potentiometer = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['potentiometer'],
    helpUrl: RoboBlocks.URL_POTENTIOMETER,
    /**
    * zum_potentiometer initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER'))
            .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_PIN'));
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_TOOLTIP'));
    }
};
