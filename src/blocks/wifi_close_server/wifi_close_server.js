'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_close_server code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_close_server = function() {
    var code = JST['wifi_close_server']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_close_server block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_close_server = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_SERVER'));
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_SERVER_TOOLTIP'));
    }
};
