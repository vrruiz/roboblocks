'use strict';
/* global Blockly, options, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_button code generation    
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.bq_button = function() {

    var dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
        'dropdown_pin': dropdown_pin,
    });

    var code = JST['bq_button']({
        'dropdown_pin': dropdown_pin,
    });
    code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_button block definition
 * @type {Object}
 */
Blockly.Blocks.bq_button = {
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'button'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_button',
    /**
     * bq_button initialization
    **/
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField(RoboBlocks.LANG_BQ_BUTTON)
        .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
        .appendField(RoboBlocks.LANG_BQ_BUTTON_PIN)
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.LANG_BQ_BUTTON_TOOLTIP);
    }
};
