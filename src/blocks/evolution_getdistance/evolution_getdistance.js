'use strict';       
    /* global Blockly, JST, RoboBlocks */
    //register with blockly arduino

    Blockly.Arduino.getdistance = function() {
	var code = ''; 
    var code = 'miRobot.getDistance()';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Blocks.getdistance = {
        category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
        helpUrl: RoboBlocks.URL_LED,
        init: function() {
            this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
            this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_DISTANCE'));
            this.setOutput(true, 'Number');
            this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_DISTANCE_TOOLTIP'));
        }
    };
