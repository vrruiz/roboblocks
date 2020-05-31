'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * stepper_def code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.stepper_def = function() {
    var pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
    var pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
    var a = RoboBlocks.findPinMode(pin1);
    Blockly.Arduino.setups_['setup_stepper_pin1'] = a['code'];
    pin1 = a['pin'];
    a = RoboBlocks.findPinMode(pin2);
    Blockly.Arduino.setups_['setup_stepper_pin2'] = a['code'];
    pin2 = a['pin'];
    var pin3, pin4;
    if (this.getFieldValue('TOGGLE') === 'TRUE') {
        pin3 = Blockly.Arduino.valueToCode(this, 'PIN3', Blockly.Arduino.ORDER_ATOMIC);
        pin4 = Blockly.Arduino.valueToCode(this, 'PIN4', Blockly.Arduino.ORDER_ATOMIC);
        a = RoboBlocks.findPinMode(pin3);
        Blockly.Arduino.setups_['setup_stepper_pin3'] = a['code'];
        pin3 = a['pin'];
        a = RoboBlocks.findPinMode(pin4);
        Blockly.Arduino.setups_['setup_stepper_pin4'] = a['code'];
        pin4 = a['pin'];
    } else {
        pin3 = 0;
        pin4 = 0;
    }
    var num_steps = Blockly.Arduino.valueToCode(this, 'STEPS', Blockly.Arduino.ORDER_ATOMIC);
    var b = RoboBlocks.findPinMode(num_steps);
    Blockly.Arduino.setups_['setup_stepper_num_steps'] =  b['code'];
    num_steps = b['pin'];

    if (this.getFieldValue('TOGGLE') === 'TRUE') {
        Blockly.Arduino.definitions_['declare_var_stepper' + pin1] = 'Stepper myStepper(' + num_steps + ',' + pin1 + ',' + pin2 + ',' + pin3 + ',' + pin4 + ');\n';
    } else {
        Blockly.Arduino.definitions_['declare_var_stepper' + pin1] = 'Stepper myStepper(' + num_steps + ',' + pin1 + ',' + pin2 + ');\n';
    }
    Blockly.Arduino.definitions_['define_stepper'] = JST['stepper_def_definitions']({
        'pin1': pin1,
        'pin2': pin2
    });
    return '';
};
/**
 * stepper__def block definition
 * @type {Object}
 */
Blockly.Blocks.stepper_def = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_STEPPER'),
    tags: ['stepper'],
    helpUrl: RoboBlocks.URL_STEPPER,
    /**
     * stepper_motor initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_STEPPER);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF')).appendField(new Blockly.FieldImage('img/blocks/stepper.png', 208 * options.zoom, 100 * options.zoom));
        this.appendValueInput('STEPS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_STEPS')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_PINS')).appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN1').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_PIN1')).setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('PIN2').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_PIN2')).setAlign(Blockly.ALIGN_RIGHT);
        this.checkStepper();
        this.last_toogle = this.getFieldValue('TOGGLE');
        this.setInputsInline(false);
        //this.setPreviousStatement(true, null);
        //this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_TOOLTIP'));
    },
    checkStepper: function() {
        if (this.getFieldValue('TOGGLE') === 'TRUE') {
            try {
                this.removeInput('PIN3');
                this.removeInput('PIN4');
            } catch (e) {}
            this.appendValueInput('PIN3').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_PIN3')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('PIN4').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_STEPPER_DEF_PIN4')).setAlign(Blockly.ALIGN_RIGHT);
        } else {
            try {
                this.removeInput('PIN3');
                this.removeInput('PIN4');
            } catch (e) {}
        }
    },
    onchange: function() {
        if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
            this.checkStepper();
            this.last_toogle = this.getFieldValue('TOGGLE');
        }
    }
};