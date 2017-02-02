'use strict';
/* global Blockly, profiles, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_dht11 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_dht11 = function() {
    Blockly.Arduino.definitions_['define_dht11'] = '#include <dht.h>\ndht DHT;\n';

    var dropdown_pin = this.getTitleValue('PIN');
    var temperature  = Blockly.Arduino.valueToCode(this, 'TEMPERATURE', Blockly.Arduino.ORDER_ATOMIC);
    var humidity = Blockly.Arduino.valueToCode(this, 'HUMIDITY', Blockly.Arduino.ORDER_ATOMIC);

    var code = JST['zum_dht11']({
        'dropdown_pin': dropdown_pin,
        'temperature': temperature,
        'humidity': humidity
    });

    return code;
};

/**
 * zum_dht11 block definition
 * @type {Object}
 */
Blockly.Blocks.zum_dht11 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['dht11'],
    helpUrl: RoboBlocks.URL_dht11,

    /**
     * zum_dht11 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/dht11.png',
                208 * options.zoom,
                140 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_PIN'))
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('TEMPERATURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TEMPERATURE'));
        this.appendValueInput('HUMIDITY')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_HUMIDITY'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TOOLTIP'));
    }
};
