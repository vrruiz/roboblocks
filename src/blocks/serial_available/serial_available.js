'use strict';
/* global Blockly, JST */
/* jshint sub:true */

/**
 * serial_available code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_available = function() {
	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var code = JST['serial_available']({
		'branch' : branch
	});
	return code;
};

/**
 * serial_available block definition
 * @type {Object}
 */
Blockly.Blocks.serial_available = {
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
	 /**
	  * serial_available initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput()
			.appendField('Serial Available');
		this.appendStatementInput('DO')
			.appendField(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.LANG_CONTROLS_REPEAT_TOOLTIP);
	}
};
