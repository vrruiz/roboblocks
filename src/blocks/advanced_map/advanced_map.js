'use strict';
/* global Blockly, JST */
/* jshint sub:true */

/**
 * advanced_map code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.advanced_map = function() {
    var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var from_min = Blockly.Arduino.valueToCode(this, 'FROM_MIN', Blockly.Arduino.ORDER_NONE);
    var from_max = Blockly.Arduino.valueToCode(this, 'FROM_MAX', Blockly.Arduino.ORDER_NONE);
    var to_min = Blockly.Arduino.valueToCode(this, 'TO_MIN', Blockly.Arduino.ORDER_NONE);
    var to_max = Blockly.Arduino.valueToCode(this, 'TO_MAX', Blockly.Arduino.ORDER_NONE);
    
    var code = JST['advanced_map']({
        'num' : num,
        'from_min' : from_min,
        'from_max' : from_max,
        'to_min' : to_min,
        'to_max' : to_max
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * advanced_map block definition
 * @type {Object}
 */
Blockly.Blocks.advanced_map = {
    category: Blockly.LANG_CATEGORY_MATH,
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/advanced_map',
     /**
      * advanced_map initialization
      */
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
          .appendField('Map ')
          .setCheck(Number);
        this.appendValueInput('FROM_MIN', Number)
          .appendField('From [')
          .setCheck(Number);
        this.appendValueInput('FROM_MAX', Number)
          .appendField('-')
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(']');
        this.appendValueInput('TO_MIN', Number)
          .appendField('to [')
          .setCheck(Number);
        this.appendValueInput('TO_MAX', Number)
          .appendField('-')
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(']');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Re-maps a number from [0-1024] to another.');
    }
};
