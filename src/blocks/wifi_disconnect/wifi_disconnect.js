'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_disconnect code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_disconnect = function() {
    var code = JST['wifi_disconnect']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_disconnect block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_disconnect = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_DISCONNECT'));
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_DISCONNECT_TOOLTIP'));
    }
};
