'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * serial_parseint code generation
 * @return {Number} First valid (long) integer number from the serial buffer
 */

Blockly.Arduino.serial_parseint = function() {
    Blockly.Arduino.setups_['setup_serial'] = JST['serial_parseint_setups']({
    	'bitrate': profiles.default.serial
    });
    var code = 'Serial.parseInt()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * serial_parseint block definition
 * @type {Object}
 */
Blockly.Blocks.serial_parseint = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
	helpUrl: RoboBlocks.URL_SERIE,
	tags: ['serial'],

    /**
	  * serial_paraseint initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT'));
		this.setOutput(true, Number);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP'));
	}
};
