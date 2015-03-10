/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bat block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bat');

				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\n\n/***   Function declaration   ***/\n//bqBAT\nlong TP_init(int trigger_pin, int echo_pin);\nlong Distance(int trigger_pin, int echo_pin);\n\nvoid setup()\n{\n  pinMode(  , INPUT );\n\n  pinMode(  , OUTPUT );\n\n}\n\n\nvoid loop()\n{\n  Distance(,);\n\n}\n\n/***   Function definition   ***/\n//bqBAT\nlong TP_init(int trigger_pin, int echo_pin)\n{\n  digitalWrite(trigger_pin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigger_pin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigger_pin, LOW);\n  long microseconds = pulseIn(echo_pin ,HIGH);\n  return microseconds;\n}\nlong Distance(int trigger_pin, int echo_pin)\n{\n  long microseconds = TP_init(trigger_pin, echo_pin);\n  long distance;\n  distance = microseconds/29/2;\n  if (distance == 0){\n    distance = 999;\n  }\n  return distance;\n}\n');
			});
		});
	});

}).call( this );
