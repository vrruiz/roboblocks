'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_receive_client code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_receive_client = function() {
    var timeout = this.getFieldValue('TIMEOUT');
    var code = JST['wifi_receive_client']({});
    Blockly.Arduino.definitions_['declare_function_receive_client'] = JST['wifi_receive_client_declare']({
        'timeout': timeout
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_receive_client block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_receive_client = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TIMEOUT')).appendField(new Blockly.FieldTextInput('1000', Blockly.Blocks.math_number.validator), 'TIMEOUT');
        this.setInputsInline(false);
        this.setOutput(true, String);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_CLIENT_TOOLTIP'));
    }
};
