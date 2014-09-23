/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.variables_get block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'variables_get');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'int item;\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  item;\n\n}' );
			});
		});
	});

}).call( this );
