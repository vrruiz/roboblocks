'use strict';
/* global Blockly, options, profiles, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_piezo_buzzerav code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_piezo_buzzerav = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
    var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

    var code = JST['bq_piezo_buzzerav']({
        'dropdown_pin': dropdown_pin,
        'Buzztone': Buzztone,
        'delay_time': delay_time
    });

    return code;
};


/**
 * bq_piezo_buzzerav block definition
 * @type {Object}
 */
Blockly.Blocks.bq_piezo_buzzerav = {
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'advanced buzzer'],
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_piezo_buzzerav',
    /**
    * bq_piezo_buzzerav initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput('')
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV)
            .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_PIN)
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

        this.appendValueInput('TONE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TONE);

        this.appendValueInput('DURA', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_DURATION);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TOOLTIP);
    }
};
