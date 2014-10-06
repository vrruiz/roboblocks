'use strict';
/* global Blockly, options, profiles, JST */
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
    category: Blockly.LANG_CATEGORY_SERVO,
    tags: ['servo read degrees'],
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_read_degrees',
    /**
    * servo_read_degrees initialization
    */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_SERVO);
        this.appendDummyInput('')
        .appendField('Servo')
        .appendField(new Blockly.FieldImage('img/blocks/bqservo02.png', 208 * options.zoom, 126 * options.zoom))
        .appendField('PIN#')
        .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Read Degrees');
        this.setOutput(true, Number);
        this.setTooltip('Returns that degree with the last servo move.');
    }
};
