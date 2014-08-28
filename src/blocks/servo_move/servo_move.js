'use strict';
/* global Blockly, options, profiles */
/* jshint sub:true */

/**
 * servo_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    value_degree = value_degree.replace('(', '').replace(')', '');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

    var code = this.JST['servo_move']({
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
    category: 'Math',
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_move',
    /**
     * servo_move initialization
     */
    init: function() {
        this.setColour('25');
        this.appendDummyInput('')
            .appendTitle('Servo')
            .appendTitle(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
            .appendTitle('PIN#')
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('DEGREE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Degrees (0~180)');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Delay');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Move between 0~180 degree');
    }
};