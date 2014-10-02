'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * inout_analog_write code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_analog_write = function() {

	var dropdown_pin = this.getFieldValue('PIN') || 1;
	var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC)||100;

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
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_analog_write',
	 /**
	  * inout_analog_write initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('AnalogWrite PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN');
		this.appendValueInput('NUM', Number)
			.appendField('value')
			.setCheck(Number);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Write analog value between 0 and 255 to a specific Port');
	}
};
