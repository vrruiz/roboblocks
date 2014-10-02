'use strict';
/* global Blockly, JST */
/* jshint sub:true */

/**
 * inout_builtin_led code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.inout_builtin_led = function() {
	var dropdown_stat = this.getFieldValue('STAT');

	Blockly.Arduino.setups_['setup_green_led_13'] = JST['inout_builtin_led_setups']({});

	var code = JST['inout_builtin_led']({
		'dropdown_stat': dropdown_stat
	});

	return code;
};

/**
 * inout_builtin_led block definition
 * @type {Object}
 */
Blockly.Blocks.inout_builtin_led = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_builtin_led',
	 /**
	  * inout_builtin_led initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('BUILTIN LED')
//			.appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
//			.appendField('PIN#')
//			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
			.appendField('state')
			.appendField(new Blockly.FieldDropdown([
				['ON', 'HIGH'],
				['OFF', 'LOW']
			]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('bq LED');
	}
};
