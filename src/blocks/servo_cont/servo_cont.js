'use strict';
/* global Blockly, options, profiles */
/* jshint sub:true */

/**
 * servo_cont code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_cont = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    var value_degree = this.getTitleValue('ROT');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';


    var code = this.JST['servo_cont']({
        'dropdown_pin': dropdown_pin,
        'value_degree': value_degree,
        'delay_time': delay_time
    });
    return code;
};

/**
 * servo_cont block definition
 * @type {Object}
 */
Blockly.Blocks.servo_cont = {
    category: 'Math',
    helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/servo_cont',
    init: function() {
        this.setColour('25');
        this.appendDummyInput('')
            .appendTitle('Servo')
            .appendTitle(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
            .appendTitle('PIN#')
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
            .appendTitle('ROT')
            .appendTitle(new Blockly.FieldDropdown([
                ['TURN CLOCKWISE', '0'],
                ['TURN COUNTERCLOCKWISE', '180'],
                ['STOPPED', '90']
            ]), 'ROT');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Delay');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Continuous rotation servo');
    }
};