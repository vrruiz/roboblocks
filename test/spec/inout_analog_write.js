/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.inout_analog_write block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'inout_analog_write');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode(3,OUTPUT);\n\n}\n\n\nvoid loop()\n{\n  analogWrite(3,100);\n\n}');
			});
		});
	});

}).call( this );
