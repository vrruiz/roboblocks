/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.zum_follower block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'zum_follower');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode(  , INPUT);\n  pinMode(  , INPUT);\n\n}\n\n\nvoid loop()\n{\n  if(digitalRead()==HIGH)\n  {\n\n  }\n  if(digitalRead()==HIGH)\n  {\n\n  }\n\n}');
			});
		});
	});

}).call( this );
