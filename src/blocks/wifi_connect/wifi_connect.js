'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * wifi_connect code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.wifi_connect = function() {
    var conn_type = this.getFieldValue('CONN_TYPE');
    var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
    var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
    var channel = Blockly.Arduino.valueToCode(this, 'CHANNEL', Blockly.Arduino.ORDER_ATOMIC);
    var rx_pin = Blockly.Arduino.valueToCode(this, 'RX_PIN', Blockly.Arduino.ORDER_ATOMIC);
    var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN', Blockly.Arduino.ORDER_ATOMIC);
    var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD', Blockly.Arduino.ORDER_ATOMIC);
    var serial_port = 'serialwifi';
    if(rx_pin==='0' && tx_pin==='1') {serial_port='Serial';}
    if(rx_pin==='19' && tx_pin==='18') {serial_port='Serial1';}
    if(rx_pin==='17' && tx_pin==='16') {serial_port='Serial2';}
    if(rx_pin==='15' && tx_pin==='14') {serial_port='Serial3';}
    var connection_type = serial_port==='serialwifi' ? '_software' : '_hardware';
    var code = '';
    if(conn_type==='1') {
        code = JST['wifi_connect']({
            'ssid': ssid,
            'password': password
        });
    } else {
        code = JST['wifi_create']({
            'ssid': ssid,
            'password': password,
            'channel': channel
        });
    }
    Blockly.Arduino.definitions_['define_wifi_connect'] = JST['wifi_connect_definitions']({
        'connection_type': connection_type
    });
    if(serial_port==='serialwifi') {
        Blockly.Arduino.definitions_['declare_var_serialwifi'] = JST['wifi_connect_declare_software']({
            'rx_pin': rx_pin,
            'tx_pin': tx_pin
        });
    }
    Blockly.Arduino.definitions_['declare_var_esp8266'] = JST['wifi_connect_declare']({
        'serial_port': serial_port,
        'baud_rate': baud_rate
    });
    if(conn_type==='1') {
        Blockly.Arduino.setups_['setup_wifi_connect'] = JST['wifi_connect_setups']({
            'serial_port': serial_port,
            'baud_rate': baud_rate
        });
    } else {
        Blockly.Arduino.setups_['setup_wifi_connect'] = JST['wifi_create_setups']({
            'serial_port': serial_port,
            'baud_rate': baud_rate
        });
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * wifi_connect block definition
 * @type {Object}
 */
Blockly.Blocks.wifi_connect = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['wifi'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT')).appendField(new Blockly.FieldImage('img/blocks/esp01.png', 208 * options.zoom, 140 * options.zoom))
            .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_STATION')||'STATION', '1'],
            [RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_SOFTAP')||'SOFTAP', '2']
        ]), 'CONN_TYPE');
        this.appendValueInput('SSID',String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_SSID')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PASSWORD',String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_PASSWORD')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.last_conn_type = this.getFieldValue('CONN_TYPE');
        this.check_conn_type();
        this.setInputsInline(false);
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TOOLTIP'));
    },
    check_conn_type: function() {
        if (this.getInput('CHANNEL')) {
            this.removeInput('CHANNEL');
        }
        if (this.getInput('RX_PIN')) {
            this.removeInput('RX_PIN');
        }
        if (this.getInput('TX_PIN')) {
            this.removeInput('TX_PIN');
        }
        if (this.getInput('BAUD')) {
            this.removeInput('BAUD');
        }
        if (this.last_conn_type === '1') {
            this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        } else {
            this.appendValueInput('CHANNEL').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_CHANNEL')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        }
    },
    onchange: function() {
        if (this.getFieldValue('CONN_TYPE') !== this.last_conn_type) {
            this.check_conn_type();
            this.last_conn_type = this.getFieldValue('CONN_TYPE');
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
