'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_dht11 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_dht11 = function() {
    var sensor_type = this.getFieldValue('SENSOR_TYPE');
    var value_type = this.getFieldValue('VALUE_TYPE');
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code ='';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];
    Blockly.Arduino.definitions_['define_dht11'] = JST['zum_dht11_definitions']({});
    Blockly.Arduino.definitions_['declare_var_dht11_'+dropdown_pin] = JST['zum_dht11_declare']({
        'dropdown_pin': dropdown_pin,
        'sensor_type': sensor_type
    });
    Blockly.Arduino.setups_['setup_dht11_'+dropdown_pin] = JST['zum_dht11_setups']({
        'dropdown_pin': dropdown_pin
    });
    code += JST['zum_dht11']({
        'dropdown_pin': dropdown_pin,
        'value_type': value_type
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * zum_dht11 block definition
 * @type {Object}
 */
Blockly.Blocks.zum_dht11 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
    tags: ['dht11'],
    helpUrl: RoboBlocks.URL_SENSOR,

    /**
     * zum_dht11 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
        this.appendDummyInput().appendField(new Blockly.FieldImage('img/blocks/dht11.png',208 * options.zoom,140 * options.zoom))
            .appendField(new Blockly.FieldDropdown([
                ['DHT11', 'DHT11'],
                ['DHT21 (AM2301)', 'DHT21'],
                ['DHT22 (AM2302/AM2321)', 'DHT22']
            ]), 'SENSOR_TYPE').setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE1')||'Temperature', 'Temperature'],
                [RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE2')||'Humidity', 'Humidity']
            ]), 'VALUE_TYPE').setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_PIN')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TOOLTIP'));
    }
};
