'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * inout_analog_write code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_analog_write = function() {

	var dropdown_pin = this.getFieldValue('PIN');
	var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.setups_['setup_green_analog_write_13'] = JST['inout_analog_write_setups']({
		'dropdown_pin': dropdown_pin,
		'value_num': value_num
	});

	var code = JST['inout_analog_write']({
		'dropdown_pin': dropdown_pin,
		'value_num': value_num
	});

	return code;
};


/**
 * inout_analog_write block definition
 * @type {Object}
 */
Blockly.Blocks.inout_analog_write = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/inout_analog_write',
	 /**
	  * inout_analog_write initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE'))
			.appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN');
		this.appendValueInput('NUM', Number)
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE'))
			.setCheck(Number);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP'));
	}
};
