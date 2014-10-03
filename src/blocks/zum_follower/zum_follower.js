'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * zum_follower code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_follower = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var NextPIN = this.getFieldValue('PIN2');
	var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
	var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');
  
	Blockly.Arduino.setups_['setup_follower_' + dropdown_pin] = JST['zum_follower_setups']({
		'dropdown_pin': dropdown_pin,
		'NextPIN' : NextPIN
	});
	
	var code = JST['zum_follower']({
		'dropdown_pin': dropdown_pin,
		'NextPIN' : NextPIN,
		'code_btn1' : code_btn1,
		'code_btn2' : code_btn2
	});

//	code=code.substring(0,code.length-1);
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_follower block definition
 * @type {Object}
 */
Blockly.Blocks.zum_follower = {
	category: Blockly.LANG_CATEGORY_ZUM,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_follower',
	/**
	* zum_follower initialization
	*/
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_ZUM);
		this.appendDummyInput('')
			.appendField('Infrared Sensor')
			.appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203*options.zoom, 165*options.zoom));
		this.appendDummyInput('')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('PIN LEFT#')
			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
		this.appendDummyInput('')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('PIN RIGHT#')
			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN2');
		this.appendStatementInput('SENS1')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('Left');
		this.appendStatementInput('SENS2')
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField('Right');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('bq Infrared Sensor');
	}
};
