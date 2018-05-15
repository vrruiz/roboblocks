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
        
    Blockly.Arduino.pulseSetup = function() {
    
        Blockly.Arduino.setups_['setups_mfs_pulse_counter'] = JST['mfs_pulse_counter_setups']({});

        var code = this.getFieldValue('COLO');                       
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
        
    Blockly.Blocks.pulseSetup = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
        helpUrl: RoboBlocks.URL_LED,
        init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MFS);
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_PULSECOUNTER'))
            .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON1') ||"BOTON1","BUTTON_1_PIN"],
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON2') ||"BOTON2","BUTTON_2_PIN"],
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON3') ||"BOTON3","BUTTON_3_PIN"], 
            ["PIN 3","OPTIONNAME"], 
            ["option","OPTIONNAME"]
            ]), "MFS_INPUT")
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_PULSECOUNTER_TRIGGER'))
            .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_MFS_PULSE_UP') ||"UP","OPTIONNAME"],
            [RoboBlocks.locales.getKey('LANG_MFS_PULSE_DOWN') ||"DOWN","OPTIONNAME"]
            ]), "MFS_TYPE")
            
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_PULSECOUNTER_WAIT'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_TOOLTIP'));
   
  }
};
        

