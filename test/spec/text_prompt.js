/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.text_prompt block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'text_prompt');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#import(\'dart:html\');\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  window.prompt("", \'\');\n\n}');
			});
		});
	});

}).call( this );
