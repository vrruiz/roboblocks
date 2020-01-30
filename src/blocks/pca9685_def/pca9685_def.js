'use strict';
/* global Blockly, JST, options, RoboBlocks */
/* jshint sub:true */
/**
 * pca9685_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.pca9685_def = function() {
    var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
    var servo_freq = this.getFieldValue('SERVO_FREQ');
    var servo_pos0 = this.getFieldValue('SERVO_POS0');
    var servo_pos180 = this.getFieldValue('SERVO_POS180');
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
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_FREQ'))
            .appendField(new Blockly.FieldTextInput('60', Blockly.Blocks.math_number.validator), 'SERVO_FREQ')
            .appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MIN'))
            .appendField(new Blockly.FieldTextInput('150', Blockly.Blocks.math_number.validator), 'SERVO_POS0')
            .appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MAX'))
            .appendField(new Blockly.FieldTextInput('600', Blockly.Blocks.math_number.validator), 'SERVO_POS180');
        this.appendValueInput('ADDRESS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_ADDRESS')).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_TOOLTIP'));
    }
};
