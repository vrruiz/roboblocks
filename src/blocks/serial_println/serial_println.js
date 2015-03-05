'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */
/**
 * serial_println code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_println = function() {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a = RoboBlocks.findPinMode(content);
    code += a['code'];
    content = a['pin'];
    Blockly.Arduino.setups_['setup_serial'] = JST['serial_println_setups']({
        'bitrate': profiles.
        default.serial
    });
    code += JST['serial_println']({
        'content': content
    });
    return code;
};
/**
 * serial_println block definition
 * @type {Object}
 */
Blockly.Blocks.serial_println = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    helpUrl: RoboBlocks.URL_SERIE,
    tags: ['serial'],
    /**
     * serial_println initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP'));
    }
};