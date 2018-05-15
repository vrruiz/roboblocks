'use strict';       
    /* global Blockly, JST, RoboBlocks */
    //register with blockly arduino

    Blockly.Arduino.getpot = function() {
    var code = 'analogRead(POT_PIN)';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Blocks.getpot = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
        helpUrl: RoboBlocks.URL_LED,
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_MFS);
            this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_MFS_GET_POTENTIOMETER'));
            this.setOutput(true, 'Number');
            this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_GET_POTENTIOMETER_TOOLTIP'));
        }
    };
