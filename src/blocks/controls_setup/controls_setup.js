'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * controls_setup code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.controls_setup = function() {
    // Add statements to setup.
    var branch = Blockly.Arduino.statementToCode(this, 'SETUP');
    branch = branch.replace(/&quot;/g, '"');

    Blockly.Arduino.setups_['X_SETUP'] = JST['controls_setup']({
        'branch': branch
    });

    return '';
};
Blockly.Blocks.controls_setup = {
    // Setup statements.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    // helpUrl: RoboBlocks.URL_SETUP,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendStatementInput('SETUP').appendField('Setup');
        this.setPreviousStatement(false);
        this.setNextStatement(false);
    }
};
