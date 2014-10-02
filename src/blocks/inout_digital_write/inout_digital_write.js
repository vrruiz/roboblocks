'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * inout_digital_write code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_digital_write = function() {

	var dropdown_pin = this.getFieldValue('PIN');
	var dropdown_stat = this.getFieldValue('STAT');

	Blockly.Arduino.setups_['setup_green_digital_write_13'] = JST['inout_digital_write_setups']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});

	var code = JST['inout_digital_write']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});

	return code;
};

/**
 * inout_digital_write block definition
 * @type {Object}
 */
Blockly.Blocks.inout_digital_write = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_digital_write',
	 /**
	  * inout_digital_write initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('DigitalWrite')
			.appendField('PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
			.appendField('state')
			.appendField(new Blockly.FieldDropdown([
				['HIGH', 'HIGH'],
				['LOW', 'LOW']
			]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('bq digital_write');
	}
};
