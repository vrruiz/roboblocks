/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.servo_read_degrees block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'servo_read_degrees');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servo_;\n\nvoid setup()\n{\n  servo_.attach();\n}\n\n\nvoid loop()\n{\n    servo_.read();\n\n}' );
			});
		});
	});

}).call( this );
