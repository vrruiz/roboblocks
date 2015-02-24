'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * lcd_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.lcd_def = function() {
    Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
    Blockly.Arduino.definitions_['declare_var_LCD'] = 'LiquidCrystal lcd(0);\n';
    Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
    return '';
};
/**
 * lcd_def block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['bq', 'lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
     * lcd_slave initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF')).appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_PINS'));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
    }
};