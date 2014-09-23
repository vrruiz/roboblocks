/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.variables_declare block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'variables_declare');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'int item;\n\nvoid setup()\n{\n  item = 0;\n\n}\n\n\nvoid loop()\n{\n\n}' );
			});
		});
	});

}).call( this );
