'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * advanced_conversion code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.advanced_conversion = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var convertion=this.getFieldValue('CONV');
    var code = JST['advanced_conversion']({
        'value_num' : value_num,
        'convertion' : convertion
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * advanced_conversion block definition
 * @type {Object}
 */
Blockly.Blocks.advanced_conversion = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/advanced_conversion',
    /**
     * advanced_conversion initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput('')
        .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_CONVERT'))
        .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_DECIMAL')||'DEC', 'DEC'],
            [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_HEXADECIMAL')||'HEX', 'HEX'],
            [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_OCTAL')||'OCT', 'OCT'],
            [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_BINARY')||'BIN', 'BIN']
        ]), 'CONV');
        this.appendValueInput('NUM', Number)
            .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_VALUE'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_TOOLTIP'));
    }
};
