/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.servo_cont block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'servo_cont');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servos[13];\n\n/***   Global variables   ***/\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n  servos[].attach();\n\n}\n\n\nvoid loop()\n{\n  servos[].write(0);\n  delay();\n\n}\n\n/***   Function definition   ***/\n');
			});
		});
	});

}).call( this );
