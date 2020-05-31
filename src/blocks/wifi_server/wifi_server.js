'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_server code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_server = function() {
    var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['wifi_server']({
        'port': port
    });
    Blockly.Arduino.setups_['setup_wifi_server'] = JST['wifi_server_setups']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_server block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_server = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('PORT',String).setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SERVER_PORT')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SERVER_TOOLTIP'));
    }
};
