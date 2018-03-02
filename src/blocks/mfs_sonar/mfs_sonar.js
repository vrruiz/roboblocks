'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */
/**
 * bq_bat code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.mfs_sonar = function() {
    var mode = this.getFieldValue('MODO');
    var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
    var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    
    var a = RoboBlocks.findPinMode(mode);
    code += a['code'];
    mode = a['pin'];
    
    var a = RoboBlocks.findPinMode(echo_pin);
    code += a['code'];
    echo_pin = a['pin'];

    a = RoboBlocks.findPinMode(trigger_pin);
    code += a['code'];
    trigger_pin = a['pin'];

    //Blockly.Arduino.definitions_['define_bq_bat_tp_init'] = JST['bq_bat_definitions_tp_init']({});
    //Blockly.Arduino.definitions_['define_bq_bat_distance'] = JST['bq_bat_definitions_distance']({});
    
    if (RoboBlocks.isVariable(mode)) {
        code += JST['mfs_sonar_setups']({
            'mode': mode
        });
    } else {
        Blockly.Arduino.setups_['setup_mfs_sonar_'+echo_pin+trigger_pin] = JST['mfs_sonar_setups']({
            'mode': mode
        });
    }

    if (RoboBlocks.isVariable(echo_pin)) {
        code += JST['mfs_sonar_setups_echo']({
            'echo_pin': echo_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_mfs_sonar_1'+echo_pin+trigger_pin] = JST['mfs_sonar_setups_echo']({
            'echo_pin': echo_pin
        });
    }
    
    if (RoboBlocks.isVariable(trigger_pin)) {
        code += JST['mfs_sonar_setups_trigger']({
            'trigger_pin': trigger_pin
        });
    } else {
        Blockly.Arduino.setups_['setup_mfs_sonar_2'+trigger_pin+echo_pin] = JST['mfs_sonar_setups_trigger']({
            'trigger_pin': trigger_pin
        });
    }
    code += JST['mfs_sonar']({
        'mode': mode,
        'trigger_pin': trigger_pin,
        'echo_pin': echo_pin
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**
 * bq_bat block definition
 * @type {Object}
 */
Blockly.Blocks.mfs_sonar = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
    tags: ['bat'],
    helpUrl: RoboBlocks.URL_US,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_MFS);
        
        this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_MFS_SONAR')).appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
/*        
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_INTENSITY'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_STRONG') || 'Fuerte', 'SMOOTHING_STRONG']
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_MODERATE') || 'Moderado', 'SMOOTHING_MODERATE'],
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_NONE') || 'Ninguno', 'SMOOTHING_NONE']
            ]), 'MODO');
*/
        this.appendDummyInput('')
            .appendField(RoboBlocks.locales.getKey('LANG_MFS_RADAR_MODE'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_STRONG') || 'Fuerte', 'SMOOTHING_STRONG'],
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_MODERATE') || 'Moderado', 'SMOOTHING_MODERATE'],
                [RoboBlocks.locales.getKey('LANG_MFS_RADAR_NONE') || 'Ninguno', 'SMOOTHING_NONE']
            ]), 'MODO');

            
        this.appendValueInput('RED PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_RED_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        
        this.appendValueInput('BLUE PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_BLUE_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        
        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_RADAR_TOOLTIP'));
    }
};




