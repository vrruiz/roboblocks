'use strict';
/* global Blockly, profiles, JST */
/* jshint sub:true */

/**
 * serial_println code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_println = function() {
	var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_serial_println'] = JST['serial_println_setups']({
		'bitrate': profiles.default.serial
	});
	var code = JST['serial_println']({
		'content': content
	});

	return code;
};

/**
 * serial_println block definition
 * @type {Object}
 */
Blockly.Blocks.serial_println = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
	 /**
	  * serial_println initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendValueInput('CONTENT', String)
			.appendField('Serial Println');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Prints data to the console/serial port as human-readable ASCII text and add CR.');
	}
};
