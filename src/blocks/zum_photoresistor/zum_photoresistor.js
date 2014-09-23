'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_photoresistor code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_photoresistor = function() {
	var dropdown_pin = this.getFieldValue('PIN');

	var code = JST['zum_photoresistor']({
		'dropdown_pin': dropdown_pin
	});

//	code=code.substring(0,code.length-1);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * zum_photoresistor block definition
 * @type {Object}
 */
Blockly.Blocks.zum_photoresistor = {
	category: Blockly.LANG_CATEGORY_ZUM,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_photoresistor',
	 /**
	  * zum_photoresistor initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ZUM);
		this.appendDummyInput('')
			.appendField('Photoresistor')
			.appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
				.appendField('PIN#')
				.appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
		this.setOutput(true, Number);
		this.setTooltip('Output the value of the photoresistor.');
	}
};
