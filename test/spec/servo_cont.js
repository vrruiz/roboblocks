/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.servo_cont block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'servo_cont');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servo_1;\n\nvoid setup()\n{\n  servo_1.attach(1);\n}\n\n\nvoid loop()\n{\n  servo_1.write(0);\n  delay(10);\n\n}');
			});
		});
	});

}).call( this );
