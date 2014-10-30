'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_led code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_led = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['bq_led_setups']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat
    });

    var code = JST['bq_led']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat
    });

    return code;
};

/**
 * bq_led block definition
 * @type {Object}
 */
Blockly.Blocks.bq_led = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tag: ['bq', 'led'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_led',
    /**
    * bq_led initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED'))
        .appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_PIN'))
        .setCheck(Number);

        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_STATE'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_BQ_LED_ON')||'ON', 'HIGH'],
                [RoboBlocks.locales.getKey('LANG_BQ_LED_OFF')||'OFF', 'LOW']
            ]), 'STAT')
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_LED_TOOLTIP'));
    }
};
