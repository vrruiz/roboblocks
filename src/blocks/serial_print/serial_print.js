'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * serial_print code generation
 * @return {String} Code generated with block parameters
 */
 

Blockly.Arduino.serial_print = function() {
	var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.setups_['setup_serial_print'] = JST['serial_print_setups']({
		'bitrate': profiles.default.serial
	});
	var code = JST['serial_print']({
		'content': content
	});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * serial_print block definition
 * @type {Object}
 */
Blockly.Blocks.serial_print = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_print',
	 /**
	  * serial_print initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendValueInput('CONTENT', String)
			.appendField('Serial Print');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
	}
};
