'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * pca9685_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.pca9685_def = function() {
    var servo_type = this.getFieldValue('SERVO_TYPE');
    var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
    var servo_freq, servo_pos0, servo_pos180;
    //var servo_freq = this.getFieldValue('SERVO_FREQ');
    //var servo_pos0 = this.getFieldValue('SERVO_POS0');
    //var servo_pos180 = this.getFieldValue('SERVO_POS180');
    switch (servo_type) {
    case 'S3003':
        servo_freq = 33; //30ms
        servo_pos0 = 68; //0,5ms
        servo_pos180 = 405; //3ms
        break;
    case 'S3004':
        servo_freq = 50; //20ms
        servo_pos0 = 61; //0,3ms
        servo_pos180 = 471; //2,3ms
        break;
    case 'HXT900':
        servo_freq = 50; //20ms
        servo_pos0 = 92; //0,45ms
        servo_pos180 = 501; //2,45ms
        break;
    case 'Hitec':
        servo_freq = 50; //20ms
        servo_pos0 = 184; //0,9ms
        servo_pos180 = 430; //2,1ms
        break;
    case 'TowerPro':
        servo_freq = 50; //20ms
        servo_pos0 = 205; //1ms
        servo_pos180 = 409; //2ms
        break;
    default:
        servo_freq = 50;
        servo_pos0 = 150;
        servo_pos180 = 500;
    }
    Blockly.Arduino.definitions_['define_pca9685'] = JST['pca9685_def_definitions']({
        'servo_pos0': servo_pos0,
        'servo_pos180': servo_pos180
    });
    Blockly.Arduino.definitions_['declare_var_pca9685'] = JST['pca9685_def_declare']({
        'address': address
    });
    Blockly.Arduino.setups_['setup_lcd_'] = JST['pca9685_def_setups']({
        'servo_freq': servo_freq
    });
    return '';
};
/**
 * pca9685_def block definition
 * @type {Object}
 */
Blockly.Blocks.pca9685_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
    tags: ['servo'],
    helpUrl: RoboBlocks.URL_SERVO,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF')).appendField(new Blockly.FieldImage('img/blocks/pca9685.png', 208 * options.zoom, 100 * options.zoom));
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_SERVO'))
            .appendField(new Blockly.FieldDropdown([
                ['Futaba S3003', 'S3003'],
                ['Futaba S3004', 'S3004'],
                ['Hextronik HXT900', 'HXT900'],
                ['Hitec', 'Hitec'],
                ['TowerPro', 'TowerPro']
            ]), 'SERVO_TYPE');
            //.appendField(new Blockly.FieldTextInput('60', Blockly.Blocks.math_number.validator), 'SERVO_FREQ')
            //.appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MIN'))
            //.appendField(new Blockly.FieldTextInput('150', Blockly.Blocks.math_number.validator), 'SERVO_POS0')
            //.appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MAX'))
            //.appendField(new Blockly.FieldTextInput('600', Blockly.Blocks.math_number.validator), 'SERVO_POS180');
        this.appendValueInput('ADDRESS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_ADDRESS')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_TOOLTIP'));
    }
};
