 'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.evolution_move = function() {
        //Blockly.Arduino.definitions_['include_evolution'] = JST['evolution_move_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var dropdown_speed = this.getFieldValue('SPEED');
        var dropdown_dire = this.getFieldValue('DIRE');
        var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC)||'';
        var code ='';
        a = RoboBlocks.findPinMode(delay_time);
        code += a['code'];
        delay_time = a['pin']; 
		
        var code = JST['evolution_move']({
            'dropdown_dire': dropdown_dire,
            'dropdown_speed': dropdown_speed,
            'delay_time':delay_time
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.evolution_move = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_MOVE'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_FRONT') || 'Adelante', 'fordward'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_BACK') || 'Atrás', 'backward'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_RIGHT') || 'Derecha', 'right'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_LEFT') || 'Izquierda', 'left']
                ]), 'DIRE');
               
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_SPEED'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_SPEED_FAST') || 'rápida', 'HIGH_SPEED'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_SPEED_MEDIUM') || 'media', 'MEDIUM_SPEED'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_SPEED_LOW') || 'lenta', 'LOW_SPEED']
                ]), 'SPEED');
            this.appendValueInput('DELAY_TIME', Number)
                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_WAIT'))
                .setCheck(Number);
				
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_MOVE_TOOLTIP'));
        }
    };

