'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bluetooth_slave code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.bq_bluetooth_send = function() {
    var statement_send = Blockly.Arduino.valueToCode(this,  'SNT', Blockly.Arduino.ORDER_ATOMIC) ||'';

    var code ='';
    var a = RoboBlocks.findPinMode(statement_send);
    code += a['code'];
    statement_send = a['pin'];

    code += JST['bq_bluetooth_send']({
        'statement_send' : statement_send
    });

    return code;
};

/**
 * bq_bluetooth_send block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bluetooth_send = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['bluetooth'],
    helpUrl: RoboBlocks.URL_BT,
    /**
	  * bq_bluetooth_send initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

        this.appendValueInput('SNT')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_SEND'));

        this.setInputsInline(false);


        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_TOOLTIP'));
    }
};
