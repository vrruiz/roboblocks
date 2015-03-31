'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_joystick code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_joystick = function() {
    var pinx = Blockly.Arduino.valueToCode(this, 'PINX', Blockly.Arduino.ORDER_ATOMIC);
    var piny = Blockly.Arduino.valueToCode(this, 'PINY', Blockly.Arduino.ORDER_ATOMIC);
    var pinbutton = Blockly.Arduino.valueToCode(this, 'PINBUTTON', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';

    var a = RoboBlocks.findPinMode(pinx);
    code += a['code'];
    pinx = a['pin'];

    a = RoboBlocks.findPinMode(piny);
    code += a['code'];
    piny = a['pin'];

    a = RoboBlocks.findPinMode(pinbutton);
    code += a['code'];
    pinbutton = a['pin'];


    var name = pinx.substring(0,3)+'_'+piny.substring(0,3);

    Blockly.Arduino.definitions_['declare_var_internal_readJoystick_array_' + pinx] = 'int _internal_readJoystick_array_' + name + '[3];\n';
    Blockly.Arduino.definitions_['define_joystick' + pinx] = JST['bq_joystick_definitions']({
        'name':name,
        'pinx': pinx,
        'piny': piny,
        'pinbutton': pinbutton
    });
    if (RoboBlocks.isVariable(pinbutton)) {
        code += JST['bq_joystick_setups']({
            'pinbutton': pinbutton
        });
    } else {
        Blockly.Arduino.setups_['setup_joystick_' + pinbutton] = JST['bq_joystick_setups']({
            'pinbutton': pinbutton
        });
    }
    var array = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC);
    code += JST['bq_joystick']({
        'name':name,
        'pinx': pinx,
        'array': array
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * bq_joystick block definition
 * @type {Object}
 */
Blockly.Blocks.bq_joystick = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['joystick'],
    helpUrl: RoboBlocks.URL_JOYSTICK,
    /**
     * bq_joystick initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK')).appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom));
        // this.appendValueInput('POS')
        //     .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_POSITION'))
        //     .setAlign(Blockly.ALIGN_RIGHT)
        //     .setCheck(Number);
        this.appendValueInput('PINX').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_X')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
        this.appendValueInput('PINY').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_Y')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
        this.appendValueInput('PINBUTTON').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_BUTTON')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
        this.setOutput(true, Number);
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_TOOLTIP'));
    }
};