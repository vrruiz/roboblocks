'use strict';
/* global Blockly, options, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_follower code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_follower = function() {
    var dropdown_pin = this.getFieldValue('PIN')||1;
    var NextPIN = this.getFieldValue('PIN2')||2;
    var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
    var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');

    Blockly.Arduino.setups_['setup_follower_' + dropdown_pin] = JST['zum_follower_setups']({
        'dropdown_pin': dropdown_pin,
        'NextPIN' : NextPIN
    });

    var code = JST['zum_follower']({
        'dropdown_pin': dropdown_pin,
        'NextPIN' : NextPIN,
        'code_btn1' : code_btn1,
        'code_btn2' : code_btn2
    });

    //  code=code.substring(0,code.length-1);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_follower block definition
 * @type {Object}
 */
Blockly.Blocks.zum_follower = {
    category: RoboBlocks.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'follower'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/zum_follower',
    /**
    * zum_follower initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
        .appendField(RoboBlocks.LANG_ZUM_FOLLOWER)
        .appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203*options.zoom, 165*options.zoom));
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_LEFT)
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_RIGHT)
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN2');
        this.appendStatementInput('SENS1')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_LEFT);
        this.appendStatementInput('SENS2')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_ZUM_FOLLOWER_TOOLTIP);
    }
};
