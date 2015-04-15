/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.procedures_callreturn block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'procedures_defreturn');
				var bool2 = Blockly.Block.obtain(Blockly.mainWorkspace, 'procedures_callreturn');
				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\n\n/***   Function declaration   ***/\nvoid func_con_retorno ();\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  func_con_retorno();\n\n}\n\n/***   Function definition   ***/\nvoid func_con_retorno () {\n\n }\n');
			});
		});
	});

}).call( this );
