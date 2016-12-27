'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_lcd_i2c code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_lcd_i2c = function() {
    Blockly.Arduino.definitions_['define_lcd_i2c'] = '\\
        #include <Wire.h>\n\\
        #include <LiquidCrystal_I2C.h>\n\\
        LiquidCrystal_I2C lcd(0x27, 16, 2);\n';

    var temperature  = Blockly.Arduino.valueToCode(this, 'TEMPERATURE', Blockly.Arduino.ORDER_ATOMIC);
    var altitude  = Blockly.Arduino.valueToCode(this, 'ALTITUDE', Blockly.Arduino.ORDER_ATOMIC);
    var pressure  = Blockly.Arduino.valueToCode(this, 'PRESSURE', Blockly.Arduino.ORDER_ATOMIC);

    var code = '';

    Blockly.Arduino.setups_['setup_lcd_i2c_'] = JST['zum_lcd_i2c_setups']();

    code += JST['zum_lcd_i2c']({
        'temperature': temperature,
        'altitude': altitude,
        'pressure': pressure,
    });

    return code;
};
/**
 * zum_lcd_i2c block definition
 * @type {Object}
 */
Blockly.Blocks.zum_lcd_i2c = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['lcd_i2c'],
    helpUrl: RoboBlocks.URL_LCD_I2C,
    /**
     * zum_lcd_i2c initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LCD_I2C'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/lcd.png',
                208 * options.zoom,
                140 * options.zoom));
        this.appendValueInput('TEMPERATURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LCD_I2C_TEMPERATURE'));
        this.appendValueInput('ALTITUDE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LCD_I2C_ALTITUDE'));
        this.appendValueInput('PRESSURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LCD_I2C_PRESSURE'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_LCD_I2C_TOOLTIP'));
    }
};
