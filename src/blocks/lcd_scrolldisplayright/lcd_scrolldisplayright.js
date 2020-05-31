
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_scrolldisplayright code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_scrolldisplayright = function() {
    var code= JST ['lcd_scrolldisplayright']({});
    return code;
};

/**
 * lcd_scrolldisplayright block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_scrolldisplayright = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYRIGHT'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP'));
    }
};
