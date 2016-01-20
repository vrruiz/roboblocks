'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * lcd_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.lcd_def = function() {
    var lcd_pins = {};
    lcd_pins['lcd_1'] = this.getFieldValue('LCD_1');
    lcd_pins['lcd_2'] = this.getFieldValue('LCD_2');
    lcd_pins['lcd_3'] = this.getFieldValue('LCD_3');
    lcd_pins['lcd_4'] = this.getFieldValue('LCD_4');
    lcd_pins['lcd_5'] = this.getFieldValue('LCD_5');
    lcd_pins['lcd_6'] = this.getFieldValue('LCD_6');
    Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
    Blockly.Arduino.definitions_['declare_var_LCD'] = JST['lcd_def_declare'](lcd_pins);
    Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
    return '';
};
/**
 * lcd_def block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
     * lcd_slave initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF')).appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_LCD_PINS'))
            .appendField(new Blockly.FieldTextInput('11'), 'LCD_1')
            .appendField(new Blockly.FieldTextInput('12'), 'LCD_2')
            .appendField(new Blockly.FieldTextInput('3'), 'LCD_3')
            .appendField(new Blockly.FieldTextInput('4'), 'LCD_4')
            .appendField(new Blockly.FieldTextInput('5'), 'LCD_5')
            .appendField(new Blockly.FieldTextInput('6'), 'LCD_6');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
    }
};
