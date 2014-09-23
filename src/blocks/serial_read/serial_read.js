'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * serial_read code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.serial_read = function() {

	Blockly.Arduino.setups_['setup_serial_read'] = JST['serial_read_setups']({
		'bitrate': profiles.default.serial
	});
	var code = JST['serial_read']({});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * serial_read block definition
 * @type {Object}
 */
Blockly.Blocks.serial_read = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_read',
	 /**
	  * serial_read initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('Serial Read');
		this.setOutput(true, String);
		this.setTooltip('Reads incoming serial data from serial port as human-readable ASCII text.');
	}
};
