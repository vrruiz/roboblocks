/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.variables_set block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'variables_set');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n\n}\n\n\nvoid loop()\n{\n   =;\n}' );
			});
		});
	});

}).call( this );
