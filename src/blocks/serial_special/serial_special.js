'use strict';
/* global Blockly, JST */
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
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
	 /**
	  * serial_special initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField('Special Chars')
			.appendField(new Blockly.FieldDropdown([
				['Tab', '\\t'],
				['Carriage Return', '\\r'],
				['Line Feed', '\\n']
			]), 'CHAR');
		this.setOutput(true, String);
		this.setTooltip('Write special Chars');
	}
};
