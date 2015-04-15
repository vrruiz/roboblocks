'use strict';
/* global Blockly, JST, RoboBlocks */
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
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
    tags: ['bluetooth'],
    helpUrl: RoboBlocks.URL_BT,
    /**
	  * bq_bluetooth_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE'));
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

        this.setInputsInline(false);


        this.setOutput(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP'));
    }
};
