'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_bat code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_bat = function() {
    var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
    var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a = RoboBlocks.findPinMode(echo_pin);
    code += a['code'];
    echo_pin = a['pin'];

    a = RoboBlocks.findPinMode(trigger_pin);
    code += a['code'];
    trigger_pin = a['pin'];

    Blockly.Arduino.definitions_['define_bq_bat_tp_init'] = JST['bq_bat_definitions_tp_init']({});
    Blockly.Arduino.definitions_['define_bq_bat_distance'] = JST['bq_bat_definitions_distance']({});
    if (RoboBlocks.isVariable(echo_pin)) {
        code += JST['bq_bat_setups_echo']({
            'echo_pin': echo_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_bq_bat_'+echo_pin+trigger_pin] = JST['bq_bat_setups_echo']({
            'echo_pin': echo_pin
        });
    }
    if (RoboBlocks.isVariable(trigger_pin)) {
        code += JST['bq_bat_setups_trigger']({
            'trigger_pin': trigger_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_bq_bat_2'+trigger_pin+echo_pin] = JST['bq_bat_setups_trigger']({
            'trigger_pin': trigger_pin
        });
    }
    code += JST['bq_bat']({
        'trigger_pin': trigger_pin,
        'echo_pin': echo_pin
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * bq_bat block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bat = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['bat'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT')).appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
        this.appendValueInput('RED PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_RED_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('BLUE PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_BLUE_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BAT_TOOLTIP'));
    }
};