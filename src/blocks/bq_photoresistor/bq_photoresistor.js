'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_photoresistor code generation
 * @return {String} Code generated with block parameters
 */
 

//        var code = 'analogRead(' + dropdown_pin + ')';

Blockly.Arduino.bq_photoresistor = function() {
	var dropdown_pin = this.getFieldValue('PIN');

	var code = JST['bq_photoresistor']({
		'dropdown_pin': dropdown_pin
	});

//	code=code.substring(0,code.length-1);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * bq_photoresistor block definition
 * @type {Object}
 */
Blockly.Blocks.bq_photoresistor = {
	category: Blockly.LANG_CATEGORY_BQ,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_photoresistor',
	 /**
	  * bq_photoresistor initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_BQ);
		this.appendDummyInput('')
			.appendField('Photoresistor')
				.appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
				.appendField('PIN#')
				.appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
		this.setOutput(true, Number);
		this.setTooltip('Output the value of the photoresistor.');
	}
};
