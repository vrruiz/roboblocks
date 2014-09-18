/*! roboblocks - v0.0.1 - 2014-09-18
 * http://github.com/bq/roboblock
 * Copyright (c) 2014 bq; Licensed  */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'blockly', 'blockly.blocks', 'blockly.lang'], factory);
    } else {
        factory(_, window.Blockly, window.Blocks, window.BlocklyLang);
    }
}(function(_, Blockly, Blocks, BlocklyLang) {
    var load = function(options) {
        // Source: src/blockly.extensions.js
        /* global Blockly */
        /* jshint sub:true */

        /**
         * Generates toolbox XML with all blocks defined in Blockly.Blocks
         * @return {String} Blockly toolbox XML
         */
        Blockly.createToolbox = function() {

            var blocks = {};

            for (var block in this.Blocks) {
                // important check that this is objects own property 
                // not from prototype prop inherited
                if (this.Blocks.hasOwnProperty(block) && this.Blocks[block] instanceof Object && this.Blocks[block].category) {
                    var category = this.Blocks[block].category;
                    blocks[category] = blocks[category] || [];
                    blocks[category].push(block);
                }
            }

            var toolbox = '<xml id="toolbox" style="display: none">';

            var categoryItem = function(type) {
                toolbox += '<block type="' + type + '"></block>';
            };

            for (block in blocks) {

                if (blocks.hasOwnProperty(block)) {
                    toolbox += '<category name="' + block + '">';
                    blocks[block].forEach(categoryItem);
                    toolbox += '</category>';
                }

            }
            toolbox += '</xml>';

            return toolbox;
        };
        // Source: src/constants.js
        /* global RoboBlocks */

        RoboBlocks.GITHUB_SRC_URL = 'https://github.com/bq/roboblocks/tree/master/src/';
        // Source: src/profiles.js
        /*
         * Arduino Board profiles
         */
        var profiles = {
            arduino: {
                description: 'Standard-compatible board',
                digital: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11'],
                    ['12', '12'],
                    ['13', '13'],
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5']
                ],
                bluetooth: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11']
                ],
                pwm: [
                    ['#3', '3'],
                    ['#5', '5'],
                    ['#6', '6'],
                    ['#9', '9'],
                    ['#10', '10'],
                    ['#11', '11']
                ],
                analog: [
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5']
                ],
                serial: 9600,
            },
            'arduino_mega': {
                description: 'Mega-compatible board',
            },
        };


        // Set default profile to arduino standard-compatible board
        profiles['default'] = profiles.arduino;

        // Source: tmp/jst.js
        // Source: tmp/jst.js
        this["JST"] = this["JST"] || {};

        this["JST"]["math_random"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'random(' +
                    __e(value_num) +
                    ', ' +
                    __e(value_dmax) +
                    ')';

            }
            return __p
        };

        this["JST"]["other_random"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'random(' +
                    __e(value_num) +
                    ', ' +
                    __e(value_dmax) +
                    ')';

            }
            return __p
        };

        this["JST"]["servo_cont"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servo_' +
                    __e(dropdown_pin) +
                    '.write(' +
                    __e(value_degree) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_move"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servo_' +
                    __e(dropdown_pin) +
                    '.write(' +
                    __e(value_degree) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n';

            }
            return __p
        };
        var JST = this.JST;

        // Source: src/blocks/math_random/math_random.js
        /* global Blockly, JST, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.math_random = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '10';
            value_dmax = value_dmax.replace('(', '').replace(')', '');
            var code = JST['math_random']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });
            return [code, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.math_random = {
            category: 'Math',
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_random',
            init: function() {
                this.appendValueInput('NUM', Number)
                    .appendField('Random between')
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(' and ')
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip('Assign a random number');
            }
        };
        // Source: src/blocks/other_random/other_random.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        var other_random = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '10';
            value_dmax = value_dmax.replace('(', '').replace(')', '');
            var code = JST['other_random']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });
            return [code, Blockly.Arduino.ORDER_NONE];
        };

        //register with blockly arduino
        Blockly.Arduino.other_random = other_random;

        Blockly.Blocks.other_random = {
            category: 'Math',
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/other_random',
            init: function() {
                this.appendValueInput('NUM', Number)
                    .appendField('Random between')
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(' and ')
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip('Assign a random number');
            }
        };
        // Source: src/blocks/servo_cont/servo_cont.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * servo_cont code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_cont = function() {
            var dropdown_pin = this.getTitleValue('PIN');
            var value_degree = this.getTitleValue('ROT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

            delay_time = delay_time.replace('(', '').replace(')', '');

            Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
            Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
            Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';


            var code = JST['servo_cont']({
                'dropdown_pin': dropdown_pin,
                'value_degree': value_degree,
                'delay_time': delay_time
            });
            return code;
        };

        /**
         * servo_cont block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_cont = {
            category: 'Math',
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_cont',
            init: function() {
                this.setColour('25');
                this.appendDummyInput('')
                    .appendField('Servo')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('ROT')
                    .appendField(new Blockly.FieldDropdown([
                        ['TURN CLOCKWISE', '0'],
                        ['TURN COUNTERCLOCKWISE', '180'],
                        ['STOPPED', '90']
                    ]), 'ROT');
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Delay');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Continuous rotation servo');
            }
        };
        // Source: src/blocks/servo_move/servo_move.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * servo_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_move = function() {
            var dropdown_pin = this.getTitleValue('PIN');
            var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
            value_degree = value_degree.replace('(', '').replace(')', '');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

            delay_time = delay_time.replace('(', '').replace(')', '');

            Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
            Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
            Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

            var code = JST['servo_move']({
                'dropdown_pin': dropdown_pin,
                'value_degree': value_degree,
                'delay_time': delay_time
            });

            return code;
        };

        /**
         * servo_move block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_move = {
            category: 'Math',
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.appendDummyInput('')
                    .appendField('Servo')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.appendValueInput('DEGREE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Degrees (0~180)');
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Delay');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('Move between 0~180 degree');
            }
        };
    }
    var RoboBlocks = {
        load: load
    };
    if (typeof define === 'function' && define.amd) {
        return RoboBlocks;
    } else {
        window.RoboBlocks = RoboBlocks;
    }
}));
