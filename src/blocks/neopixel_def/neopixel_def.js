'use strict';
/* global Blockly, JST, RoboBlocks, profiles */
/* jshint sub:true */
/**
 * neopixel_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.neopixel_def = function() {
	var n_leds = Blockly.Arduino.valueToCode(this, 'N_LEDS', Blockly.Arduino.ORDER_ATOMIC) || '';
    var pin = this.getFieldValue('PIN') || '';
	var type = this.getFieldValue('TYPE') || '';
	Blockly.Arduino.definitions_['include_neopixel'] = JST['neopixel_def_include']({});
	var code = '';
	
    var a=RoboBlocks.findPinMode(n_leds);
	code=a['code'];
    n_leds=a['pin'];
	
	if (RoboBlocks.isVariable(pin)) {
        code += JST['neopixel_def_setups']({
			'pin': pin,
			'n_leds': n_leds,
			'type': type
        });
    } else {
        Blockly.Arduino.setups_['setups_neopixel_def_' + pin] = JST['neopixel_def_setups']({
			'pin': pin,
			'n_leds': n_leds,
			'type': type
        });
    }
	
    return '';

};


/**
 * neopixel_def block definition
 * @type {Object}
 */
Blockly.Blocks.neopixel_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_NEOPIXEL'),
    tags: ['neopixel'],
    helpUrl: RoboBlocks.URL_NEOPIXEL,
    /**
    * neopixel_def initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_NEOPIXEL);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_DEF'));
        
        this.appendValueInput('N_LEDS')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_N_LEDS'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_PIN'))
            .appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN')
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_NEOPIXEL_TYPE'))
            .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_NEOPIXEL_TYPE_RGB_KHZ400') || 'RGB-KHZ400', 'NEO_RGB + NEO_KHZ400'],
            [RoboBlocks.locales.getKey('LANG_NEOPIXEL_TYPE_RGB_KHZ800') || 'RGB-KHZ800', 'NEO_RGB + NEO_KHZ800'],
            [RoboBlocks.locales.getKey('LANG_NEOPIXEL_TYPE_GRB_KHZ400') || 'GRB-KHZ400', 'NEO_GRB + NEO_KHZ400'],
            [RoboBlocks.locales.getKey('LANG_NEOPIXEL_TYPE_GRB_KHZ800') || 'GRB-KHZ800', 'NEO_GRB + NEO_KHZ800']
        ]), 'TYPE')
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_NEOPIXEL_DEF_TOOLTIP'));
    }
};

