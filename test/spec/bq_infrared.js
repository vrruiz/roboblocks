/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_infrared block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_infrared');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode( 1 , INPUT);\n}\n\n\nvoid loop()\n{\n  digitalRead(1);\n\n}');
			});
		});
	});

}).call( this );
