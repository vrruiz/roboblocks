/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.text_join block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'text_join');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n\n}\n\n\nvoid loop()\n{\n  String() + String();\n\n}');
			});
		});
	});

}).call( this );
