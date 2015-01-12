/* global describe, it, expect, load_xml */
(function() {
    'use strict';
    var root = this;
    root.define([], function() {
        describe('In bq_photoresistor_output_globalvariable_pin_number', function() {
            it('generates expected default Arduino code', function() {
                expect(true).to.equal(true);
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(loadXMLDoc("test/res/bq_photoresistor_output_globalvariable_pin_number.xml")));
                assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\nint sensor_luz;\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n  sensor_luz=analogRead(0);\n\n}\n\n\nvoid loop()\n{\n\n}\n\n/***   Function definition   ***/\n');
            });
        });
    });
}).call(this);