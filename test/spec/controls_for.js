/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.controls_for block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'controls_for');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'int i;\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  for (i = 0; i <= 0; i++) {\n  }\n\n}' );
			});
		});
	});

}).call( this );
