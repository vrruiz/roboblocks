'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_close_client code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_close_client = function() {
    var code = JST['wifi_close_client']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_close_client block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_close_client = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_CLIENT'));
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_CLIENT_TOOLTIP'));
    }
};
