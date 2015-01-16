/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_joystick block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_joystick');

				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\nint _internal_readJoystick_array__[3];\n\n/***   Function declaration   ***/\nint * readJoystick__();\n\nvoid setup()\n{\n  pinMode(,INPUT_PULLUP);\n\n}\n\n\nvoid loop()\n{\n  readJoystick__();\n\n}\n\n/***   Function definition   ***/\nint * readJoystick__(){\n  _internal_readJoystick_array__[0]=analogRead();\n  _internal_readJoystick_array__[1]=analogRead();\n  _internal_readJoystick_array__[2]=digitalRead();\n  return _internal_readJoystick_array__;\n}');
			});
		});
	});

}).call( this );
