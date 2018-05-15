'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_turnhead code generation
  * @return {String} Code generated with block parameters
 */

Blockly.Arduino.evolution_turnhead = function() {
        var dropdown_stat = this.getFieldValue('STAT');
        //Blockly.Arduino.definitions_['include_evolution'] = JST['evolution_turnhead_include']({});
        //Blockly.Arduino.setups_['setups_evolution_turnhead'] = JST['evolution_turnhead_setups']({});
            
        var code = JST['evolution_turnhead']({
            'dropdown_stat': dropdown_stat
        });

        return code;
    };

    /**
     * turnhead block definition
     * @type {Object}
     */
    Blockly.Blocks.evolution_turnhead = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
        helpUrl: RoboBlocks.URL_LED,
        /**
         * inout_builtin_led initialization
         */
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
            this.appendDummyInput('')
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_HEAD'))
                .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_HEAD_STATE'))
                .appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_HEAD_RIGHT') || 'derecha', 'HEAD_RIGHT'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_HEAD_LEFT') || 'izquierda', 'HEAD_LEFT'],
                    [RoboBlocks.locales.getKey('LANG_EVOLUTION_HEAD_CENTER') || 'centro', 'HEAD_CENTER']
                ]), 'STAT');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_TURNHEAD_TOOLTIP'));
        }
    };

