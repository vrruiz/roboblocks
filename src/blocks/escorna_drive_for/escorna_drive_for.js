'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.escorna_drive_for = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_for_definitions_include']({});           
          
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
		
        var code = JST['escorna_drive_for']({
            'turns': turns,
            'speed': speed
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.escorna_drive_for = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_DRIVE_FORD'));

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

