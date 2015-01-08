/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bat block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bat');

				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\n\n/***   Function declaration   ***/\n//bqBAT\nlong TP_init_();\nlong Distance_();\n\nvoid setup()\n{\n  pinMode(  , INPUT );\n\n  pinMode(  , OUTPUT );\n\n}\n\n\nvoid loop()\n{\n  Distance_();\n\n}\n\n/***   Function definition   ***/\n//bqBAT\nlong TP_init_()\n{\n  digitalWrite(  , LOW);\n  delayMicroseconds(2);\n  digitalWrite(  , HIGH);\n  delayMicroseconds(10);\n  digitalWrite(  , LOW);\n  long microseconds = pulseIn(  ,HIGH);\n  return microseconds;\n}\nlong Distance_()\n{\n  long microseconds = TP_init_();\n  long distance;\n  distance = microseconds/29/2;\n  return distance;\n}\n');
			});
		});
	});

}).call( this );
