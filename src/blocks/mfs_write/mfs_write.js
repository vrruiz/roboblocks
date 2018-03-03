'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_move code generation
  * @return {String} Code generated with block parameters
 */
 
    Blockly.Arduino.mfs_write = function() {
        //Blockly.Arduino.definitions_['include_escornabot'] = JST['escorna_drive_for_include']({});           
        //Blockly.Arduino.setups_['setups_evolution_move'] = JST['evolution_move_setups']({});
        var a ='';
        var pin =  Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        var code ='';
       
        a = RoboBlocks.findPinMode(pin);
        code += a['code'];
        text = a['pin'];
        
        var code = JST['mfs_write']({
            'text': text,
        });

        return code;
    };
        
 /**
 * move block definition
 * @type {Object}
 */
    Blockly.Blocks.mfs_write = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
        helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_MFS);
			this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MFS_WRITE'))
			    .appendField(new Blockly.FieldImage('img/blocks/mfs_digit.png', 336*options.zoom, 88*options.zoom));


            this.appendValueInput('TEXT', String)
                .appendField(RoboBlocks.locales.getKey('LANG_MFS_TEXT'))
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_WRITE_TOOLTIP'));
        }
    };

