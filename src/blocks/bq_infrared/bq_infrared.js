'use strict';
/* global Blockly, options,  JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_infrared code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_infrared = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['bq_infrared_setups']({
        'dropdown_pin': dropdown_pin
    });

    var code = JST['bq_infrared']({
        'dropdown_pin': dropdown_pin
    });

    //  code=code.substring(0,code.length-1);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_infrared block definition
 * @type {Object}
 */
Blockly.Blocks.bq_infrared = {
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'infrared'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_infrared',
    /**
     * bq_infrared initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.LANG_BQ_INFRARED)
            .appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.LANG_BQ_INFRARED_PIN)
            .setCheck(Number);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.LANG_BQ_INFRARED_TOOLTIP);
    }
};
