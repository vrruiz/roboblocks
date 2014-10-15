/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.servo_cont block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'servo_cont');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servo_;\n\nvoid setup()\n{\n  servo_.attach();\n}\n\n\nvoid loop()\n{\n  servo_.write(0);\n  delay();\n\n}');
			});
		});
	});

}).call( this );
