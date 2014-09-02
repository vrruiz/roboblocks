/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.math_random block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'math_random');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n#include <Sumorobot.h>\n\nvoid setup() {\n  start();\n}\nvoid loop() {\n  random(0, 10);\n\n}\n');
			});
		});

	});

}).call( this );
