
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_clear code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_clear = function() {
    var code= JST ['lcd_clear']({});
    return code;
};

/**
 * lcd_clear block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_clear = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_LCD_CLEAR'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_CLEAR_TOOLTIP'));
    }
};
