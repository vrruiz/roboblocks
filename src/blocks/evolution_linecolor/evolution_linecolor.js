'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_linecolor code generation
  * @return {String} Code generated with block parameters
 */
        
        // Source: src/blocks/base_millis/base_millis.js
        /* global Blockly, JST, RoboBlocks */
        //register with blockly arduino
        
     Blockly.Arduino.linecolor = function() {
        // Boolean values true and false.
       var code = (this.getFieldValue('COLO') === 'WHITE') ? 'false' : 'true';
       return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
        
    Blockly.Blocks.linecolor = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
        helpUrl: RoboBlocks.URL_LED,
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LINE_COLOR'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_COLOR_WHITE') || 'Blanco', 'WHITE'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_COLOR_BLACK') || 'Negro', 'BLACK']
                ]), 'COLO');
            this.setOutput(true, 'Number');
            this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LINE_TOOLTIP'));
        }
    };

