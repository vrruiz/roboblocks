'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_buttons code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.mfs_buttons = function() {

    //Blockly.Arduino.setups_['setups_mfs_buttons'] = JST['mfs_buttons_setups']({});
 //   Blockly.Arduino.definitions_['include_mfs_buttons'] = JST['mfs_buttons_definitions_include']({});
    Blockly.Arduino.definitions_['declare_var_btn'] = 'byte btn' + ';\n';



    var code_btn = Blockly.Arduino.statementToCode(this, 'BUTN1');
    code_btn=code_btn.replace(/&quot;/g,'"');
    code_btn=code_btn.replace(/&amp;/g,'');
    var code = '';

    code = JST['mfs_buttons']({
     'code_btn': code_btn
    });

    return code;
};

/**
 * bq_buttons block definition
 * @type {Object}
 */
Blockly.Blocks.mfs_buttons = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
    tags: ['buttons'],
    helpUrl: RoboBlocks.URL_BUTTONS,
    /**
    * bq_buttons initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MFS);
        
        this.appendDummyInput('')
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS'))
        .appendField(new Blockly.FieldImage('img/blocks/mfs_key.png', 336*options.zoom, 88*options.zoom));
        
        this.appendStatementInput('BUTN1')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_BUTTON'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_BUTTONS_TOOLTIP'));
    }
};
