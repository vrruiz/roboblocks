'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * inout_analog_read code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_analog_read = function() {
	var dropdown_pin = this.getFieldValue('PIN');

	Blockly.Arduino.setups_['setup_green_analog_read'+dropdown_pin] = JST['inout_analog_read_setups']({
		'dropdown_pin': dropdown_pin,
	});
	 
	var code = JST['inout_analog_read']({
		'dropdown_pin': dropdown_pin,
	});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * inout_analog_read block definition
 * @type {Object}
 */
Blockly.Blocks.inout_analog_read = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_analog_read',
	 /**
	  * inout_analog_read initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('AnalogRead PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
		this.setOutput(true, Boolean);
		this.setTooltip('Reads the value from a specified digital pin');
	}
};
