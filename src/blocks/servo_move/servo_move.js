'use strict';
/* global Blockly, options, JST, RoboBlocks, profiles */
/* jshint sub:true */

/**
 * servo_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['include_servo'] = JST['servo_move_definitions_include']({
        'dropdown_pin': dropdown_pin
    });

    Blockly.Arduino.definitions_['define_servo'+dropdown_pin] = JST['servo_move_definitions']({
        'dropdown_pin': dropdown_pin
    });

    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] =JST['servo_move_setups']({
        'dropdown_pin': dropdown_pin
    });

    var code = JST['servo_move']({
        'dropdown_pin': dropdown_pin,
        'value_degree': value_degree,
        'delay_time': delay_time
    });

    return code;
};

/**
 * servo_move block definition
 * @type {Object}
 */
Blockly.Blocks.servo_move = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
    tags: ['servo'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/servo_move',
    /**
     * servo_move initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE'))
            .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_PIN'))
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('DEGREE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DEGREES'));
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DELAY'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_TOOLTIP'));
    }
};
