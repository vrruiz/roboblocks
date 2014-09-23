/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bat block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bat');

				assert.equal(Blockly.Arduino.workspaceToCode(), '//bqBAT\nlong Distance1()\n{\n  long microseconds = TP_init1();\n  long distance;\n  distance = microseconds/29/2;\n  return distance;\n}\n\nlong TP_init1()\n{\n  digitalWrite( 2 , LOW);\n  delayMicroseconds(2);\n  digitalWrite( 2 , HIGH);\n  delayMicroseconds(10);\n  digitalWrite( 2 , LOW);\n  long microseconds = pulseIn( 1 ,HIGH);\n  return microseconds;\n}\n\nvoid setup()\n{\n  pinMode( 1 , INPUT );\n  pinMode( 2 , OUTPUT );\n}\n\n\nvoid loop()\n{\n  Distance1();\n\n}');
			});
		});
	});

}).call( this );
