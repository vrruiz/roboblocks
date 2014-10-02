'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_piezo_buzzerav code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.zum_piezo_buzzerav = function() {

	var dropdown_pin = this.getFieldValue('PIN');
	var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC) || '261';
	var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC) || '100';

	var code = JST['zum_piezo_buzzerav']({
		'dropdown_pin': dropdown_pin,
		'Buzztone': Buzztone,
		'delay_time': delay_time
	});

	return code;
};


/**
 * zum_piezo_buzzerav block definition
 * @type {Object}
 */
Blockly.Blocks.zum_piezo_buzzerav = {
	category: Blockly.LANG_CATEGORY_ZUM,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_piezo_buzzerav',
	 /**
	  * zum_piezo_buzzerav initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ZUM);
		this.appendDummyInput('')
			.appendField('Advanced Buzzer')
			.appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
			.appendField('PIN#')
			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

		this.appendValueInput('TONE', Number)
			.setCheck(Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('TONE');

		this.appendValueInput('DURA', Number)
			.setCheck(Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('Duration');

		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Piezo Buzzer Advanced');
	}
};
