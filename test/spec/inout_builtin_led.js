/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.inout_builtin_led block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'inout_builtin_led');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode(13,OUTPUT);\n\n}\n\n\nvoid loop()\n{\n  digitalWrite(13,HIGH);\n\n}');
			});
		});
	});

}).call( this );
