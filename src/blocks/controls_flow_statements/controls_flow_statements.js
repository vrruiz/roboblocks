'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

/**
* controls_flow_statements code generation
* @return {String} Code generated with block parameters
*/
Blockly.Arduino.controls_flow_statements = function() {
    // Flow statements: continue, break.
    switch (this.getFieldValue('FLOW')) {
    case 'BREAK':
        return 'break;\n';
    case 'CONTINUE':
        return 'continue;\n';
    }
    throw 'Unknown flow statement.';
};


Blockly.Blocks.controls_flow_statements = {
    // Flow statements: continue, break.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_FLOW_STATEMENTS,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        var dropdown = new Blockly.FieldDropdown(
        [[RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK')||'BREAK', 'BREAK'],
         [RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE')||'CONTINUE', 'CONTINUE']]);
        this.appendDummyInput()
            .appendField(dropdown, 'FLOW')
            .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP'));
        this.setPreviousStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('FLOW');
            return Blockly.Blocks.controls_flow_statements.TOOLTIPS[op];
        });
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        var legal = false;
        // Is the block nested in a control statement?
        var block = this;
        do {
            if (block.type === 'controls_repeat' ||
                block.type === 'controls_forEach' ||
                block.type === 'controls_for' ||
                block.type === 'controls_whileUntil') {
                legal = true;
                break;
            }
            block = block.getSurroundParent();
        } while (block);
        if (legal) {
            this.setWarningText(null);
        } else {
            try{
                this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_WARNING'));
            }catch(err){
                console.log('Captured error: ', err);
            }
        }
    }
};

Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
    BREAK: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'),
    CONTINUE: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE')
};
