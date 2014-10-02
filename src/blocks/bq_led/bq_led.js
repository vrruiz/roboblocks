'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_led code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.bq_led = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var dropdown_stat = this.getFieldValue('STAT');


	Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['bq_led_setups']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});

	var code = JST['bq_led']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});

	return code;
};

/**
 * bq_led block definition
 * @type {Object}
 */



Blockly.Blocks.bq_led = {
	category: Blockly.LANG_CATEGORY_BQ,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_led',
	 /**
	  * bq_led initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_BQ);
		this.appendDummyInput('')
			.appendField('LED')
			.appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
			.appendField('PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
			.appendField('state')
			.appendField(new Blockly.FieldDropdown([
				['ON', 'HIGH'],
				['OFF', 'LOW']
			]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('bq LED');
	}
};
