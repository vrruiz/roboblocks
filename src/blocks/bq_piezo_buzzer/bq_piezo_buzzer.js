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

    var code = JST['bq_piezo_buzzer']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat,
        'delay_time': delay_time
    });

    code = 'tone(' + dropdown_pin + ',' + dropdown_stat + ',' + delay_time + ');\ndelay(' + delay_time + ');\n';
    return code;
};


/**
 * bq_piezo_buzzer block definition
 * @type {Object}
 */
Blockly.Blocks.bq_piezo_buzzer = {
    category: RoboBlocks.LANG_CATEGORY_BQ,
    tags: ['bq', 'buzzer'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_piezo_buzzer',
    /**
    * bq_piezo_buzzer initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput('')
        .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER)
        .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_PIN)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendDummyInput('')
            .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_TONE)
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_DO, '261'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_RE, '293'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_MI, '329'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_FA, '349'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SOL, '392'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_LA, '440'],
                [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SI, '494']
            ]), 'STAT') //523
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('DURA', Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_DURATION);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_BQ_PIEZO_BUZZER_TOOLTIP);
    }
};

