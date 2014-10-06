'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_buttons code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.bq_buttons = function() {
    var dropdown_pin = this.getFieldValue('PIN');
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
    category: Blockly.LANG_CATEGORY_BQ,
    tags: ['bq', 'buttons'],
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_buttons',
    /**
    * bq_buttons initialization
    */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField('Buttons')
        .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336*options.zoom, 176*options.zoom))
        .appendField('PIN#')
        .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
        this.appendStatementInput('BUTN1')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Button #A');
        this.appendStatementInput('BUTN2')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Button #B');
        this.appendStatementInput('BUTN3')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Button #C');
        this.appendStatementInput('BUTN4')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Button #D');
        this.appendStatementInput('BUTN5')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Button #E');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('bq Buttons');
    }
};
