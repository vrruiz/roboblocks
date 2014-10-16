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
	category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/serial_special',
	 /**
	  * serial_special initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput('')
			.appendField(RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL)
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TAB, '\\t'],
				[RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN, '\\r'],
				[RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED, '\\n']
			]), 'CHAR');
		this.setOutput(true, String);
		this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP);
	}
};
