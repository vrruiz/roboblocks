 'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.mfs_writeled = function() {
        //Blockly.Arduino.definitions_['include_evolution'] = JST['evolution_move_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var dropdown_led = this.getFieldValue('LED');
        var dropdown_switch = this.getFieldValue('SWITCH');

        var code ='';
        a = RoboBlocks.findPinMode(dropdown_led);
        code += a['code'];
        dropdown_led = a['pin']; 
        var code ='';
        a = RoboBlocks.findPinMode(dropdown_switch);
        code += a['code'];
        dropdown_switch = a['pin']; 
		
        var code = JST['mfs_writeled']({
            'dropdown_led': dropdown_led,
            'dropdown_switch': dropdown_switch
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.mfs_writeled = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_MFS);
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_MFS_WRITELED'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_MFS_LED1') ||'LED 1', 'LED_1'],
                    [RoboBlocks.locales.getKey('LANG_MFS_LED2') ||'LED 2', 'LED_2'],
                    [RoboBlocks.locales.getKey('LANG_MFS_LED3') ||'LED 3', 'LED_3'],
                    [RoboBlocks.locales.getKey('LANG_MFS_LED4') ||'LED 4', 'LED_4'],
                    [RoboBlocks.locales.getKey('LANG_MFS_LED_ALL') ||'ALL', 'LED_ALL']
                ]), 'LED');
               
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_MFS_ACTION'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_MFS_ON') || 'encendido', 'ON'],
                    [RoboBlocks.locales.getKey('LANG_MFS_OFF') || 'apagado', 'OFF']
                ]), 'SWITCH');
				
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_WRITELED_TOOLTIP'));
        }
    };

