'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bluetooth_slave code generation
 * @return {String} Code generated with block parameters
 */

// var _get_next_pin = function(dropdown_pin) {
//     var NextPIN = dropdown_pin;
//     if(parseInt(NextPIN,2)){
//         NextPIN = parseInt(dropdown_pin,2)+1;
//     } else {
//         NextPIN = 'A'+(parseInt(NextPIN.slice(1,NextPIN.length),2)+1);
//     }
//     //check if NextPIN in bound
//     var pinlen = profiles.default.digital.length;
//     var notExist=true;
//     for(var i=0;i<pinlen;i++){
//         if(profiles.default.digital[i][1] === NextPIN){
//             notExist=false;
//         }
//     }
//     return NextPIN;
// };

Blockly.Arduino.bq_bluetooth_slave = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var NextPIN = this.getFieldValue('PIN2');
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
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'bluetooth'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_bluetooth_slave',
    /**
	  * bq_bluetooth_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE)
            .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

        this.appendValueInput('PIN')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN1)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('PIN2')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN2)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendDummyInput('')
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_NAME)
            .appendField(new Blockly.FieldTextInput('zum'), 'NAME')
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendDummyInput('')
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PINCODE)
            .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE')
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendStatementInput('RCV')
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_RECEIVE)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendStatementInput('SNT')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_SEND);

        this.setInputsInline(false);


        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_TOOLTIP);
    }
};
