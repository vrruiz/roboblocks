'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * servo_read_degrees code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_read_degrees = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.definitions_['define_servo'] = JST['servo_read_degrees_definitions']({
        'dropdown_pin': dropdown_pin
    });

    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = JST['servo_read_degrees_setups']({
        'dropdown_pin': dropdown_pin
    });

    var code = JST['servo_read_degrees']({
        'dropdown_pin': dropdown_pin
    });

    return code;
};

/**
 * servo_read_degrees block definition
 * @type {Object}
 */
Blockly.Blocks.servo_read_degrees = {
    category: RoboBlocks.LANG_CATEGORY_SERVO,
    tags: ['servo read degrees'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/servo_read_degrees',
    /**
    * servo_read_degrees initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES_SERVO)
        .appendField(new Blockly.FieldImage('img/blocks/bqservo02.png', 208 * options.zoom, 126 * options.zoom))
        .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES_PIN);
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.LANG_SERVO_READ_DEGREES_TOOLTIP);
    }
};
