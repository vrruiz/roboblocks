'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_turn_lefA = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_turn_lef_definitions_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        var turns = Blockly.Arduino.valueToCode(this, 'TURNS', Blockly.Arduino.ORDER_ATOMIC);
        var code ='';
        a = RoboBlocks.findPinMode(speed);
        code += a['code'];
        speed = a['pin'];
 
        a=RoboBlocks.findPinMode(turns);
        code+=a['code'];
        turns=a['pin'];
        
        if (turns > 0){turns= turns * (-1);}
		
        var code = JST['escorna_turn_lefA']({
            'turns': turns,
            'speed': speed,
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_turn_lefA = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_TURNS_LEFT'))
            
			this.appendValueInput('TURNS', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_TURNSA'))
                .setCheck(Number);	
            this.appendValueInput('SPEED', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_SPEED'))
                .setCheck(Number);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_TURN_TOOLTIP'));
        }
    };

