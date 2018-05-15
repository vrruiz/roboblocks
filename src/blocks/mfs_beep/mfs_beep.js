        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
'use strict';
        Blockly.Arduino.mfs_beep = function() {
                   
            //Blockly.Arduino.definitions_['include_evolution'] = JST['evolution_include']({});
            //Blockly.Arduino.setups_['setups_evolution_home'] = JST['evolution_home_setups']({});

			var mfs_beep = Blockly.Arduino.valueToCode(this, 'BEEP', Blockly.Arduino.ORDER_ATOMIC) || '';
            var mfs_silent = Blockly.Arduino.valueToCode(this, 'SILENT', Blockly.Arduino.ORDER_ATOMIC) || '';
            var mfs_repeat = Blockly.Arduino.valueToCode(this, 'REPEAT', Blockly.Arduino.ORDER_ATOMIC) || '';
            var mfs_loop = Blockly.Arduino.valueToCode(this, 'LOOP', Blockly.Arduino.ORDER_ATOMIC) || '';			
            var mfs_wait = Blockly.Arduino.valueToCode(this, 'WAIT', Blockly.Arduino.ORDER_ATOMIC) || '';
            
            var a;
            var code = '';

            a = RoboBlocks.findPinMode(mfs_beep);
            code += a['code'];
            mfs_beep = a['pin'];            
            a = RoboBlocks.findPinMode(mfs_silent);
            code += a['code'];
            mfs_silent = a['pin'];
            a = RoboBlocks.findPinMode(mfs_repeat);
            code += a['code'];
            mfs_repeat = a['pin'];
            a = RoboBlocks.findPinMode(mfs_loop);
            code += a['code'];
            mfs_loop = a['pin'];
            a = RoboBlocks.findPinMode(mfs_wait);
            code += a['code'];
            mfs_wait = a['pin'];

			
            code += JST['mfs_beep']({
                'mfs_beep': mfs_beep/10,
                'mfs_silent': mfs_silent/10,
                'mfs_repeat': mfs_repeat,
                'mfs_loop': mfs_loop,
                'mfs_wait': mfs_wait/10,
            });

            return code;
        };


        /**
         * bq_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.mfs_beep = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MFS'),
            tags: ['buzzer'],
            helpUrl: RoboBlocks.URL_BUZZER,
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MFS);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP'))
                    .appendField(new Blockly.FieldImage('img/blocks/mfs_buzzer.png', 100 * options.zoom, 57 * options.zoom));

                this.appendValueInput('BEEP', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP_DURATION'));
				this.appendValueInput('SILENT', Number)	
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP_SILENCE'));
               this.appendValueInput('REPEAT', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP_REPEAT'));
				this.appendValueInput('LOOP', Number)	
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP_LOOP'));
                this.appendValueInput('WAIT', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MFS_BEEP_WAIT'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MFS_BEEP_TOOLTIP'));
            }
        };//
