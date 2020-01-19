'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_getip code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_getip = function() {
    var code = JST['wifi_getip']({});
    Blockly.Arduino.definitions_['define_wifi_getip_function'] = JST['wifi_getip_definitions_getipaddress']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_getip block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_getip = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_GETIP'));
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_GETIP_TOOLTIP'));
    }
};
