/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.zum_led block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'zum_led');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode(,OUTPUT);\n\n}\n\n\nvoid loop()\n{\n  digitalWrite(,HIGH);\n\n}');
			});
		});
	});

}).call( this );
