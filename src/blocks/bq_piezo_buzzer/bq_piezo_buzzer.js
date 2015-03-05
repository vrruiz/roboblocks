'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_piezo_buzzer code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_piezo_buzzer = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
    var dropdown_stat = this.getFieldValue('STAT')||'';
    var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC)||'';
    var code = '';
    var a=RoboBlocks.findPinMode(dropdown_pin);
    code+=a['code'];
    dropdown_pin=a['pin'];

    a=RoboBlocks.findPinMode(delay_time);
    code+=a['code'];
    delay_time=a['pin'];


    code += JST['bq_piezo_buzzer']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat,
        'delay_time': delay_time
    });

    return code;
};


/**
 * bq_piezo_buzzer block definition
 * @type {Object}
 */
Blockly.Blocks.bq_piezo_buzzer = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['buzzer'],
    helpUrl: RoboBlocks.URL_BUZZER,
    /**
    * bq_piezo_buzzer initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER'))
        .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_PIN'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TONE'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DO')||'DO', '261'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_RE')||'RE', '293'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_MI')||'MI', '329'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_FA')||'FA', '349'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SOL')||'SOL', '392'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_LA')||'LA', '440'],
                [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SI')||'SI', '494']
            ]), 'STAT') //523
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('DURA', Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DURATION'));

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TOOLTIP'));
    }
};

