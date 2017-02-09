'use strict';
/* global Blockly, JST, RoboBlocks, profiles */
/* jshint sub:true */

/**
 * neopixel_color code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.neopixel_color = function() {
    var pin = this.getFieldValue('PIN') || '';
	var pixel = Blockly.Arduino.valueToCode(this, 'PIXEL', Blockly.Arduino.ORDER_ATOMIC) || '';
	var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '';
	var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '';
	var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '';
	var code = '';
    
    var a=RoboBlocks.findPinMode(pixel);
	code=a['code'];
    pixel=a['pin'];
	
	a=RoboBlocks.findPinMode(red);
    code=a['code'];
    red=a['pin'];
	
	a=RoboBlocks.findPinMode(green);
    code=a['code'];
    green=a['pin'];
	
	a=RoboBlocks.findPinMode(blue);
    code=a['code'];
    blue=a['pin'];
	
    code += JST['neopixel_color']({
		'pin': pin,
        'pixel': pixel,
		'red': red,
		'green': green,
		'blue': blue
    });
	
    return code;

};


/**
 * neopixel_color block definition
 * @type {Object}
 */
Blockly.Blocks.neopixel_color = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_NEOPIXEL'),
    tags: ['neopixel'],
    helpUrl: RoboBlocks.URL_NEOPIXEL,
    /**
    * neopixel_color initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_NEOPIXEL);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_COLOR'));
        
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_PIN'))
            .appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN')
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIXEL')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_PIXEL'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('RED')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_RED'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('GREEN')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_GREEN'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('BLUE')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_BLUE'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_NEOPIXEL_TOOLTIP'));
    }
};

