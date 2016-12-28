'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * zum_bmp180 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_bmp180 = function() {
    Blockly.Arduino.definitions_['define_bmp180'] = '#include <Adafruit_BMP085.h>\n';
    Blockly.Arduino.definitions_['var_bmp180'] = 'Adafruit_BMP085 BMP;\n';
    Blockly.Arduino.setups_['setup_bmp180'] = JST['zum_bmp180_setups']();

    var temperature  = Blockly.Arduino.valueToCode(this, 'TEMPERATURE', Blockly.Arduino.ORDER_ATOMIC);
    var altitude  = Blockly.Arduino.valueToCode(this, 'ALTITUDE', Blockly.Arduino.ORDER_ATOMIC);
    var pressure  = Blockly.Arduino.valueToCode(this, 'PRESSURE', Blockly.Arduino.ORDER_ATOMIC);

    var code = '';

    code += JST['zum_bmp180']({
        'temperature': temperature,
        'altitude': altitude,
        'pressure': pressure,
    });

    return code;
};
/**
 * zum_bmp180 block definition
 * @type {Object}
 */
Blockly.Blocks.zum_bmp180 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['bmp180'],
    helpUrl: RoboBlocks.URL_BMP180,
    /**
     * zum_bmp180 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BMP180'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/bmp085.png',
                208 * options.zoom,
                140 * options.zoom));
        this.appendValueInput('TEMPERATURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BMP180_TEMPERATURE'));
        this.appendValueInput('ALTITUDE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BMP180_ALTITUDE'));
        this.appendValueInput('PRESSURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BMP180_PRESSURE'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_BMP180_TOOLTIP'));
    }
};
