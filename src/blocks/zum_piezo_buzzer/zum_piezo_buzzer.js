'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_piezo_buzzer code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_piezo_buzzer = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
    var dropdown_stat = this.getFieldValue('STAT');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

    //  Blockly.Arduino.setups_['setup_piezo_buzzer_' + dropdown_pin] = JST['zum_piezo_buzzer_setups']({
    //      'dropdown_pin': dropdown_pin,
    //      'dropdown_stat': dropdown_stat
    //  });


    var code = JST['zum_piezo_buzzer']({
        'dropdown_pin': dropdown_pin,
        'dropdown_stat': dropdown_stat,
        'delay_time': delay_time
    });

    code = 'tone(' + dropdown_pin + ',' + dropdown_stat + ',' + delay_time + ');\ndelay(' + delay_time + ');\n';
    return code;
};


/**
 * zum_piezo_buzzer block definition
 * @type {Object}
 */
Blockly.Blocks.zum_piezo_buzzer = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['bq', 'zum', 'buzzer'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/zum_piezo_buzzer',
    /**
    * zum_piezo_buzzer initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER'))
            .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_PIN'));
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_TONE'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DO'), '261'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_RE'), '293'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_MI'), '329'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_FA'), '349'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SOL'), '392'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_LA'), '440'],
                [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SI'), '494']
            ]), 'STAT'); //523
        this.appendValueInput('DURA', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DURATION'));

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP'));
    }
};
