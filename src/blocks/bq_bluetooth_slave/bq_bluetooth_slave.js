'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bluetooth_slave code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.bq_bluetooth_slave = function() {
    var baud_rate= Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);

    var statement_receive = Blockly.Arduino.statementToCode(this, 'RCV');
    var statement_send = Blockly.Arduino.statementToCode(this, 'SNT');

    Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_slave_definitions']({
        'baud_rate': baud_rate,
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });

    Blockly.Arduino.setups_['setup_bluetooth_']= JST['bq_bluetooth_slave_setups']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });

    var code = JST['bq_bluetooth_slave']({
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN,
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

        this.appendValueInput('BAUD_RATE')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_BAUD_RATE)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('PIN')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN1)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('PIN2')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN2)
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
