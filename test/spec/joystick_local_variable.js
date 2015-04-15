/* global describe, it, expect, load_xml */
(function() {
    'use strict';
    var root = this;
    root.define([], function() {
        describe('In joystick_local_variable', function() {
            it('generates expected default Arduino code', function() {
                expect(true).to.equal(true);
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(loadXMLDoc("test/res/joystick_local_variable.xml")));
                assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\nint _internal_readJoystick_array_A0_A1[3];\n\n/***   Function declaration   ***/\nint * readJoystick_A0_A1();\n\nvoid setup()\n{\n  pinMode(8,INPUT_PULLUP);\n\n}\n\n\nvoid loop()\n{\n  int *a=(int*)malloc(3*sizeof(int));\n  a=readJoystick_A0_A1();\n\n}\n\n/***   Function definition   ***/\nint * readJoystick_A0_A1(){\n  _internal_readJoystick_array_A0_A1[0]=analogRead(A0);\n  _internal_readJoystick_array_A0_A1[1]=analogRead(A1);\n  _internal_readJoystick_array_A0_A1[2]=digitalRead(8);\n  return _internal_readJoystick_array_A0_A1;\n}');
            });
        });
    });
}).call(this);