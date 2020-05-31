
'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_nodisplay code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_nodisplay = function() {
    var code= JST ['lcd_nodisplay']({});
    return code;
};

/**
 * lcd_nodisplay block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_nodisplay = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_LCD_NODISPLAY'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_NODISPLAY_TOOLTIP'));
    }
};
