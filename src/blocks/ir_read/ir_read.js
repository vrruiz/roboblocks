'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * ir_read code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.ir_read = function() {
    var ir_pin = Blockly.Arduino.valueToCode(this, 'IR PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a = RoboBlocks.findPinMode(ir_pin);
    code += a['code'];
    ir_pin = a['pin'];

    Blockly.Arduino.definitions_['define_ir_read_definition'] = JST['ir_read_definitions']({});
    Blockly.Arduino.definitions_['declare_var_ir_read'] = JST['ir_read_declare']({
        'ir_pin': ir_pin
    });
    Blockly.Arduino.definitions_['define_ir_read_function'] = JST['ir_read_function']({});
    //if (RoboBlocks.isVariable(ir_pin)) {
        //code += JST['ir_read_setups']({
            //'ir_pin': ir_pin
        //});
    //} else {
    Blockly.Arduino.setups_['setup_ir_read_'+ir_pin] = JST['ir_read_setups']({
            //'ir_pin': ir_pin
    });
    //}
    code += JST['ir_read']({});
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * ir_read block definition
 * @type {Object}
 */
Blockly.Blocks.ir_read = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
    helpUrl: RoboBlocks.URL_SENSOR,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_IR_READ')).appendField(new Blockly.FieldImage('img/blocks/ir.png', 208 * options.zoom, 140 * options.zoom));
        this.appendValueInput('IR PIN').appendField(RoboBlocks.locales.getKey('LANG_IR_READ_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_IR_READ_TOOLTIP'));
    }
};