'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * mpu6050 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_mpu6050 = function() {
    Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
    Blockly.Arduino.definitions_['define_mpu6050'] = '#include <I2Cdev.h>\n#include <MPU6050.h>\nMPU6050 accelgyro;\n';
    Blockly.Arduino.setups_['setup_mpu6050'] = JST['zum_mpu6050_setups']();

    var accel_x  = Blockly.Arduino.valueToCode(this, 'ACCEL_X', Blockly.Arduino.ORDER_ATOMIC);
    var accel_y  = Blockly.Arduino.valueToCode(this, 'ACCEL_Y', Blockly.Arduino.ORDER_ATOMIC);
    var accel_z  = Blockly.Arduino.valueToCode(this, 'ACCEL_Z', Blockly.Arduino.ORDER_ATOMIC);
    var gyro_x  = Blockly.Arduino.valueToCode(this, 'GYRO_X', Blockly.Arduino.ORDER_ATOMIC);
    var gyro_y  = Blockly.Arduino.valueToCode(this, 'GYRO_Y', Blockly.Arduino.ORDER_ATOMIC);
    var gyro_z  = Blockly.Arduino.valueToCode(this, 'GYRO_Z', Blockly.Arduino.ORDER_ATOMIC);

    var code = '';

    code += JST['zum_mpu6050']({
        'accel_x': accel_x,
        'accel_y': accel_y,
        'accel_z': accel_z,
        'gyro_x': gyro_x,
        'gyro_y': gyro_y,
        'gyro_z': gyro_z,
    });

    return code;
};

/**
 * mpu6050 block definition
 * @type {Object}
 */
Blockly.Blocks.zum_mpu6050 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['mpu6050'],
    helpUrl: RoboBlocks.URL_MPU6050,
    /**
     * mpu6050 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/mpu6050.png',
                208 * options.zoom,
                140 * options.zoom));
        this.appendValueInput('ACCEL_X')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_ACCEL_X'));
        this.appendValueInput('ACCEL_Y')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_ACCEL_Y'));
        this.appendValueInput('ACCEL_Z')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_ACCEL_Z'));
        this.appendValueInput('GYRO_X')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_GYRO_X'));
        this.appendValueInput('GYRO_Y')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_GYRO_Y'));
        this.appendValueInput('GYRO_Z')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_MPU6050_GYRO_Z'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MPU6050_TOOLTIP'));
    }
};
