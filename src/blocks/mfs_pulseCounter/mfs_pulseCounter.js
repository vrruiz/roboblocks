'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_lightintensity code generation
  * @return {String} Code generated with block parameters
 */
        
        // Source: src/blocks/base_millis/base_millis.js
        /* global Blockly, JST, RoboBlocks */
        //register with blockly arduino
        
    Blockly.Arduino.lightintensity = function() {
    
        Blockly.Arduino.setups_['setups_mfs_pulse_counter'] = JST['mfs_pulse_counter_setups']({});

        var code = this.getFieldValue('COLO');                       
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
        
    Blockly.Blocks.lightintensity = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
        helpUrl: RoboBlocks.URL_LED,
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
          //  this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LINE'));
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_INTENSITY'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_HIGH') || 'Alta', 'HIGH'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_MEDIUM') || 'Media', 'MEDIUM'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_LOW') || 'Baja', 'LOW']
                ]), 'COLO');
            this.setOutput(true, 'Number');
            this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_TOOLTIP'));
        }
    };

