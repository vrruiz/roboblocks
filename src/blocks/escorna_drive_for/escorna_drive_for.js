'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_drive = function() {
        Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_for_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var speed = this.getFieldValue('SPEED');
        var turns = this.getFieldValue('TURNS');
        var code ='';
		/**** MIRAR ESTO PUEDE ESTAR MAL *****
        a = RoboBlocks.findPinMode(delay_time);
        code += a['code'];
        delay_time = a['pin'];
        *******HASTA AQUI */ 
		
        var code = JST['escorna_drive']({
            'turns': turns,
            'speed': speed,
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_drive = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_DRIVE_FORD'))

            this.appendValueInput('SPEED', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_SPEED'))
                .setCheck(Number);
			this.appendValueInput('TURNS', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_TURNS'))
                .setCheck(Number);	
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_DRIVE_TOOLTIP'));
        }
    };

