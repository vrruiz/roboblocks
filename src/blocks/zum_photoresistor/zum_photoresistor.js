'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_photoresistor code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_photoresistor = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
    var code = '';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];


    code += JST['zum_photoresistor']({
        'dropdown_pin': dropdown_pin
    });

    //  code=code.substring(0,code.length-1);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * zum_photoresistor block definition
 * @type {Object}
 */
Blockly.Blocks.zum_photoresistor = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['photoresistor'],
    helpUrl: RoboBlocks.URL_LDR,
    /**
    * zum_photoresistor initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR'))
            .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_PIN'));
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_TOOLTIP'));
    }
};
