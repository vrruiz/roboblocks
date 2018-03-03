'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_home code generation
  * @return {String} Code generated with block parameters
 */
Blockly.Arduino.escornabot_home = function() {
            
    Blockly.Arduino.definitions_['include_escorna_home'] = JST['escorna_home_definitions_include']({});
    //Blockly.Arduino.setups_['setups_escorna_home'] = JST['escorna_home_setups']({});
    var code = ''; 
    //code += JST['evolution_home']({});
    return code;
};

/**
 * servo_cont block definition
 * @type {Object}
 */
		Blockly.Blocks.escornabot_home = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
            tags: ['evolution'],
            helpUrl: RoboBlocks.URL_ESCORNABOT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
                
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_HOME')) //.appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom));
               
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_HOME_TOOLTIP'));
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };

