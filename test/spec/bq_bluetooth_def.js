/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bluetooth_def block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bluetooth_def');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <SoftwareSerial.h>\n\nSoftwareSerial blueToothSerial(0,1);\n\nvoid setup()\n{\n  pinMode(0,INPUT);\n  pinMode(1, OUTPUT);\n  blueToothSerial.begin();\n  blueToothSerial.flush();\n\n}\n\n\nvoid loop()\n{\n\n}');
			});
		});
	});

}).call( this );
