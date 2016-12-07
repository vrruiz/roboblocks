'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * interrupt_state code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.interrupt_state = function() {
	var dropdown_stat = this.getFieldValue('STAT');
	var code = '';

	if (dropdown_stat==='ENABLED') {
		code = JST['interrupt_state_enabled']({});
	} else {
		code = JST['interrupt_state_disabled']({});
	}

	return code;
};

/**
 * interrupt_state block definition
 * @type {Object}
 */
Blockly.Blocks.interrupt_state = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'),
	helpUrl: RoboBlocks.URL_INTERRUPTS,
	 /**
	  * inout_builtin_led initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
		this.appendDummyInput('')
			.appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE'))
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_ENABLED')||'ENABLED' , 'ENABLED'],
				[RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_DISABLED')||'DIABLED' , 'DISABLED']
			]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_TOOLTIP'));
	}
};
