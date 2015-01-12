/* global describe, it, expect, load_xml */
(function() {
    'use strict';
    var root = this;
    root.define([], function() {
        describe('In Roboblocks.Blocks.trial block', function() {
            it('generates expected default Arduino code', function() {
                expect(true).to.equal(true);
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(loadXMLDoc("test/res/controls_for.xml")));
                assert.equal(Blockly.Arduino.workspaceToCode(), '/***   Global variables   ***/\nint pin=0;\nint i=0;\n\n/***   Function declaration   ***/\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  for (i = pin; i >= 0; i--) {\n  }\n\n}\n\n/***   Function definition   ***/\n');
            });
        });
    });
}).call(this);