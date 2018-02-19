'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_led_off = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_for_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var led =  Blockly.Arduino.valueToCode(this, 'LED', Blockly.Arduino.ORDER_ATOMIC);
        var code ='';
       
        a = RoboBlocks.findPinMode(led);
        code += a['code'];
        led = a['pin'];
        
        var code = JST['escorna_led_off']({
            'led': led,
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_led_off = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_LED_OFF'))

            this.appendValueInput('LED', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_LED'))
                .setCheck(Number);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_LED_TOOLTIP'));
        }
    };

