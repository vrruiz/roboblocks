'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_client code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_client = function() {
    var ip_address = Blockly.Arduino.valueToCode(this, 'IP', Blockly.Arduino.ORDER_ATOMIC);
    var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['wifi_client']({
        'ip_address': ip_address,
        'port': port
    });
    Blockly.Arduino.setups_['setup_wifi_client'] = JST['wifi_client_setups']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_client block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_client = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('IP',String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_IP')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PORT').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_PORT')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_TOOLTIP'));
    }
};
