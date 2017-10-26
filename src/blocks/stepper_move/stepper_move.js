'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * stepper_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.stepper_move = function() {
    var value_spr = Blockly.Arduino.valueToCode(this, 'SPR', Blockly.Arduino.ORDER_ATOMIC);
    var pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
    var pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
    var pin3 = Blockly.Arduino.valueToCode(this, 'PIN3', Blockly.Arduino.ORDER_ATOMIC);
    var pin4 = Blockly.Arduino.valueToCode(this, 'PIN4', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
    var value_steps = Blockly.Arduino.valueToCode(this, 'STEPS', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['include_stepper'] = JST['stepper_move_definitions_include']({
        'pin1': pin1
    });
    var code = '';
    var a = RoboBlocks.findPinMode(value_spr);
    code += a['code'];
    value_spr = a['pin'];
    var b = RoboBlocks.findPinMode(pin1);
    code += b['code'];
    pin1 = b['pin'];
    var c = RoboBlocks.findPinMode(pin2);
    code += c['code'];
    pin2 = c['pin'];
    var d = RoboBlocks.findPinMode(pin3);
    code += d['code'];
    pin3 = d['pin'];
    var e = RoboBlocks.findPinMode(pin4);
    code += e['code'];
    pin4 = e['pin'];
    var f = RoboBlocks.findPinMode(value_steps);
    code += f['code'];
    value_steps = f['pin'];
    var g = RoboBlocks.findPinMode(value_speed);
    code += g['code'];
    value_speed = g['pin'];

    if (RoboBlocks.isVariable(pin1)) {
        code += JST['stepper_move_setups']({
            'spr': value_spr,
            'pin1': pin1,
            'pin2': pin2,
            'pin3': pin3,
            'pin4': pin4
        });
    } else {
        Blockly.Arduino.setups_['stepper_move_' + pin1] = JST['stepper_move_setups']({
            'spr': value_spr,
            'pin1': pin1,
            'pin2': pin2,
            'pin3': pin3,
            'pin4': pin4
        });
    }

    code += JST['stepper_move']({
        'pin1': pin1,
        'value_speed': value_speed,
        'value_steps': value_steps
    });
    return code;
};
/**
 * stepper_move block definition
 * @type {Object}
 */
Blockly.Blocks.stepper_move = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
    tags: ['servo'],
    helpUrl: RoboBlocks.URL_SERVO,
    /**
     * stepper_move initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE')).appendField(new Blockly.FieldImage('img/blocks/stepper.png', 208 * options.zoom, 126 * options.zoom)).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('SPR', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SPR')).setAlign(Blockly.ALIGN_RIGHT);
        //this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PINS')).appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN1').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN1')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN2').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN2')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN3').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN3')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN4').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN4')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('SPEED', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SETSPEED'));
        this.appendValueInput('STEPS', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_STEP'));
        //this.checkStepper();
        //this.last_toggle = this.getFieldValue('TOGGLE');
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_TOOLTIP'));
    },
    //checkStepper: function() {
    //    if (this.getFieldValue('TOGGLE') === 'TRUE') {
    //        try {
    //            this.removeInput('PIN3');
    //            this.removeInput('PIN4');
    //        } catch (e) {}
    //        try {
    //            this.removeInput('SPEED');
    //            this.removeInput('STEPS');
    //        } catch (e) {}
    //        this.appendValueInput('PIN3').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN3')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    //        this.appendValueInput('PIN4').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN4')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    //        this.appendValueInput('SPEED').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SETSPEED')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    //        this.appendValueInput('STEPS').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_STEP')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    //    } else {
    //        try {
    //            this.removeInput('PIN3');
    //            this.removeInput('PIN4');
    //        } catch (e) {}
    //    }
    //},
    isVariable: function(varValue) {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === varValue) {
                return true;
            }
        }
        return false;
    },
    onchange: function() {
        //if (this.getFieldValue('TOGGLE') !== this.last_toggle) {
        //    this.checkStepper();
        //    this.last_toggle = this.getFieldValue('TOGGLE');
        //}
        // try {
        //     if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
        //         this.setWarningText(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_WARNING'));
        //     } else {
        //         this.setWarningText(null);
        //     }
        // } catch (e) {}
    }
};