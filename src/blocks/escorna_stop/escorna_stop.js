'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * escorna_stop code generation
  * @return {String} Code generated with block parameters
 */

Blockly.Arduino.escorna_stop = function() {
            
    var code = JST['escorna_stop']({});
    return code;
    };
        
Blockly.Blocks.escorna_stop = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ESCORNABOT'),
    tags: ['escornabot'],
    helpUrl: RoboBlocks.URL_CONTINUOUS_ROTATION_SERVO,
    init: function() {
         this.setColour(RoboBlocks.LANG_COLOUR_ESCORNABOT);
                
         this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ESCORNABOT_STOP')) //.appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom));
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setTooltip(RoboBlocks.locales.getKey('LANG_ESCORNABOT_STOP_TOOLTIP'));
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

