'use strict';
/* global Blockly, JST, RoboBlocks */
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
	category: RoboBlocks.LANG_CATEGORY_ADVANCED,
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/serial_available',
	 /**
	  * serial_available initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
		this.appendDummyInput()
			.appendField(RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE);
		this.appendStatementInput('DO')
			.appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP);
	}
};
