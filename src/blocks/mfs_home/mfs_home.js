'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * escorna_home code generation
  * @return {String} Code generated with block parameters
 */
Blockly.Arduino.escorna_home = function() {
            
    Blockly.Arduino.definitions_['include_mfs_home'] = JST['mfs_home_definitions_include']({});
    Blockly.Arduino.setups_['setups_mfs_home'] = JST['mfs_home_setups']({});
    var code = ''; 
    //code += JST['escorna_home']({});
    return code;
};

/**
 *  * @type {Object}
 */
		Blockly.Blocks.escorna_home = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
            tags: ['MultiFunctionShield'],
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MFS);
                
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MFS_HOME')) //.appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom));
               
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_HOME_TOOLTIP'));
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

