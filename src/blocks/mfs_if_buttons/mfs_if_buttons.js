'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_buttons code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.mfs_if_buttons = function() {

    Blockly.Arduino.definitions_['declare_var_bnum'] = 'byte buttonNumber' + ';\n';
    Blockly.Arduino.definitions_['declare_var_bact'] = 'byte buttonAction' + ';\n';
    
    var opt_button = this.getFieldValue('OPT_BTN');    
    var mode_button = this.getFieldValue('MODE_BTN');
    var code_btn = Blockly.Arduino.statementToCode(this, 'COMMANDS');
        code_btn = code_btn.replace(/&quot;/g,'"');
        code_btn=code_btn.replace(/&amp;/g,'');
 
    var code = '';
    
    
    var a = RoboBlocks.findPinMode(opt_button);
    code += a['code'];
    opt_button = a['pin'];
    
    var a = RoboBlocks.findPinMode(mode_button);
    code += a['code'];
    mode_button = a['pin'];

    code = JST['mfs_if_buttons']({
        'opt_button':opt_button,
        'mode_button':mode_button,
        'code_btn':code_btn
    });

    return code;
};

/**
 * bq_buttons block definition
 * @type {Object}
 */
Blockly.Blocks.mfs_if_buttons = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
    tags: ['buttons'],
    helpUrl: RoboBlocks.URL_BUTTONS,
    /**
    * bq_buttons initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MFS);
        
	    this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MFS_IF_BUTTONS'));
        this.appendDummyInput('')
//         .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTON'))
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_IS'))
        .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_MFS_PRESS') ||"Pulsado","BUTTON_PRESSED_IND"],
            [RoboBlocks.locales.getKey('LANG_MFS_LPRESS') ||"Pulsado largo","BUTTON_LONG_PRESSED_IND"],
            [RoboBlocks.locales.getKey('LANG_MFS_RELEASE') ||"Soltado","BUTTON_SHORT_RELEASE_IND"],
            [RoboBlocks.locales.getKey('LANG_MFS_LRELEASE') ||"Soltado largo","BUTTON_LONG_RELEASE_IND"]
            ]), 'MODE_BTN');

            
        this.appendStatementInput('COMMANDS')
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON1') ||"S1","1"], 
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON2') ||"S2","2"], 
            [RoboBlocks.locales.getKey('LANG_MFS_BUTTON3') ||"S3","3"]]), 'OPT_BTN')

        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_DO'));
        
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_TOOLTIP'));
  }
};

