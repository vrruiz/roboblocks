'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_led code generation
 * @return {String} Code generated with block parameters
 */
 

Blockly.Arduino.zum_led = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var dropdown_stat = this.getFieldValue('STAT');
	

	Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['zum_led_setups']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});
	 
	var code = JST['zum_led']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat
	});

	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_led block definition
 * @type {Object}
 */
 


Blockly.Blocks.zum_led = {
	category: Blockly.LANG_CATEGORY_ZUM,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_led',
	 /**
	  * zum_led initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ZUM);
		this.appendDummyInput('')
			.appendField('LED')
			.appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
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
