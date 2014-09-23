'use strict';
/* global Blockly, JST */
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
	category: Blockly.LANG_CATEGORY_ADVANCED,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_highlow',
	 /**
	  * inout_highlow initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ADVANCED);
		this.appendDummyInput('')
			.appendField(new Blockly.FieldDropdown([
				['HIGH', 'HIGH'],
				['LOW', 'LOW']
			]), 'BOOL');
		this.setOutput(true, Boolean);
		this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP_1);
	}
};
