'use strict';
/* global Blockly, JST, RoboBlocks */
/**
 * pca9685_set_pwm code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.pca9685_set_pwm = function() {
    var servo_num = Blockly.Arduino.valueToCode(this, 'SERVO_NUM', Blockly.Arduino.ORDER_NONE) || '';
    var servo_angle = Blockly.Arduino.valueToCode(this, 'SERVO_ANGLE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
    var code = '';
    var a=RoboBlocks.findPinMode(servo_num);
    code+=a['code'];
    servo_num=a['pin'];
    a=RoboBlocks.findPinMode(servo_angle);
    code+=a['code'];
    servo_angle=a['pin'];
    code += JST['pca9685_set_pwm']({
        'servo_num': servo_num,
        'servo_angle': servo_angle
    });
    return code;
};
Blockly.Blocks.pca9685_set_pwm = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
    helpUrl: RoboBlocks.URL_SERVO,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
        this.appendValueInput('SERVO_NUM').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM'));
        this.appendValueInput('SERVO_ANGLE').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM_ANGLE'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP'));
    },

};