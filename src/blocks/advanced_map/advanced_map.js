'use strict';
/* global Blockly, JST, RoboBlocks */
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

    var code = '';

    num=num.split(';\n');
    for (var j in num){
        if (num[j].search('pinMode')>=0){
            code+=num[j]+';\n';
        }
        else{
            num=num[j];
        }
    }
    from_min=from_min.split(';\n');
    for (j in from_min){
        if (from_min[j].search('pinMode')>=0){
            code+=from_min[j]+';\n';
        }
        else{
            from_min=from_min[j];
        }
    }

    from_max=from_max.split(';\n');
    for (j in from_max){
        if (from_max[j].search('pinMode')>=0){
            code+=from_max[j]+';\n';
        }
        else{
            from_max=from_max[j];
        }
    }

    to_min=to_min.split(';\n');
    for (j in to_min){
        if (to_min[j].search('pinMode')>=0){
            code+=to_min[j]+';\n';
        }
        else{
            to_min=to_min[j];
        }
    }

    to_max=to_max.split(';\n');
    for (j in to_max){
        if (to_max[j].search('pinMode')>=0){
            code+=to_max[j]+';\n';
        }
        else{
            to_max=to_max[j];
        }
    }

    code += JST['advanced_map']({
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
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/advanced_map',
     /**
      * advanced_map initialization
      */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_MAP') )
          .setCheck(Number);
        this.appendValueInput('FROM_MIN', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_FROM') )
          .setCheck(Number);
        this.appendValueInput('FROM_MAX', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
        this.appendValueInput('TO_MIN', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TO'))
          .setCheck(Number);
        this.appendValueInput('TO_MAX', Number)
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
          .setCheck(Number);
        this.appendDummyInput('')
          .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TOOLTIP'));
    }
};
