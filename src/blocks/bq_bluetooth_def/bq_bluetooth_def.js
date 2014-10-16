'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bluetooth_def code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.bq_bluetooth_def = function() {
    var baud_rate= Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_def_definitions']({
        'baud_rate': baud_rate,
        'dropdown_pin': dropdown_pin,
        'NextPIN': NextPIN
    });

    Blockly.Arduino.setups_['setup_bluetooth_']= JST['bq_bluetooth_def_setups']({
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
    category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
    tags: ['bq', 'bluetooth'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_bluetooth_def',
    /**
	  * bq_bluetooth_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF)
            .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

        this.appendValueInput('BAUD_RATE')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_BAUD_RATE)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('PIN')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN1)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('PIN2')
            .setCheck(Number)
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN2)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_TOOLTIP);
    }
};
