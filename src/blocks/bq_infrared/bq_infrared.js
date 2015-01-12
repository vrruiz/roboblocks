'use strict';
/* global Blockly, options,  JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_infrared code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_infrared = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    dropdown_pin = dropdown_pin.split(';\n');
    for (var j in dropdown_pin) {
        if (dropdown_pin[j].search('pinMode') >= 0) {
            code += dropdown_pin[j] + ';\n';
        } else {
            dropdown_pin = dropdown_pin[j];
        }
    }
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['bq_infrared_setups']({
            'dropdown_pin': dropdown_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['bq_infrared_setups']({
            'dropdown_pin': dropdown_pin
        });
    }
    code += JST['bq_infrared']({
        'dropdown_pin': dropdown_pin
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * bq_infrared block definition
 * @type {Object}
 */
Blockly.Blocks.bq_infrared = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'sensor infrarrojo'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_infrared',
    /**
     * bq_infrared initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED')).appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_PIN')).setCheck(Number);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_TOOLTIP'));
    }
};