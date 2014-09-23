'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_bat code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_bat = function() {
	var red_pin = this.getFieldValue('RED PIN')||1;
	var blue_pin = this.getFieldValue('BLUE PIN')||2;

	Blockly.Arduino.setups_['setup_bq_bat_']=JST['bq_bat_setups']({
		'red_pin': red_pin,
		'blue_pin': blue_pin
	});

	Blockly.Arduino.definitions_['define_bq_bat_' + red_pin] = JST['bq_bat_definitions']({
		'red_pin': red_pin,
		'blue_pin': blue_pin
	});

	var code = JST['bq_bat']({
		'red_pin': red_pin
	});
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_bat block definition
 * @type {Object}
 */
 
Blockly.Blocks.bq_bat = {
	category: Blockly.LANG_CATEGORY_BQ,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_bat',
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_BQ);
		this.appendDummyInput('')
			.appendField('BAT')
			.appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
		this.appendDummyInput('')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('RED PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');
		this.appendDummyInput('')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('BLUE PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');

		this.setOutput(true, Number);
		this.setTooltip('Output the measured distance');
	}
};
