'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * text_char_special code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.text_char_special = function() {
	var char = this.getFieldValue('CHAR');
	var code = JST['text_char_special']({
		'char': char
	});
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * text_char_special block definition
 * @type {Object}
 */
Blockly.Blocks.text_char_special = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
	helpUrl: RoboBlocks.URL_TEXT,
	tags: ['text'],

	 /**
	  * text_char_special initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL'))
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_TAB')||'TAB', '\\t'],
				[RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_CARRIAGE_RETURN')||'CARRIAGE RETURN', '\\r'],
				[RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_LINE_FEED')||'LINE FEED', '\\n']
			]), 'CHAR');
		this.setOutput(true, String);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_TOOLTIP'));
	}
};
