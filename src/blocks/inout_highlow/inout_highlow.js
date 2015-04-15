'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * inout_highlow code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_highlow = function() {
	var bool_value = this.getFieldValue('BOOL');

	var code = JST['inout_highlow']({
		'bool_value': bool_value,
	});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * inout_highlow block definition
 * @type {Object}
 */
Blockly.Blocks.inout_highlow = {
	category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
	helpUrl: RoboBlocks.URL_PIN_FUNC,
	 /**
	  * inout_highlow initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField(new Blockly.FieldDropdown([
				[RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_HIGH')||'HIGH', 'HIGH'],
				[RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_LOW')||'LOW', 'LOW']
			]), 'BOOL');
		this.setOutput(true, Boolean);
		this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_TOOLTIP'));
	}
};
