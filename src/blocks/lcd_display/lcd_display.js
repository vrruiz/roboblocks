
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_display code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_display = function() {
    var code= JST ['lcd_display']({});
    return code;
};

/**
 * lcd_display block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_display = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_LCD_DISPLAY'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DISPLAY_TOOLTIP'));
    }
};
