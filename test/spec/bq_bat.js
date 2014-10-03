/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bat block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bat');

				assert.equal(Blockly.Arduino.workspaceToCode(), '//bqBAT\nlong Distance()\n{\n  long microseconds = TP_init();\n  long distance;\n  distance = microseconds/29/2;\n  return distance;\n}\n\nlong TP_init()\n{\n  digitalWrite(  , LOW);\n  delayMicroseconds(2);\n  digitalWrite(  , HIGH);\n  delayMicroseconds(10);\n  digitalWrite(  , LOW);\n  long microseconds = pulseIn(  ,HIGH);\n  return microseconds;\n}\n\nvoid setup()\n{\n  pinMode(  , INPUT );\n  pinMode(  , OUTPUT );\n}\n\n\nvoid loop()\n{\n  Distance();\n\n}');
			});
		});
	});

}).call( this );
