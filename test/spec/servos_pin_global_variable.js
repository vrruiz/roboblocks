/* global describe, it, expect, load_xml */
(function() {
    'use strict';
    var root = this;
    root.define([], function() {
        describe('In servos_pin_global_variable', function() {
            it('generates expected default Arduino code', function() {
                expect(true).to.equal(true);
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(loadXMLDoc("test/res/servos_pin_global_variable.xml")));
                assert.equal(Blockly.Arduino.workspaceToCode(), '#include <Servo.h>\n\nServo servos[13];\n\n/***   Global variables   ***/\nint pin1=1;\nint pin2=2;\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n\n\n}\n\n\nvoid loop()\n{\n  servos[pin1].attach(pin1);\n  servos[pin1].write(2);\n  delay(2);\n  servos[pin2].attach(pin2);\n  servos[pin2].write(0);\n  delay(2);\n\n}\n\n/***   Function definition   ***/\n');
            });
        });
    });
}).call(this);