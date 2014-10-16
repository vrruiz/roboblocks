'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bluetooth_slave code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.bq_bluetooth_receive = function() {
    var code = JST['bq_bluetooth_receive']({
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_bluetooth_slave block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bluetooth_receive = {
    category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
    tags: ['bq', 'bluetooth'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_bluetooth_receive',
    /**
	  * bq_bluetooth_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE)
            .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

        this.setInputsInline(false);


        this.setOutput(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP);
    }
};
