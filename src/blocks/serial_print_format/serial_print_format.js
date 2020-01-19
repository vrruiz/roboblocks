'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */
/**
 * serial_print_format code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_print_format = function() {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
    var varFormat = this.getFieldValue('FORMAT');
    var code = '';
    var a = RoboBlocks.findPinMode(content);
    code += a['code'];
    content = a['pin'];
    Blockly.Arduino.setups_['setup_serial'] = JST['serial_print_format_setups']({
        'bitrate': profiles.
        default.serial
    });
    code += JST['serial_print_format']({
        'content': content,
        'format': varFormat
    });
    return code;
};
/**
 * serial_print_format block definition
 * @type {Object}
 */
Blockly.Blocks.serial_print_format = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    helpUrl: RoboBlocks.URL_SERIE,
    tags: ['serial'],
    /**
     * serial_print_format initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT')).
            appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_1'), 'BIN'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_2'), 'OCT'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_3'), 'DEC'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_4'), 'HEX'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_5'), '0'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_6'), '1'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_7'), '2'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_8'), '3'],
                [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_9'), '4'],
            ]), 'FORMAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP'));
    }
};