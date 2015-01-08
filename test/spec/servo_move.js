/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.servo_move block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'servo_move');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servos[13];\n\n/***   Global variables   ***/\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n  servos[].attach();\n\n}\n\n\nvoid loop()\n{\n  servos[].write();\n  delay();\n\n}\n\n/***   Function definition   ***/\n' );
			});
		});
	});

}).call( this );
