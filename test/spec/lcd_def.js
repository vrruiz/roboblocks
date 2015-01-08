/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.lcd_def block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'lcd_def');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Wire.h>\n#include <LiquidCrystal.h>\n\n/***   Global variables   ***/\nLiquidCrystal lcd(0);\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n  lcd.begin(20, 4);\n  lcd.clear();\n\n}\n\n\nvoid loop()\n{\n\n}\n\n/***   Function definition   ***/\n');
			});
		});
	});

}).call( this );
