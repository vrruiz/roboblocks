'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_photoresistor code generation
 * @return {String} Code generated with block parameters
 */
//        var code = 'analogRead(' + dropdown_pin + ')';
Blockly.Arduino.bq_photoresistor = function() {
    var dropdown_pin = this.getFieldValue('PIN');

    var code = JST['bq_photoresistor']({
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
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'photoresistor'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_photoresistor',
    /**
    * bq_photoresistor initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR)
        .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
        .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR_PIN)
        .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.LANG_BQ_PHOTORESISTOR_TOOLTIP);
    }
};
