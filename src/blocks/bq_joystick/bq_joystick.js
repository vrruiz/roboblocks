'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_joystick code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_joystick = function() {
    var pinx = Blockly.Arduino.valueToCode(this,'PINX', Blockly.Arduino.ORDER_ATOMIC);
    var piny = Blockly.Arduino.valueToCode(this,'PINY', Blockly.Arduino.ORDER_ATOMIC);
    var pinbutton = Blockly.Arduino.valueToCode(this,'PINBUTTON', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['declare_var _internal_readJoystick_array_'] = 'int _internal_readJoystick_array_'+pinx+'[3];\n';
    Blockly.Arduino.definitions_['define_joystick'] = JST['bq_joystick_definitions']({
        'pinx': pinx,
        'piny': piny,
        'pinbutton': pinbutton
    });

    Blockly.Arduino.setups_['setup_joystick'] = JST['bq_joystick_setups']({
        'pinbutton': pinbutton
    });

    var array= Blockly.Arduino.valueToCode(this,'POS', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['bq_joystick']({
        'pinx': pinx,
        'array':array
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_joystick block definition
 * @type {Object}
 */
Blockly.Blocks.bq_joystick = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'joystick'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_joystick',
    /**
     * bq_joystick initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK'))
            .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom));

        // this.appendValueInput('POS')
        //     .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_POSITION'))
        //     .setAlign(Blockly.ALIGN_RIGHT)
        //     .setCheck(Number);


        this.appendValueInput('PINX')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_X'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);

        this.appendValueInput('PINY')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_Y'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);

        this.appendValueInput('PINBUTTON')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_BUTTON'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);

        this.setOutput(true, Number);
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_TOOLTIP'));
    }
};
