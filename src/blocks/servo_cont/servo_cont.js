'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * servo_cont code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_cont = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_degree = this.getFieldValue('ROT');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = JST['servo_cont_definitions']({
        'dropdown_pin': dropdown_pin
    });
    
    
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] =JST['servo_cont_setups']({
        'dropdown_pin': dropdown_pin
    });


    var code = JST['servo_cont']({
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
    category: Blockly.LANG_CATEGORY_SERVO,
    helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/servo_cont',
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_SERVO);
        this.appendDummyInput('')
            .appendField('Servo')
            .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
            .appendField('PIN#')
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
            .appendField('ROT')
            .appendField(new Blockly.FieldDropdown([
                ['TURN CLOCKWISE', '0'],
                ['TURN COUNTERCLOCKWISE', '180'],
                ['STOPPED', '90']
            ]), 'ROT');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Delay');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Continuous rotation servo');
    }
};
