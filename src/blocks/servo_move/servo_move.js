'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * servo_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    value_degree = value_degree.replace('(', '').replace(')', '');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = JST['servo_move_definitions']({
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
    category: Blockly.LANG_CATEGORY_SERVO,
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_move',
    /**
     * servo_move initialization
     */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_SERVO);
        this.appendDummyInput('')
            .appendField('Servo')
            .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
            .appendField('PIN#')
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('DEGREE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Degrees (0~180)');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Delay');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Move between 0~180 degree');
    }
};
