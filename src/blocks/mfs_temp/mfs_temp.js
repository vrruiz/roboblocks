'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_bat code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.mfs_temp = function() {
    var pin_mode = this.getFieldValue('MODO');
    var code = '';
    
    var a = RoboBlocks.findPinMode(pin_mode);
    code += a['code'];
    pin_mode = a['pin'];
    
    
    if (RoboBlocks.isVariable(pin_mode)) {
        code += JST['mfs_temp_setups']({
            'pin_mode': pin_mode
        });
    } else {
        Blockly.Arduino.setups_['setup_mfs_temp_'] = JST['mfs_temp_setups']({
            'pin_mode': pin_mode
        });
    }

    var code = 'MFS.getLM35Data()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * bq_bat block definition
 * @type {Object}
 */
Blockly.Blocks.mfs_temp = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
    tags: ['bat'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MFS);

        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_TEMP'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_STRONG') || 'Fuerte', 'SMOOTHING_STRONG'],
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_MODERATE') || 'Moderado', 'SMOOTHING_MODERATE'],
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_NONE') || 'Ninguno', 'SMOOTHING_NONE']
            ]), 'MODO');
            
        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_TEMP_TOOLTIP'));
    }
};




