'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_setBacklight code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_setBacklight = function() {
    // Blockly.Arduino.definitions_['define_softwareserial'] = JST['lcd_setBacklight_definitions']({});
    // Blockly.Arduino.setups_['setup_bluetooth_']= JST['lcd_setBacklight_setups']({});
    var state=this.getFieldValue('STATE');
    var code = JST ['lcd_setBacklight']({
        'state': state
    });
    return code;
};

/**
 * lcd_setBacklight block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_setBacklight = {
    category: RoboBlocks.LANG_CATEGORY_LCD,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/lcd_setBacklight',
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput('STATE')
            .appendField(RoboBlocks.LANG_LCD_SETBACKLIGHT)
            .appendField(new Blockly.FieldDropdown([['LOW','LOW'],['HIGH','HIGH']]))
            .appendField(RoboBlocks.LANG_LCD_SETBACKLIGHT_CLOSE);
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));


        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_LCD_SETBACKLIGHT_TOOLTIP);
    }
};
