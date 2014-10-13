/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.procedures_callnoreturn block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'procedures_defnoreturn');
				var bool2 = Blockly.Block.obtain(Blockly.mainWorkspace, 'procedures_callnoreturn');
				assert.equal(Blockly.Arduino.workspaceToCode(), 'void procedure () {\n    }\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  procedure();\n\n}');
			});
		});
	});

}).call( this );
