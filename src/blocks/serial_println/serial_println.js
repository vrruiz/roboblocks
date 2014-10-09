'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
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
	category: RoboBlocks.LANG_CATEGORY_ADVANCED,
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/serial_println',
	 /**
	  * serial_println initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
		this.appendValueInput('CONTENT', String)
			.appendField(RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP);
	}
};
