/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_piezo_buzzer block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_piezo_buzzer');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n\n}\n\n\nvoid loop()\n{\n  tone(1,261,);\n  delay();\n\n}');
			});
		});

	});

}).call( this );
