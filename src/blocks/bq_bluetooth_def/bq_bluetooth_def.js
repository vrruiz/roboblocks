'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_bluetooth_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_bluetooth_def = function() {
    var dropdown_pin, NextPIN;
    if (this.getFieldValue('TOGGLE') === 'FALSE') {
        dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
        NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
        var a = RoboBlocks.findPinMode(dropdown_pin);
        Blockly.Arduino.setups_['setup_bluetooth_pinmode'] = a['code'];
        dropdown_pin = a['pin'];
        a = RoboBlocks.findPinMode(NextPIN);
        Blockly.Arduino.setups_['setup_bluetooth_pinmode2'] = a['code'];
        NextPIN = a['pin'];
    } else {
        dropdown_pin = 0;
        NextPIN = 1;
    }
    var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
    var b = RoboBlocks.findPinMode(baud_rate);
    Blockly.Arduino.setups_['setup_bluetooth_pinmode3'] =  b['code'];
    baud_rate = b['pin'];

    Blockly.Arduino.definitions_['declare_var_blueToothSerial' + dropdown_pin] = 'SoftwareSerial blueToothSerial(' + dropdown_pin + ',' + NextPIN + ');\n';
    Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_def_definitions']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });
    Blockly.Arduino.setups_['setup_bluetooth_'] = JST['bq_bluetooth_def_setups']({
        'baud_rate': baud_rate,
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });
    return '';
};
/**
 * bq_bluetooth__def block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bluetooth_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['bluetooth'],
    helpUrl: RoboBlocks.URL_BT,
    /**
     * bq_bluetooth_slave initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF')).appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));
        this.appendValueInput('BAUD_RATE').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_BAUD_RATE')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput().appendField('zum?').appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
        this.checkBT();
        this.last_toogle = this.getFieldValue('TOGGLE');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_TOOLTIP'));
    },
    checkBT: function() {
        if (this.getFieldValue('TOGGLE') === 'FALSE') {
            try {
                this.removeInput('PIN');
                this.removeInput('PIN2');
            } catch (e) {}
            this.appendValueInput('PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN1')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN2').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN2')).setAlign(Blockly.ALIGN_RIGHT);
        } else {
            try {
                this.removeInput('PIN');
                this.removeInput('PIN2');
            } catch (e) {}
        }
    },
    onchange: function() {
        if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
            this.checkBT();
            this.last_toogle = this.getFieldValue('TOGGLE');
        }
    }
};