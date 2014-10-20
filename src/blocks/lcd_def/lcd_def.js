'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_def code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_def = function() {
    Blockly.Arduino.definitions_['define_softwareserial'] = JST['lcd_def_definitions']({});
    Blockly.Arduino.setups_['setup_bluetooth_']= JST['lcd_def_setups']({});
    return '';
};

/**
 * lcd_def block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_def = {
    category: RoboBlocks.LANG_CATEGORY_LCD,
    tags: ['bq', 'bluetooth'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/lcd_def',
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_LCD_DEF)
            .appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));


        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_LCD_DEF_TOOLTIP);
    }
};
