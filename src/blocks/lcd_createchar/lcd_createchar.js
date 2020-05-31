'use strict';
/* global Blockly, JST, RoboBlocks */

/**
  * lcd_createchar code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.lcd_createchar = function() {
    var index = this.getFieldValue('INDEX');
    var row1 = this.getFieldValue('ROW1');
    var row2 = this.getFieldValue('ROW2');
    var row3 = this.getFieldValue('ROW3');
    var row4 = this.getFieldValue('ROW4');
    var row5 = this.getFieldValue('ROW5');
    var row6 = this.getFieldValue('ROW6');
    var row7 = this.getFieldValue('ROW7');
    var row8 = this.getFieldValue('ROW8');
    Blockly.Arduino.definitions_['declare_lcd_createchar'] = JST ['lcd_createchar_declare']({
        'index': index
    });
    var code = JST ['lcd_createchar']({
        'index': index,
        'row1': row1,
        'row2': row2,
        'row3': row3,
        'row4': row4,
        'row5': row5,
        'row6': row6,
        'row7': row7,
        'row8': row8
    });
    //return [code, Blockly.Arduino.ORDER_ATOMIC];
    return code;
};

Blockly.Blocks.lcd_createchar = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    helpUrl: RoboBlocks.URL_LCD,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR'))
            .appendField(new Blockly.FieldDropdown([['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7']]),'INDEX');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW1'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW1');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW2'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW2');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW3'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW3');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW4'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW4');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW5'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW5');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW6'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW6');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW7'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW7');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_ROW8'))
            .appendField(new Blockly.FieldTextInput('00000'), 'ROW8');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(false);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_TOOLTIP'));
    },
    onchange: function() {
        var row,error = false;
        for (var i = 1;i < 9;i++) {
            row = this.getFieldValue('ROW'+i);
            if (row.length !== 5) {
                error = true;
            } else {
                for (var j = 0;j < 5;j++) {
                    if (row.charAt(j)!=='0' && row.charAt(j)!=='1') {
                        error = true;
                    }
                }
            }
        }
        if (error === true) {
            this.setWarningText(RoboBlocks.locales.getKey('LANG_LCD_CREATECHAR_LENGTH'));
        } else {
            this.setWarningText(null);
        }
    }
};
