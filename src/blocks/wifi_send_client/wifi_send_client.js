'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_send_client code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_send_client = function() {
    var id_client = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC);
    var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['wifi_send_client']({
        'id_client': id_client,
        'data': data
    });
    Blockly.Arduino.definitions_['declare_wifi_send_client'] = JST['wifi_send_client_declare']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_send_client block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_send_client = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('ID').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_ID')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('DATA',String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_DATA')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_TOOLTIP'));
    }
};
