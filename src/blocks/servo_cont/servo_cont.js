'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */

/**
 * servo_cont code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_cont = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC)||'';
    var value_degree = this.getFieldValue('ROT')||'';
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC)||'';

    Blockly.Arduino.definitions_['include_servo'] = JST['servo_cont_definitions_include']({});


    Blockly.Arduino.definitions_['declare_var_servo'+dropdown_pin] = JST['servo_cont_definitions']({
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
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
    tags: ['servo'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/servo_cont',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT'))
            .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_PIN'))
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_ROT'))
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_CLOCKWISE')||'CLOCKWISE', '0'],
                [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE')||'ANTICLOCKWISE', '180'],
                [RoboBlocks.locales.getKey('LANG_SERVO_CONT_STOPPED')||'STOPPED', '90']
            ]), 'ROT');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_DELAY'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_CONT_TOOLTIP'));
    },
    isVariable: function(varValue) {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === varValue) {
                return true;
            }
        }
        return false;
    },
    onchange: function(){
        try {
            if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                this.setWarningText(RoboBlocks.locales.getKey('LANG_SERVO_WARNING'));
            } else {
                this.setWarningText(null);
            }
        } catch (e) {}
    }
};