'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * servo_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['include_servo'] = JST['servo_move_definitions_include']({
        'dropdown_pin': dropdown_pin
    });
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    code += a['code'];
    dropdown_pin = a['pin'];
    var b = RoboBlocks.findPinMode(delay_time);
    code += b['code'];
    delay_time = b['pin'];
    var c = RoboBlocks.findPinMode(value_degree);
    code += c['code'];
    value_degree = c['pin'];

    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['servo_move_setups']({
            'dropdown_pin': dropdown_pin
        });
    } else {
        Blockly.Arduino.setups_['servo_move_' + dropdown_pin] = JST['servo_move_setups']({
            'dropdown_pin': dropdown_pin
        });
    }

    code += JST['servo_move']({
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
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
    tags: ['servo'],
    helpUrl: RoboBlocks.URL_SERVO,
    /**
     * servo_move initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE')).appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_PIN')).setCheck(Number);
        this.appendValueInput('DEGREE', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DEGREES'));
        this.appendValueInput('DELAY_TIME', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DELAY'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_TOOLTIP'));
    },
    isVariable: function(varValue) {
        for (var i in Blockly.Variables.allVariables()) {
            if (Blockly.Variables.allVariables()[i] === varValue) {
                return true;
            }
        }
        return false;
    },
    onchange: function() {
        // try {
        //     if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
        //         this.setWarningText(RoboBlocks.locales.getKey('LANG_SERVO_WARNING'));
        //     } else {
        //         this.setWarningText(null);
        //     }
        // } catch (e) {}
    }
};