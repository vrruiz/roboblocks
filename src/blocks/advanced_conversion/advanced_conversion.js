'use strict';
/* global Blockly, JST */
/* jshint sub:true */

/**
 * advanced_conversion code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.advanced_conversion = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '10';
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
    category: Blockly.LANG_CATEGORY_ADVANCED,
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
    /**
     * advanced_conversion initialization
     */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_ADVANCED);
        this.appendDummyInput('')
        .appendField('Convert')
        .appendField(new Blockly.FieldDropdown([
            ['Decimal', 'DEC'],
            ['Hexadecimal', 'HEX'],
            ['Octal', 'OCT'],
            ['Binary', 'BIN']
        ]), 'CONV');
        this.appendValueInput('NUM', Number)
        .appendField('value')
        .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip('Base convert a number');
    }
};
