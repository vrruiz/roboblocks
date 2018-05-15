'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_buzzer_off = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_for_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        //var led = this.getFieldValue('LED');
        var code ='';
		/**** MIRAR ESTO PUEDE ESTAR MAL *****
        a = RoboBlocks.findPinMode(delay_time);
        code += a['code'];
        delay_time = a['pin'];
        *******HASTA AQUI */ 
		
        var code = JST['escorna_buzzer_off']({
        //    'led': led,
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_buzzer_off = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_BUZZER_OFF'))

            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_LED_TOOLTIP'));
        }
    };

