'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */
/**
 * evolution_stop code generation
  * @return {String} Code generated with block parameters
 */

Blockly.Arduino.evolution_stop = function() {
            
    var code = JST['evolution_stop']({});
    return code;
    };
        
Blockly.Blocks.evolution_stop = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
    tags: ['evolution'],
    helpUrl: RoboBlocks.URL_CONTINUOUS_ROTATION_SERVO,
    init: function() {
         this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
                
         this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_STOP')) //.appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom));
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_STOP_TOOLTIP'));
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

