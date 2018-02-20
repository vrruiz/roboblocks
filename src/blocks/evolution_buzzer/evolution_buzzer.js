        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
'use strict';
        Blockly.Arduino.evolution_buzzer = function() {
                   
            //Blockly.Arduino.definitions_['include_evolution'] = JST['evolution_include']({});
            //Blockly.Arduino.setups_['setups_evolution_home'] = JST['evolution_home_setups']({});

            var dropdown_note = this.getFieldValue('NOTE') || '';
			var sound_time = Blockly.Arduino.valueToCode(this, 'SOUND', Blockly.Arduino.ORDER_ATOMIC) || '';
            
            var silence_time = Blockly.Arduino.valueToCode(this, 'SILENCE', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code = '';
			/********* MIRAR ESTO QUE HACE
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];
			****** hasta aqui */
			
            code += JST['evolution_buzzer']({
                'dropdown_note': dropdown_note,
                'sound_time': sound_time,
                'silence_time': silence_time
            });

            return code;
        };


        /**
         * bq_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.evolution_buzzer = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_EVOLUTION'),
            tags: ['buzzer'],
            helpUrl: RoboBlocks.URL_BUZZER,
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_EVOLUTION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));

                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TONE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DO') || 'DO', '261'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_RE') || 'RE', '293'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_MI') || 'MI', '329'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_FA') || 'FA', '349'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SOL') || 'SOL', '392'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_LA') || 'LA', '440'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SI') || 'SI', '494']
                    ]), 'NOTE') //523
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('SOUND', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_BUZZER_DURATION'));
				this.appendValueInput('SILENCE', Number)	
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_EVOLUTION_BUZZER_SILENCE'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TOOLTIP'));
            }
        };//
