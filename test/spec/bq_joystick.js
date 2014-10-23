/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_joystick block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_joystick');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'int * readJoystick_pointer_;\n\nint * readJoystick_(){\n  readJoystick_pointer_[0]=analogRead();\n  readJoystick_pointer_[1]=analogRead();\n  readJoystick_pointer_[2]=digitalRead();\n}\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  readJoystick();\n\n}');
			});
		});
	});

}).call( this );
