'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * inout_digital_write code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_digital_write = function() {

	var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/inout_digital_write',
	 /**
	  * inout_digital_write initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
		this.appendValueInput('PIN')
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE'))
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
		this.appendDummyInput()
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE'))
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH'), 'HIGH'],
				[RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW'), 'LOW']
			]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setInputsInline(true);
		this.setNextStatement(true, null);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
	}
};
