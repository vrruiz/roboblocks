/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.zum_follower block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'zum_follower');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void setup()\n{\n  pinMode( 1 , INPUT);\n  pinMode( 1 , INPUT);\n\n}\n\n\nvoid loop()\n{\n  if(digitalRead(1)==HIGH)\n  {\n    code_btn1\n  }\n  if(digitalRead(1)==HIGH)\n  {\n    code_btn2\n  }\n\n}');
			});
		});
	});

}).call( this );
