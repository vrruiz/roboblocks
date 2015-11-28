'use strict';
/* global Blockly, profiles, JST, RoboBlocks */
/* jshint sub:true */
/**
 * controls_execute code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.controls_execute = function() {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    content = content.replace(/^"/,'');
    content = content.replace(/"$/g,'');
    if (content.match(/^#include /)) {
        var include_code = JST['controls_execute']({
            'content': content
        });
        if ('define_include' in Blockly.Arduino.definitions_) {
            Blockly.Arduino.definitions_['define_include'] += include_code;
        } else {
            Blockly.Arduino.definitions_['define_include'] = include_code;
        }
    } else {
        code += JST['controls_execute']({
            'content': content
        });
    }
    return code;
};
/**
 * control_execute block definition
 * @type {Object}
 */
Blockly.Blocks.controls_execute = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    // helpUrl: RoboBlocks.URL_SERIE,
    /**
     * controls_execute initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_EXECUTE'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_EXECUTE_TOOLTIP'));
    }
};
