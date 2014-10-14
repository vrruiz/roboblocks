'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_led code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_led = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');


    Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['zum_led_setups']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat
    });

    var code = JST['zum_led']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat
    });

    return code;
};

/**
 * zum_led block definition
 * @type {Object}
 */
Blockly.Blocks.zum_led = {
    category: RoboBlocks.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'led'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/zum_led',
    /**
    * zum_led initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.LANG_ZUM_LED)
            .appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
            .appendField(RoboBlocks.LANG_ZUM_LED_PIN);
        this.appendDummyInput()
            .appendField('state')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.LANG_ZUM_LED_ON, 'HIGH'],
                [RoboBlocks.LANG_ZUM_LED_OFF, 'LOW']
            ]), 'STAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_ZUM_LED_TOOLTIP);
    }
};
