'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_photoresistor code generation
 * @return {String} Code generated with block parameters
 */
//        var code = 'analogRead(' + dropdown_pin + ')';
Blockly.Arduino.bq_photoresistor = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];

    code += JST['bq_photoresistor']({
        'dropdown_pin': dropdown_pin
    });

    //  code=code.substring(0,code.length-1);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * bq_photoresistor block definition
 * @type {Object}
*/
Blockly.Blocks.bq_photoresistor = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['photoresistor'],
    helpUrl: RoboBlocks.URL_LDR,
    /**
    * bq_photoresistor initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR'))
        .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_PIN'))
        .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_TOOLTIP'));
    }
};
