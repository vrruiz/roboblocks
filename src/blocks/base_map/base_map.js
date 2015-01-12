'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
* base_map code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.base_map = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
    var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

    var code = '';
    value_num=value_num.split(';\n');
    for (var j in value_num){
        if (value_num[j].search('pinMode')>=0){
            code+=value_num[j]+';\n';
        }
        else{
            value_num=value_num[j];
        }
    }

    value_dmax=value_dmax.split(';\n');
    for (j in value_dmax){
        if (value_dmax[j].search('pinMode')>=0){
            code+=value_dmax[j]+';\n';
        }
        else{
            value_dmax=value_dmax[j];
        }
    }

    code += JST['base_map']({
        'value_num':value_num,
        'value_dmax':value_dmax
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.base_map = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/base_map',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.appendValueInput('NUM', Number)
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP'))
            .setCheck(Number);
        this.appendValueInput('DMAX', Number)
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_VALUE_TO'))
            .setCheck(Number);
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_BRACKET'));
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_TOOLTIP'));
    }
};
