        
        // Source: src/blocks/base_millis/base_millis.js
        /* global Blockly, JST, RoboBlocks */
        //register with blockly arduino
        'use strict';
        Blockly.Arduino.getline = function() {
            // Boolean values true and false.
            var code = (this.getFieldValue('DIRE') === 'RIGHT') ? 'miRobot.getLine(RIGHT)' : 'miRobot.getLine(LEFT)';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        
        Blockly.Blocks.getline = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LINE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_EVOLUTION_RIGHT') || 'Derecha', 'RIGHT'],
                        [RoboBlocks.locales.getKey('LANG_EVOLUTION_LEFT') || 'Izquierda', 'LEFT']
                    ]), 'DIRE');
                this.setOutput(true, 'Number');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LINE_TOOLTIP'));
            }
        };

