'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * serial_available code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.serial_available = function() {
	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	branch=branch.replace(/&quot;/g,'"');
    // branch=branch.replace(/&amp;/g, '');

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
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
	helpUrl: RoboBlocks.URL_SERIE,
	tags: ['serial'],

	 /**
	  * serial_available initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput()
			.appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE'));
		this.appendStatementInput('DO')
			.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP'));
	}
};
