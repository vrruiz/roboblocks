'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * serial_special code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_special = function() {
	var char = this.getFieldValue('CHAR');
	var code = JST['serial_special']({
		'char': char
	});
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * serial_special block definition
 * @type {Object}
 */
Blockly.Blocks.serial_special = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
	helpUrl: RoboBlocks.URL_SERIE,
	tags: ['serial'],

	 /**
	  * serial_special initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL'))
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TAB')||'TAB', '\\t'],
				[RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN')||'CARRIAGE RETURN', '\\r'],
				[RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED')||'LINE FEED', '\\n']
			]), 'CHAR');
		this.setOutput(true, String);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP'));
	}
};
