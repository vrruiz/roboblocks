'use strict';        
        Blockly.Arduino.getlight = function() {
            // Boolean values true and false.
            var code = (this.getFieldValue('DIRE') === 'RIGHT') ? 'miRobot.getLight(RIGHT)' : 'miRobot.getLight(LEFT)';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        
        Blockly.Blocks.getlight = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_EVOLUTION_RIGHT') || 'Derecha', 'RIGHT'],
                        [RoboBlocks.locales.getKey('LANG_EVOLUTION_LEFT') || 'Izquierda', 'LEFT']
                    ]), 'DIRE');
                this.setOutput(true, 'Number');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_EVOLUTION_GET_LIGHT_TOOLTIP'));
            }
        };

