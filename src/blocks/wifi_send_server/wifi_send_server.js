'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_send_server code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_send_server = function() {
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['wifi_send_server']({
        'data': data
    });
    Blockly.Arduino.definitions_['declare_wifi_send_function'] = JST['wifi_send_server_declare_function']({});

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_send_server block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_send_server = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('DATA').setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER_DATA')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER_TOOLTIP'));
    }
};
