'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * escornabot_move_bac code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_drive_bac = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_bac_definitions_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC)||'';
        var turns = Blockly.Arduino.valueToCode(this, 'TURNS', Blockly.Arduino.ORDER_ATOMIC)||'';
        var code ='';
		a = RoboBlocks.findPinMode(speed);
        code += a['code'];
        speed = a['pin'];
 
        a=RoboBlocks.findPinMode(turns);
        code+=a['code'];
        turns=a['pin'];
        
		if (turns > 0){turns= turns * (-1);}
		
        var code = JST['escorna_drive_bac']({
            'turns': turns,
            'speed': speed
        });

        return code;
    };
        
 /**
 * drive block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_drive_bac = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_DRIVE_BACK'));
			          
			this.appendValueInput('TURNS', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_TURNS'))
                .setCheck(Number);	
            this.appendValueInput('SPEED', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_SPEED'))
                .setCheck(Number);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_DRIVE_TOOLTIP'));
        }
    };

