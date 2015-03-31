'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_follower code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_follower = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
    var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC) || '';
    var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
    code_btn1 = code_btn1.replace(/&quot;/g, '"');
    // code_btn1=code_btn1.replace(/&amp;/g,'');
    var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');
    code_btn2 = code_btn2.replace(/&quot;/g, '"');
    // code_btn2=code_btn2.replace(/&amp;/g,'');
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    var b = RoboBlocks.findPinMode(NextPIN);
    code += b['code'];
    NextPIN = b['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['zum_follower_setups_pin']({
            'dropdown_pin': dropdown_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_follower_1_' + dropdown_pin] = JST['zum_follower_setups_pin']({
            'dropdown_pin': dropdown_pin
        });
    }
    if (RoboBlocks.isVariable(NextPIN)) {
        code += JST['zum_follower_setups_nextpin']({
            'NextPIN': NextPIN
        });
    } else {
        Blockly.Arduino.setups_['setup_follower_2_' + NextPIN] = JST['zum_follower_setups_nextpin']({
            'NextPIN': NextPIN
        });
    }
    code += JST['zum_follower']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN,
        'code_btn1': code_btn1,
        'code_btn2': code_btn2
    });
    return code;
};
/**
 * zum_follower block definition
 * @type {Object}
 */
Blockly.Blocks.zum_follower = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['infrared'],
    helpUrl: RoboBlocks.URL_IR,
    /**
     * zum_follower initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER')).appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203 * options.zoom, 165 * options.zoom));
        this.appendValueInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_LEFT'));
        this.appendValueInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_RIGHT'));
        this.appendStatementInput('SENS1').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_LEFT'));
        this.appendStatementInput('SENS2').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_RIGHT'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_TOOLTIP'));
    }
};