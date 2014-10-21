'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_potentiometer code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_potentiometer = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['bq_potentiometer']({
        'dropdown_pin': dropdown_pin
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_potentiometer block definition
 * @type {Object}
 */
Blockly.Blocks.bq_potentiometer = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'potentiometer'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_potentiometer',
    /**
    * bq_potentiometer initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER'))
            .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_PIN'))
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_TOOLTIP'));
    }
};
