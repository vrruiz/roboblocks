'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * inout_digital_write_var code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.inout_digital_write_var = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
        
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    
    var b = RoboBlocks.findPinMode(value_num);
    code += b['code'];
    value_num = b['pin'];
    
    /* Parece que actúa sobre el setup  */  
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['inout_digital_write_var_setups']({
            'dropdown_pin': dropdown_pin,
            'value_num': value_num
        });
    } else {
        Blockly.Arduino.setups_['setup_green_digital_write_' + dropdown_pin] = JST['inout_digital_write_var_setups']({
            'dropdown_pin': dropdown_pin,
            'value_num': value_num
        });
    }
    
    /* Y esto actúa sobre la escritura en el loop */
    code += JST['inout_digital_write_var']({
        'dropdown_pin': dropdown_pin,
        'value_num': value_num,
    });
    return code;
};
/**
 * inout_digital_write_var block definition
 * @type {Object}
 */
Blockly.Blocks.inout_digital_write_var = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
    helpUrl: RoboBlocks.URL_PIN_FUNC,
    /**
     * inout_digital_write_var initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
        this.appendValueInput('NUM', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR')).appendField("[0,1]");
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
    }
};
