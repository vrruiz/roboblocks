'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_lcd_i2c code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_lcd_i2c = function() {
    Blockly.Arduino.definitions_['define_lcd_i2c'] = JST['lcd_def_i2c_definitions']();
    Blockly.Arduino.setups_['setup_lcd_i2c_'] = JST['lcd_def_i2c_setups']();

    return '';
};

/**
 * zum_lcd_i2c block definition
 * @type {Object}
 */
Blockly.Blocks.zum_lcd_i2c = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD_I2C,
    /**
     * lcd_slave initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_I2C'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/lcd.png',
                208 * options.zoom,
                100 * options.zoom));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_I2C_TOOLTIP'));
    }
};
