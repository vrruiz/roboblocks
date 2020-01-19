'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_receive_server code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_receive_server = function() {
    var timeout = this.getFieldValue('TIMEOUT');
    var code = JST['wifi_receive_server']({});
    Blockly.Arduino.definitions_['declare_function_receive_server'] = JST['wifi_receive_server_declare']({
        'timeout': timeout
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_receive_server block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_receive_server = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TIMEOUT')).appendField(new Blockly.FieldTextInput('1000', Blockly.Blocks.math_number.validator), 'TIMEOUT');
        this.setInputsInline(false);
        this.setOutput(true, String);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TOOLTIP'));
    }
};
