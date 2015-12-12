'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * controls_setup code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.controls_setupLoop = function() {
    // Add statements to setup.
    var branch = Blockly.Arduino.statementToCode(this, 'SETUP');
    branch = branch.replace(/&quot;/g, '"');

    Blockly.Arduino.setups_['X_SETUP'] = JST['controls_setupLoop']({
        'branch': branch
    });

    var content = Blockly.Arduino.statementToCode(this, 'LOOP');
    content = content.replace(/&quot;/g, '"');
    content = JST['controls_setupLoop']({
        'branch': content
    });
    return content;
};
Blockly.Blocks.controls_setupLoop = {
    // Setup statements.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    // helpUrl: RoboBlocks.URL_SETUP,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendStatementInput('SETUP').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE'));
        this.appendStatementInput('LOOP').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE'));
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_TOOLTIP'));
    }
};
