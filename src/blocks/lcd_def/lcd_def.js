/*
*******VER ESTO A VER SI LO PUEDO PONER TODO EN UN SOLO BLOQUE:
https://stackoverflow.com/questions/51667300/how-to-hide-remove-field-in-blockly

*******ADEMÁS DE LO ANTERIOR, TAMBIÉN TENDRÍA QUE DAR SOPORTE A VARIAS PANTALLAS
CONECTADAS, LO QUE CONLLEVA MODIFICAR EL RESTO DE BLOQUES DE LCD
*/
'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * lcd_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.lcd_def = function() {
    var conn_type = this.getFieldValue('CONN_TYPE');
    var pin1, pin2, pin3, pin4, pin5, pin6, address;
    if(conn_type==='1') {
        pin1 = Blockly.Arduino.valueToCode(this, 'PIN_1', Blockly.Arduino.ORDER_ATOMIC);
        pin2 = Blockly.Arduino.valueToCode(this, 'PIN_2', Blockly.Arduino.ORDER_ATOMIC);
        pin3 = Blockly.Arduino.valueToCode(this, 'PIN_3', Blockly.Arduino.ORDER_ATOMIC);
        pin4 = Blockly.Arduino.valueToCode(this, 'PIN_4', Blockly.Arduino.ORDER_ATOMIC);
        pin5 = Blockly.Arduino.valueToCode(this, 'PIN_5', Blockly.Arduino.ORDER_ATOMIC);
        pin6 = Blockly.Arduino.valueToCode(this, 'PIN_6', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
        Blockly.Arduino.definitions_['declare_var_lcd'] = JST['lcd_def_declare']({
            'pin1': pin1,
            'pin2': pin2,
            'pin3': pin3,
            'pin4': pin4,
            'pin5': pin5,
            'pin6': pin6
        });
        Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
    } else {
        address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions_i2c']({});
        Blockly.Arduino.definitions_['declare_var_lcd'] = JST['lcd_def_declare_i2c']({
            'address': address
        });
        Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups_i2c']({});
    }
    return '';
};
/**
 * lcd_def block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF')).appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION')).appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION_PARALLEL')||'Parallel', '1'],
            [RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION_I2C')||'I2C', '2']
        ]), 'CONN_TYPE');
        this.last_conn_type = this.getFieldValue('CONN_TYPE');
        this.check_conn_type();
        this.setInputsInline(false);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
    },
    check_conn_type: function() {
        if (this.getInput('PIN_1')) {
            this.removeInput('PIN_1');
        }
        if (this.getInput('PIN_2')) {
            this.removeInput('PIN_2');
        }
        if (this.getInput('PIN_3')) {
            this.removeInput('PIN_3');
        }
        if (this.getInput('PIN_4')) {
            this.removeInput('PIN_4');
        }
        if (this.getInput('PIN_5')) {
            this.removeInput('PIN_5');
        }
        if (this.getInput('PIN_6')) {
            this.removeInput('PIN_6');
        }
        if (this.getInput('ADDRESS')) {
            this.removeInput('ADDRESS');
        }
        if (this.last_conn_type === '1') {
            this.appendValueInput('PIN_1').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_1')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN_2').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_2')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN_3').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_3')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN_4').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_4')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN_5').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_5')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN_6').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_6')).setAlign(Blockly.ALIGN_RIGHT);
        } else {
            this.appendValueInput('ADDRESS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_ADDRESS')).setAlign(Blockly.ALIGN_RIGHT);
        }
    },
    onchange: function() {
        if (this.getFieldValue('CONN_TYPE') !== this.last_conn_type) {
            this.last_conn_type = this.getFieldValue('CONN_TYPE');
            this.check_conn_type();
        }
    },
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('connection_type', this.last_conn_type);
        return container;
    },
    domToMutation: function (xmlElement) {
        var connectionType = xmlElement.getAttribute('connection_type');
        if(connectionType && connectionType !== 'undefined') {
            this.last_conn_type = connectionType;
        }
        this.check_conn_type();
    }
};
