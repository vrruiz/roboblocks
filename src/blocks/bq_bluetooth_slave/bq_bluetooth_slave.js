'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_bluetooth_slave code generation
 * @return {String} Code generated with block parameters
 */

var _get_next_pin = function(dropdown_pin) {
    var NextPIN = dropdown_pin;
    if(parseInt(NextPIN,2)){
        NextPIN = parseInt(dropdown_pin,2)+1;
    } else {
        NextPIN = 'A'+(parseInt(NextPIN.slice(1,NextPIN.length),2)+1);
    }
    //check if NextPIN in bound
    var pinlen = profiles.default.digital.length;
    var notExist=true;
    for(var i=0;i<pinlen;i++){
        if(profiles.default.digital[i][1] === NextPIN){
            notExist=false;
        }
    }
    return NextPIN;
};

Blockly.Arduino.bq_bluetooth_slave = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var NextPIN = _get_next_pin(dropdown_pin);
    var name = this.getFieldValue('NAME');
    var pincode = this.getFieldValue('PINCODE');
    var statement_receive = Blockly.Arduino.statementToCode(this, 'RCV');
    var statement_send = Blockly.Arduino.statementToCode(this, 'SNT');

    Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_slave_definitions']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN,
        'name' : name,
        'pincode' : pincode
    });

    Blockly.Arduino.setups_['setup_bluetooth_']= JST['bq_bluetooth_slave_setups']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });

    var code = JST['bq_bluetooth_slave']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN,
        'name' : name,
        'pincode' : pincode,
        'statement_send' : statement_send,
        'statement_receive' : statement_receive
    });
    return code;
};

/**
 * bq_bluetooth_slave block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bluetooth_slave = {
    category: Blockly.LANG_CATEGORY_BQ,
    tag: 'bluetooth',
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_bluetooth_slave',
    /**
	  * bq_bluetooth_slave initialization
	  */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField('Bluetooth')
        .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom))
        .appendField('PIN#')
        .appendField(new Blockly.FieldDropdown(profiles.default.bluetooth), 'PIN');
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Name')
        .appendField(new Blockly.FieldTextInput('zum'), 'NAME');
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('PinCode')
        .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
        this.appendStatementInput('RCV')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Receive');
        this.appendStatementInput('SNT')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Send');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('bq Bluetooth');
    }
};
