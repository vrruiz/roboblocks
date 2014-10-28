'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_button code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_button = function() {

    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
        'dropdown_pin': dropdown_pin,
    });

    var code = JST['bq_button']({
        'dropdown_pin': dropdown_pin,
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_button block definition
 * @type {Object}
 */
Blockly.Blocks.bq_button = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'botón'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_button',
    /**
     * bq_button initialization
    **/
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON'))
            .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
            .setCheck(Number)
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_PIN'))
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_TOOLTIP'));
    }
};
