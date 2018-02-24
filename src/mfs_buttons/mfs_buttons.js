'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_buttons code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.mfs_buttons = function() {
    var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
    var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
    var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
 
    /* var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    */

    code_btn1=code_btn1.replace(/&quot;/g,'"');
    code_btn2=code_btn2.replace(/&quot;/g,'"');
    code_btn3=code_btn3.replace(/&quot;/g,'"');

    // code_btn1=code_btn1.replace(/&amp;/g,'');
    // code_btn2=code_btn2.replace(/&amp;/g,'');
    // code_btn3=code_btn3.replace(/&amp;/g,'');
    // code_btn4=code_btn4.replace(/&amp;/g,'');
    // code_btn5=code_btn5.replace(/&amp;/g,'');

    Blockly.Arduino.definitions_['declare_var_define_buttons'+dropdown_pin] = JST['bq_buttons_definitions_variables']({});
    Blockly.Arduino.definitions_['define_buttons'+dropdown_pin] = JST['bq_buttons_definitions']({
        'dropdown_pin': dropdown_pin
    });


    code += JST['mfs_buttons']({
        'code_btn1':code_btn1,
        'code_btn2':code_btn2,
        'code_btn3':code_btn3,
    });

    return code;
};

/**
 * bq_buttons block definition
 * @type {Object}
 */
Blockly.Blocks.mfs_buttons = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
    tags: ['buttons'],
    helpUrl: RoboBlocks.URL_BUTTONS,
    /**
    * bq_buttons initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS'))
        .appendField(new Blockly.FieldImage('img/blocks/mfs_key.png', 336*options.zoom, 88*options.zoom));
        
        this.appendStatementInput('BUTN1')
        .setAlign(Blockly.ALIGN_RIGHT) //// *********** a partir de aqui
        .appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_BUTTON_A'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_MFS_PRESS') || 'Pulsado', 'BUTTON_PRESSED_IND'],
                [RoboBlocks.locales.getKey('LANG_MFS_RELEASE') || 'Soltado', 'BUTTON_SHORT_RELEASE_IND'],
                [RoboBlocks.locales.getKey('LANG_MFS_LPRESS') || 'Pulsado largo', 'BUTTON_LONG_PRESSED_IND'],
                [RoboBlocks.locales.getKey('LANG_MFS_LRELEASE') || 'Soltado largo', 'BUTTON_LONG_RELEASE_IND']
            ]), 'OPT1') //// Hasta aqui, quito el punto y coma;
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_BUTTON_A'));

        this.appendStatementInput('BUTN2')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_BUTTON_B'));
        this.appendStatementInput('BUTN3')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_BUTTON_C'));
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_TOOLTIP'));
    }
};
