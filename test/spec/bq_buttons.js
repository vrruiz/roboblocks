/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_buttons block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_buttons');

				assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\n//bqButtons\nint adc_key_val[5] ={20,50, 100, 200, 600 };\nint NUM_KEYS = 5;\nint adc_key_in;\nint key=-1;\nint oldkey=-1;\n\n/***   Function declaration   ***/\nint get_key(unsigned int input);\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n    adc_key_in =analogRead();\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      delay(50);\n      adc_key_in = analogRead();\n      key = get_key(adc_key_in);\n      if (key != oldkey)\n      {\n        oldkey = key;\n        if (key >=0){\n          switch(key)\n          {\n            case 0:\n\n            break;\n            case 1:\n\n            break;\n            case 2:\n\n            break;\n            case 3:\n\n            break;\n            case 4:\n\n            break;\n          }\n        }\n      }\n    }\n\n}\n\n/***   Function definition   ***/\nint get_key(unsigned int input)\n  {\n    int k;\n    for (k = 0; k < NUM_KEYS; k++)\n    {\n      if (input < adc_key_val[k])\n      {\n        return k;\n      }\n    }\n    if (k >= NUM_KEYS)k = -1;\n      return k;\n}\n');
			});
		});
	});

}).call( this );
