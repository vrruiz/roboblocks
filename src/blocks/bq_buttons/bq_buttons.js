'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_buttons code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.bq_buttons = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
//  var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
//  var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
//  var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
//  var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
//  var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

    Blockly.Arduino.definitions_['define_buttons'] = JST['bq_buttons_definitions']({
        'dropdown_pin': dropdown_pin,
    });


    var code = JST['bq_buttons']({
        'dropdown_pin': dropdown_pin,
    });

    return code;
};

/**
 * bq_buttons block definition
 * @type {Object}
 */
Blockly.Blocks.bq_buttons = {
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'buttons'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_buttons',
    /**
    * bq_buttons initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.LANG_BQ_BUTTONS)
        .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336*options.zoom, 176*options.zoom))
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_PIN)
        .setCheck(Number);
        this.appendStatementInput('BUTN1')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_A);
        this.appendStatementInput('BUTN2')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_B);
        this.appendStatementInput('BUTN3')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_C);
        this.appendStatementInput('BUTN4')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_D);
        this.appendStatementInput('BUTN5')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_E);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_BUTTONS_TOOLTIP);
    }
};
