'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_piezo_buzzerav code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_piezo_buzzerav = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
    var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];

    a=RoboBlocks.findPinMode(delay_time);
    code+=a['code'];
    delay_time=a['pin'];

    a=RoboBlocks.findPinMode(Buzztone);
    code+=a['code'];
    Buzztone=a['pin'];


    code += JST['bq_piezo_buzzerav']({
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
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['buzzer'],
	helpUrl: RoboBlocks.URL_BUZZER,
    /**
    * bq_piezo_buzzerav initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV'))
            .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_PIN'))
            .setCheck(Number);

        this.appendValueInput('TONE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TONE'));

        this.appendValueInput('DURA', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_DURATION'));

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TOOLTIP'));
    }
};
