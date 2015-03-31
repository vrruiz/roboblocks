'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

  /**
  * math_single code generation
  * @return {String} Code generated with block parameters
  */

Blockly.Arduino.math_single = function() {
    // Math operators with single operand.
    var operator = this.getFieldValue('OP');
    var arg;
    var code = '';
    var a;

    if (operator === 'NEG') {
        // Negation is a special case given its different operator precedents.
        arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_PREFIX) || '';
        a=RoboBlocks.findPinMode(arg);
        code+=a['code'];
        arg=a['pin'];
        if (arg[0] === '-') {
            // --3 is not legal in Dart.
            arg = ' ' + arg;
        }
        code += '-' + arg;
        return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
    }
    else if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
        arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
        a=RoboBlocks.findPinMode(arg);
        code+=a['code'];
        arg=a['pin'];
    }
    else if (operator === 'LOG10'){
        code ='';
    }else {
        arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
        a=RoboBlocks.findPinMode(arg);
        code+=a['code'];
        arg=a['pin'];
    }
    var PI = 3.14159;
    // First, handle cases which generate values that don't need parentheses.
    switch (operator) {
    case 'ABS':
        code += 'abs('+arg+')';
        break;
    case 'ROOT':
        code += 'sqrt(' + arg + ')';
        break;
    case 'LN':
        code += 'log(' + arg + ')';
        break;
    case 'EXP':
        code += 'exp(' + arg + ')';
        break;
    case 'POW10':
        code += 'pow(10,' + arg + ')';
        break;
    case 'SIN':
        code += 'sin(' + arg + ' / 180 * '+ PI+')';
        break;
    case 'COS':
        code += 'cos(' + arg + ' / 180 * '+ PI+')';
        break;
    case 'TAN':
        code += 'tan(' + arg + ' / 180 * '+ PI+')';
        break;
    }
    if (code) {
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }

    // Second, handle cases which generate values that may need parentheses.
    switch (operator) {
    case 'LOG10':
        arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
        a=RoboBlocks.findPinMode(arg);
        code+=a['code'];
        arg=a['pin'];
        code += 'log(' + arg + ') / log(10)';
        break;
    case 'ASIN':
        code += 'asin(' + arg + ') / '+ PI+' * 180';
        break;
    case 'ACOS':
        code += 'acos(' + arg + ') / '+ PI+' * 180';
        break;
    case 'ATAN':
        code += 'atan(' + arg + ') / '+ PI+' * 180';
        break;
    default:
        throw 'Unknown math operator: ' + operator;
    }
    return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};


Blockly.Blocks.math_single = {
    // Advanced math operators with single operand.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
    helpUrl: RoboBlocks.URL_MATH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MATH);
        this.setOutput(true, Number);
        this.appendValueInput('NUM')
            .setCheck(Number)
            .appendField(new Blockly.FieldDropdown([[RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ROOT')||'SQR ROOT', 'ROOT'],
     [RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ABSOLUTE')||'ABS', 'ABS'],
     ['-', 'NEG'],
     ['ln', 'LN'],
     ['log10', 'LOG10'],
     ['e^', 'EXP'],
     ['10^', 'POW10']]), 'OP');
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('OP');
            return Blockly.Blocks.math_single.TOOLTIPS[mode];
        });
    }
};

Blockly.Blocks.math_single.TOOLTIPS = {
    ROOT: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ROOT'),
    ABS: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ABS'),
    NEG: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_NEG'),
    LN: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LN'),
    LOG10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LOG10'),
    EXP: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_EXP'),
    POW10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_POW10')
};
