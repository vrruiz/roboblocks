/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_buttons block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_buttons');

				assert.equal(Blockly.Arduino.workspaceToCode(), '//bqButtons\n  int adc_key_val[5] ={20,50, 100, 200, 600 };\n  int NUM_KEYS = 5;\n  int adc_key_in;\n  int key=-1;\n  int oldkey=-1;\n  int get_key(unsigned int input)\n  {\n    int k;\n    for (k = 0; k < NUM_KEYS; k++)\n    {\n      if (input < adc_key_val[k])\n      {\n        return k;\n      }\n    }\n    if (k >= NUM_KEYS)k = -1;\n      return k;\n  }\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n    adc_key_in =analogRead();\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      delay(50);\n      adc_key_in = analogRead();\n      key = get_key(adc_key_in);\n      if (key != oldkey)\n      {\n        oldkey = key;\n        if (key >=0){\n          switch(key)\n          {\n            case 0:\n             code_btn1\n            break;\n            case 1:\n             code_btn2\n            break;\n            case 2:\n             code_btn3\n            break;\n            case 3:\n             code_btn4\n            break;\n            case 4:\n             code_btn5\n            break;\n          }\n        }\n      }\n    }\n\n}');
			});
		});
	});

}).call( this );
