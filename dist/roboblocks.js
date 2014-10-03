/*! roboblocks - v0.0.1 - 2014-10-03
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

        this["JST"]["advanced_conversion"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(value_num) +
                    ',' +
                    __e(convertion);

            }
            return __p
        };

        this["JST"]["base_delay"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'delay(' +
                    __e(delay_time) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["bq_bat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Distance' +
                    __e(red_pin) +
                    '()';

            }
            return __p
        };

        this["JST"]["bq_bat_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqBAT\nlong Distance' +
                    __e(red_pin) +
                    '()\n{\n  long microseconds = TP_init' +
                    __e(red_pin) +
                    '();\n  long distance;\n  distance = microseconds/29/2;\n  return distance;\n}\n\nlong TP_init' +
                    __e(red_pin) +
                    '()\n{\n  digitalWrite( ' +
                    __e(blue_pin) +
                    ' , LOW);\n  delayMicroseconds(2);\n  digitalWrite( ' +
                    __e(blue_pin) +
                    ' , HIGH);\n  delayMicroseconds(10);\n  digitalWrite( ' +
                    __e(blue_pin) +
                    ' , LOW);\n  long microseconds = pulseIn( ' +
                    __e(red_pin) +
                    ' ,HIGH);\n  return microseconds;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bat_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(red_pin) +
                    ' , INPUT );\n  pinMode( ' +
                    __e(blue_pin) +
                    ' , OUTPUT );';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_slave"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'char recvChar_' +
                    __e(dropdown_pin) +
                    ';\n while(1) {\n  if(blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.available()) { //Check if there is any data sent from the remote bluetooth\n    recvChar_' +
                    __e(dropdown_pin) +
                    ' = blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.read();\n    Serial.print(recvChar_' +
                    __e(dropdown_pin) +
                    ');\n}\n  if(Serial.available()){ //Check if there is any data sent from the local serial terminal\n    recvChar_' +
                    __e(dropdown_pin) +
                    ' = Serial.read();\n    blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(recvChar_' +
                    __e(dropdown_pin) +
                    ');\n\t}\n }\n';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_slave_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <SoftwareSerial.h>\n\nSoftwareSerial blueToothSerial_' +
                    __e(dropdown_pin) +
                    '(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(NextPIN) +
                    ');\n\nvoid setupBlueToothConnection_' +
                    __e(dropdown_pin) +
                    '()\n{\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.begin(38400); //Set Bluetooth BaudRate to default baud rate 38400\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+STWMOD=0\\\\r\\\\n\'); //Set the bluetooth work in slave mode\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+STNA=' +
                    __e(name) +
                    '\\\\r\\\\n\'); //Set the bluetooth name as ' +
                    __e(name) +
                    '\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+STPIN=' +
                    __e(pincode) +
                    '\\\\r\\\\n\'); //Set SLAVE pincode\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+STOAUT=1\\\\r\\\\n\'); //Auto-connection should be forbidden\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+STAUTO=0\\\\r\\\\n\');\n  delay(2000); //This delay is required\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.print(\'\\\\r\\\\n+INQ=1\\\\r\\\\n\'); //Make the slave bluetooth inquirable\n  Serial.println(\'The slave bluetooth is inquirable!\');\n  delay(2000); //This delay is required\n  blueToothSerial_' +
                    __e(dropdown_pin) +
                    '.flush();\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_slave_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(9600);\n  pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n  pinMode(' +
                    __e(NextPIN) +
                    ', OUTPUT);\n  setupBlueToothConnection_' +
                    __e(dropdown_pin) +
                    '();\n\n';

            }
            return __p
        };

        this["JST"]["bq_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')\n';

            }
            return __p
        };

        this["JST"]["bq_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["bq_buttons"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  adc_key_in =analogRead(+dropdown_pin+);\n  key = get_key(adc_key_in);\n  if (key != oldkey)\n  {\n    delay(50);\n    adc_key_in = analogRead(+dropdown_pin+);\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      oldkey = key;\n      if (key >=0){\n        switch(key)\n        {\n          case 0:\n           code_btn1\n          break;\n          case 1:\n           code_btn2\n          break;\n          case 2:\n           code_btn3\n          break;\n          case 3:\n           code_btn4\n          break;  \n          case 4:\n           code_btn5\n          break;\n        }      \n      }\n    }\n  }\n';

            }
            return __p
        };

        this["JST"]["bq_buttons_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqButtons\n  int adc_key_val[5] ={20,50, 100, 200, 600 };\n  int NUM_KEYS = 5;\n  int adc_key_in;\n  int key=-1;\n  int oldkey=-1;\n  int get_key(unsigned int input)\n  {\n    int k;\n    for (k = 0; k < NUM_KEYS; k++)\n    {\n      if (input < adc_key_val[k])\n      {\n        return k;\n      }\n    }\n    if (k >= NUM_KEYS)k = -1;\n      return k;\n  }\n';

            }
            return __p
        };

        this["JST"]["bq_infrared"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_infrared_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);';

            }
            return __p
        };

        this["JST"]["bq_joystick"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')\n';

            }
            return __p
        };

        this["JST"]["bq_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["bq_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["bq_photoresistor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ',' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["bq_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(Buzztone) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["bq_potentiometer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_analog_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_analog_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(value_num) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(13,' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(13,OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_digital_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_highlow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(bool_value);

            }
            return __p
        };

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

        this["JST"]["serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (Serial.available()>0){' +
                    __e(branch) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["serial_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.print(' +
                    __e(content) +
                    ');';

            }
            return __p
        };

        this["JST"]["serial_print_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    __e(bitrate) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.println(' +
                    __e(content) +
                    ');';

            }
            return __p
        };

        this["JST"]["serial_println_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    __e(bitrate) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.read()';

            }
            return __p
        };

        this["JST"]["serial_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    __e(bitrate) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_special"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(char);

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

        this["JST"]["servo_cont_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servo_' +
                    __e(dropdown_pin) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["servo_cont_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servo_' +
                    __e(dropdown_pin) +
                    '.attach(' +
                    __e(dropdown_pin) +
                    ');';

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

        this["JST"]["servo_move_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servo_' +
                    __e(dropdown_pin) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["servo_move_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servo_' +
                    __e(dropdown_pin) +
                    '.attach(' +
                    __e(dropdown_pin) +
                    ');';

            }
            return __p
        };

        this["JST"]["servo_read_degrees"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  servo_' +
                    __e(dropdown_pin) +
                    '.read()';

            }
            return __p
        };

        this["JST"]["servo_read_degrees_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servo_' +
                    __e(dropdown_pin) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["servo_read_degrees_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servo_' +
                    __e(dropdown_pin) +
                    '.attach(' +
                    __e(dropdown_pin) +
                    ');';

            }
            return __p
        };

        this["JST"]["zum_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')\n';

            }
            return __p
        };

        this["JST"]["zum_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["zum_follower"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if(digitalRead(' +
                    __e(dropdown_pin) +
                    ')==HIGH)\n{\n  code_btn1\n}\nif(digitalRead(' +
                    __e(NextPIN) +
                    ')==HIGH)\n{\n  code_btn2\n}\n';

            }
            return __p
        };

        this["JST"]["zum_follower_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);\n  pinMode( ' +
                    __e(NextPIN) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_infrared"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["zum_infrared_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);';

            }
            return __p
        };

        this["JST"]["zum_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["zum_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_photoresistor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["zum_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ',' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["zum_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(Buzztone) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["zum_potentiometer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };
        var JST = this.JST;

        // Source: src/blocks/advanced_conversion/advanced_conversion.js
        /* global Blockly, JST */
        /* jshint sub:true */

        /**
         * advanced_conversion code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_conversion = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var convertion = this.getFieldValue('CONV');
            var code = JST['advanced_conversion']({
                'value_num': value_num,
                'convertion': convertion
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_conversion block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_conversion = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('Convert')
                    .appendField(new Blockly.FieldDropdown([
                        ['Decimal', 'DEC'],
                        ['Hexadecimal', 'HEX'],
                        ['Octal', 'OCT'],
                        ['Binary', 'BIN']
                    ]), 'CONV');
                this.appendValueInput('NUM', Number)
                    .appendField('value')
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip('Base convert a number');
            }
        };

        // Source: src/blocks/base_delay/base_delay.js
        /* global Blockly, JST */

        //register with blockly arduino
        Blockly.Arduino.base_delay = function() {
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['base_delay']({
                'delay_time': delay_time
            });
            return code;
        };

        Blockly.Blocks.base_delay = {
            category: Blockly.LANG_CATEGORY_CONTROLS,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/base_delay',
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_CONTROL);
                this.appendValueInput('DELAY_TIME', Number)
                    .appendField('Wait (ms)')
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Delay specific time (in ms)');
            }
        };

        // Source: src/blocks/bq_bat/bq_bat.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_bat code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_bat = function() {
            var red_pin = this.getFieldValue('RED PIN');
            var blue_pin = this.getFieldValue('BLUE PIN');

            Blockly.Arduino.setups_['setup_bq_bat_'] = JST['bq_bat_setups']({
                'red_pin': red_pin,
                'blue_pin': blue_pin
            });

            Blockly.Arduino.definitions_['define_bq_bat_' + red_pin] = JST['bq_bat_definitions']({
                'red_pin': red_pin,
                'blue_pin': blue_pin
            });

            var code = JST['bq_bat']({
                'red_pin': red_pin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_bat block definition
         * @type {Object}
         */

        Blockly.Blocks.bq_bat = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_bat',
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('BAT')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('RED PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('BLUE PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');

                this.setOutput(true, Number);
                this.setTooltip('Output the measured distance');
            }
        };

        // Source: src/blocks/bq_bluetooth_slave/bq_bluetooth_slave.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        var _get_next_pin = function(dropdown_pin) {
            var NextPIN = dropdown_pin;
            if (parseInt(NextPIN, 2)) {
                NextPIN = parseInt(dropdown_pin, 2) + 1;
            } else {
                NextPIN = 'A' + (parseInt(NextPIN.slice(1, NextPIN.length), 2) + 1);
            }
            //check if NextPIN in bound
            var pinlen = profiles.default.digital.length;
            var notExist = true;
            for (var i = 0; i < pinlen; i++) {
                if (profiles.default.digital[i][1] === NextPIN) {
                    notExist = false;
                }
            }
            return NextPIN;
        };

        Blockly.Arduino.bq_bluetooth_slave = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var NextPIN = _get_next_pin(dropdown_pin);
            var name = this.getFieldValue('NAME');
            var pincode = this.getFieldValue('PINCODE');
            var statement_receive = Blockly.Arduino.statementToCode(this, 'RCV');
            var statement_send = Blockly.Arduino.statementToCode(this, 'SNT');

            Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_slave_definitions']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN,
                'name': name,
                'pincode': pincode
            });

            Blockly.Arduino.setups_['setup_bluetooth_'] = JST['bq_bluetooth_slave_setups']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });

            var code = JST['bq_bluetooth_slave']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN,
                'name': name,
                'pincode': pincode,
                'statement_send': statement_send,
                'statement_receive': statement_receive
            });
            return code;
        };

        /**
         * bq_bluetooth_slave block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_slave = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_bluetooth_slave',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Bluetooth')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.bluetooth), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Name')
                    .appendField(new Blockly.FieldTextInput('zum'), 'NAME');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('PinCode')
                    .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
                this.appendStatementInput('RCV')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Receive');
                this.appendStatementInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Send');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq Bluetooth');
            }
        };

        // Source: src/blocks/bq_button/bq_button.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_button code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_button = function() {

            var dropdown_pin = this.getFieldValue('PIN');

            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            }); //'pinMode(' + dropdown_pin + ', INPUT_PULLUP);';

            var code = JST['bq_button']({
                'dropdown_pin': dropdown_pin,
            });
            code = 'digitalRead(' + dropdown_pin + ')';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_button block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_button = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_button',
            /**
             * bq_button initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Button')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip('bq Button');
            }
        };

        // Source: src/blocks/bq_buttons/bq_buttons.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_buttons code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_buttons = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            //	var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
            //	var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
            //	var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
            //	var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
            //	var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

            Blockly.Arduino.definitions_['define_buttons'] = JST['bq_buttons_definitions']({
                'dropdown_pin': dropdown_pin,
            });


            var code = JST['bq_buttons']({
                'dropdown_pin': dropdown_pin,
            });

            return code;
        };

        /**
         * bq_buttons block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_buttons = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_buttons',
            /**
             * bq_buttons initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Buttons')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.appendStatementInput('BUTN1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Button #A');
                this.appendStatementInput('BUTN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Button #B');
                this.appendStatementInput('BUTN3')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Button #C');
                this.appendStatementInput('BUTN4')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Button #D');
                this.appendStatementInput('BUTN5')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Button #E');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq Buttons');
            }
        };

        // Source: src/blocks/bq_infrared/bq_infrared.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_infrared = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['bq_infrared_setups']({
                'dropdown_pin': dropdown_pin
            });

            var code = JST['bq_infrared']({
                'dropdown_pin': dropdown_pin
            });

            //	code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_infrared = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_infrared',
            /**
             * bq_infrared initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Infrared Sensor')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true);
                this.setTooltip('bq Infrared Sensor');
            }
        };

        // Source: src/blocks/bq_joystick/bq_joystick.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_joystick code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_joystick = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            //		  var dropdown_pin = this.getFieldValue('PIN');
            //		  var code = 'analogRead('+dropdown_pin+')';
            //		  return [code, Blockly.Arduino.ORDER_ATOMIC];


            var code = JST['bq_joystick']({
                'dropdown_pin': dropdown_pin,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_joystick block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_joystick = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_joystick',
            /**
             * bq_joystick initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Joystick')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip('bq Joystick');
            }
        };

        // Source: src/blocks/bq_led/bq_led.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_led code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_led = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');


            Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['bq_led_setups']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            var code = JST['bq_led']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * bq_led block definition
         * @type {Object}
         */



        Blockly.Blocks.bq_led = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_led',
            /**
             * bq_led initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('LED')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('state')
                    .appendField(new Blockly.FieldDropdown([
                        ['ON', 'HIGH'],
                        ['OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq LED');
            }
        };

        // Source: src/blocks/bq_photoresistor/bq_photoresistor.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_photoresistor code generation
         * @return {String} Code generated with block parameters
         */


        //        var code = 'analogRead(' + dropdown_pin + ')';

        Blockly.Arduino.bq_photoresistor = function() {
            var dropdown_pin = this.getFieldValue('PIN');

            var code = JST['bq_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //	code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * bq_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_photoresistor = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_photoresistor',
            /**
             * bq_photoresistor initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Photoresistor')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip('Output the value of the photoresistor.');
            }
        };

        // Source: src/blocks/bq_piezo_buzzer/bq_piezo_buzzer.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_piezo_buzzer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            //	Blockly.Arduino.setups_['setup_piezo_buzzer_' + dropdown_pin] = JST['bq_piezo_buzzer_setups']({
            //		'dropdown_pin': dropdown_pin,
            //		'dropdown_stat': dropdown_stat
            //	});


            var code = JST['bq_piezo_buzzer']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat,
                'delay_time': delay_time
            });

            code = 'tone(' + dropdown_pin + ',' + dropdown_stat + ',' + delay_time + ');\ndelay(' + delay_time + ');\n';
            return code;
        };


        /**
         * bq_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_piezo_buzzer = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_piezo_buzzer',
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Buzzer')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('TONE')
                    .appendField(new Blockly.FieldDropdown([
                        ['DO', '261'],
                        ['RE', '293'],
                        ['MI', '329'],
                        ['FA', '349'],
                        ['SOL', '392'],
                        ['LA', '440'],
                        ['SI', '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Duration');

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Piezo Buzzer');
            }
        };


        // Source: src/blocks/bq_piezo_buzzerav/bq_piezo_buzzerav.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_piezo_buzzerav = function() {

            var dropdown_pin = this.getFieldValue('PIN');
            var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['bq_piezo_buzzerav']({
                'dropdown_pin': dropdown_pin,
                'Buzztone': Buzztone,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * bq_piezo_buzzerav block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_piezo_buzzerav = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_piezo_buzzerav',
            /**
             * bq_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Advanced Buzzer')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('TONE');

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Duration');

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Piezo Buzzer Advanced');
            }
        };

        // Source: src/blocks/bq_potentiometer/bq_potentiometer.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * bq_potentiometer code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_potentiometer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var code = JST['bq_potentiometer']({
                'dropdown_pin': dropdown_pin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_potentiometer block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_potentiometer = {
            category: Blockly.LANG_CATEGORY_BQ,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_potentiometer',
            /**
             * bq_potentiometer initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField('Potentiometer')
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip('bq Potentiometer');
            }
        };

        // Source: src/blocks/inout_analog_read/inout_analog_read.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * inout_analog_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_read = function() {
            var dropdown_pin = this.getFieldValue('PIN');

            Blockly.Arduino.setups_['setup_green_analog_read' + dropdown_pin] = JST['inout_analog_read_setups']({
                'dropdown_pin': dropdown_pin,
            });

            var code = JST['inout_analog_read']({
                'dropdown_pin': dropdown_pin,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * inout_analog_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_read = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_analog_read',
            /**
             * inout_analog_read initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('AnalogRead PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip('Reads the value from a specified digital pin');
            }
        };

        // Source: src/blocks/inout_analog_write/inout_analog_write.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * inout_analog_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_write = function() {

            var dropdown_pin = this.getFieldValue('PIN');
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.setups_['setup_green_analog_write_13'] = JST['inout_analog_write_setups']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });

            var code = JST['inout_analog_write']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });

            return code;
        };


        /**
         * inout_analog_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_write = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_analog_write',
            /**
             * inout_analog_write initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('AnalogWrite PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN');
                this.appendValueInput('NUM', Number)
                    .appendField('value')
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Write analog value between 0 and 255 to a specific Port');
            }
        };

        // Source: src/blocks/inout_builtin_led/inout_builtin_led.js
        /* global Blockly, JST */
        /* jshint sub:true */

        /**
         * inout_builtin_led code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.inout_builtin_led = function() {
            var dropdown_stat = this.getFieldValue('STAT');

            Blockly.Arduino.setups_['setup_green_led_13'] = JST['inout_builtin_led_setups']({});

            var code = JST['inout_builtin_led']({
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * inout_builtin_led block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_builtin_led = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_builtin_led',
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('BUILTIN LED')
                //			.appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
                //			.appendField('PIN#')
                //			.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                .appendField('state')
                    .appendField(new Blockly.FieldDropdown([
                        ['ON', 'HIGH'],
                        ['OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq LED');
            }
        };

        // Source: src/blocks/inout_digital_read/inout_digital_read.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * inout_digital_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_read = function() {
            var dropdown_pin = this.getFieldValue('PIN');

            Blockly.Arduino.setups_['setup_green_digital_read' + dropdown_pin] = JST['inout_digital_read_setups']({
                'dropdown_pin': dropdown_pin,
            });

            var code = JST['inout_digital_read']({
                'dropdown_pin': dropdown_pin,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * inout_digital_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_read = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_digital_read',
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('DigitalRead PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip('Reads the value from a specified digital pin');
            }
        };

        // Source: src/blocks/inout_digital_write/inout_digital_write.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * inout_digital_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_write = function() {

            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');

            Blockly.Arduino.setups_['setup_green_digital_write_13'] = JST['inout_digital_write_setups']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            var code = JST['inout_digital_write']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * inout_digital_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_write = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_digital_write',
            /**
             * inout_digital_write initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('DigitalWrite')
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('state')
                    .appendField(new Blockly.FieldDropdown([
                        ['HIGH', 'HIGH'],
                        ['LOW', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq digital_write');
            }
        };

        // Source: src/blocks/inout_highlow/inout_highlow.js
        /* global Blockly, JST */
        /* jshint sub:true */

        /**
         * inout_highlow code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_highlow = function() {
            var bool_value = this.getFieldValue('BOOL');

            var code = JST['inout_highlow']({
                'bool_value': bool_value,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * inout_highlow block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_highlow = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/inout_highlow',
            /**
             * inout_highlow initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(new Blockly.FieldDropdown([
                        ['HIGH', 'HIGH'],
                        ['LOW', 'LOW']
                    ]), 'BOOL');
                this.setOutput(true, Boolean);
                this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP_1);
            }
        };

        // Source: src/blocks/math_random/math_random.js
        /* global Blockly, JST */

        //register with blockly arduino
        Blockly.Arduino.math_random = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['math_random']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });
            return [code, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.math_random = {
            category: Blockly.LANG_CATEGORY_MATH,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/math_random',
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_MATH);
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

        // Source: src/blocks/serial_available/serial_available.js
        /* global Blockly, JST */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            var code = JST['serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_available = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput()
                    .appendField('Serial Available');
                this.appendStatementInput('DO')
                    .appendField(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Blockly.LANG_CONTROLS_REPEAT_TOOLTIP);
            }
        };

        // Source: src/blocks/serial_print/serial_print.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * serial_print code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.serial_print = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.setups_['setup_serial_print'] = JST['serial_print_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_print']({
                'content': content
            });

            return code;
        };

        /**
         * serial_print block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_print = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_print',
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendValueInput('CONTENT', String)
                    .appendField('Serial Print');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
            }
        };

        // Source: src/blocks/serial_println/serial_println.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * serial_println code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_println = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.setups_['setup_serial_println'] = JST['serial_println_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_println']({
                'content': content
            });

            return code;
        };

        /**
         * serial_println block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_println = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendValueInput('CONTENT', String)
                    .appendField('Serial Println');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Prints data to the console/serial port as human-readable ASCII text and add CR.');
            }
        };

        // Source: src/blocks/serial_read/serial_read.js
        /* global Blockly, profiles, JST */
        /* jshint sub:true */

        /**
         * serial_read code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.serial_read = function() {

            Blockly.Arduino.setups_['setup_serial_read'] = JST['serial_read_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_read']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_read block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_read = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_read',
            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('Serial Read');
                this.setOutput(true, String);
                this.setTooltip('Reads incoming serial data from serial port as human-readable ASCII text.');
            }
        };

        // Source: src/blocks/serial_special/serial_special.js
        /* global Blockly, JST */
        /* jshint sub:true */

        /**
         * serial_special code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_special = function() {
            var char = this.getFieldValue('CHAR');
            var code = JST['serial_special']({
                'char': char
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_special block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_special = {
            category: Blockly.LANG_CATEGORY_ADVANCED,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/serial_println',
            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField('Special Chars')
                    .appendField(new Blockly.FieldDropdown([
                        ['Tab', '\\t'],
                        ['Carriage Return', '\\r'],
                        ['Line Feed', '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip('Write special Chars');
            }
        };

        // Source: src/blocks/servo_cont/servo_cont.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * servo_cont code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_cont = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var value_degree = this.getFieldValue('ROT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

            delay_time = delay_time.replace('(', '').replace(')', '');

            Blockly.Arduino.definitions_['define_servo'] = JST['servo_cont_definitions']({
                'dropdown_pin': dropdown_pin
            });


            Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = JST['servo_cont_setups']({
                'dropdown_pin': dropdown_pin
            });


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
            category: Blockly.LANG_CATEGORY_SERVO,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/lib/blocks/servo_cont',
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField('Servo')
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
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
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * servo_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_move = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
            value_degree = value_degree.replace('(', '').replace(')', '');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

            delay_time = delay_time.replace('(', '').replace(')', '');

            Blockly.Arduino.definitions_['define_servo'] = JST['servo_move_definitions']({
                'dropdown_pin': dropdown_pin
            });

            Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = JST['servo_move_setups']({
                'dropdown_pin': dropdown_pin
            });

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
            category: Blockly.LANG_CATEGORY_SERVO,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField('Servo')
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
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

        // Source: src/blocks/servo_read_degrees/servo_read_degrees.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * servo_read_degrees code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_read_degrees = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            Blockly.Arduino.definitions_['define_servo'] = JST['servo_read_degrees_definitions']({
                'dropdown_pin': dropdown_pin
            });

            Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = JST['servo_read_degrees_setups']({
                'dropdown_pin': dropdown_pin
            });

            var code = JST['servo_read_degrees']({
                'dropdown_pin': dropdown_pin
            });

            return code;
        };

        /**
         * servo_read_degrees block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_read_degrees = {
            category: Blockly.LANG_CATEGORY_SERVO,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_read_degrees',
            /**
             * servo_read_degrees initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField('Servo')
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo02.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Read Degrees');
                this.setOutput(true, Number);
                this.setTooltip('Returns that degree with the last servo move.');
            }
        };

        // Source: src/blocks/zum_button/zum_button.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_button code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.zum_button = function() {

            var dropdown_pin = this.getFieldValue('PIN');

            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
                'dropdown_pin': dropdown_pin,
            }); //'pinMode(' + dropdown_pin + ', INPUT_PULLUP);';

            var code = JST['zum_button']({
                'dropdown_pin': dropdown_pin,
            });
            code = 'digitalRead(' + dropdown_pin + ')';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_button block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_button = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_button',
            /**
             * zum_button initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Button')
                    .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip('bq Button');
            }
        };

        // Source: src/blocks/zum_follower/zum_follower.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_follower code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_follower = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var NextPIN = this.getFieldValue('PIN2');
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');

            Blockly.Arduino.setups_['setup_follower_' + dropdown_pin] = JST['zum_follower_setups']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });

            var code = JST['zum_follower']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2
            });

            //	code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_follower block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_follower = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_follower',
            /**
             * zum_follower initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Infrared Sensor')
                    .appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203 * options.zoom, 165 * options.zoom));
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('PIN LEFT#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('PIN RIGHT#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN2');
                this.appendStatementInput('SENS1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Left');
                this.appendStatementInput('SENS2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Right');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq Infrared Sensor');
            }
        };

        // Source: src/blocks/zum_infrared/zum_infrared.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_infrared = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['zum_infrared_setups']({
                'dropdown_pin': dropdown_pin
            });

            var code = JST['zum_infrared']({
                'dropdown_pin': dropdown_pin
            });

            //	code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_infrared = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_infrared',
            /**
             * zum_infrared initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Infrared Sensor')
                    .appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true);
                this.setTooltip('bq Infrared Sensor');
            }
        };

        // Source: src/blocks/zum_led/zum_led.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_led code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.zum_led = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');


            Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['zum_led_setups']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            var code = JST['zum_led']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * zum_led block definition
         * @type {Object}
         */



        Blockly.Blocks.zum_led = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_led',
            /**
             * zum_led initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('LED')
                    .appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('state')
                    .appendField(new Blockly.FieldDropdown([
                        ['ON', 'HIGH'],
                        ['OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('bq LED');
            }
        };

        // Source: src/blocks/zum_photoresistor/zum_photoresistor.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_photoresistor = function() {
            var dropdown_pin = this.getFieldValue('PIN');

            var code = JST['zum_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //	code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * zum_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_photoresistor = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_photoresistor',
            /**
             * zum_photoresistor initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Photoresistor')
                    .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip('Output the value of the photoresistor.');
            }
        };

        // Source: src/blocks/zum_piezo_buzzer/zum_piezo_buzzer.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.zum_piezo_buzzer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            //	Blockly.Arduino.setups_['setup_piezo_buzzer_' + dropdown_pin] = JST['zum_piezo_buzzer_setups']({
            //		'dropdown_pin': dropdown_pin,
            //		'dropdown_stat': dropdown_stat
            //	});


            var code = JST['zum_piezo_buzzer']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat,
                'delay_time': delay_time
            });

            code = 'tone(' + dropdown_pin + ',' + dropdown_stat + ',' + delay_time + ');\ndelay(' + delay_time + ');\n';
            return code;
        };


        /**
         * zum_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_piezo_buzzer = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_piezo_buzzer',
            /**
             * zum_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Buzzer')
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('TONE')
                    .appendField(new Blockly.FieldDropdown([
                        ['DO', '261'],
                        ['RE', '293'],
                        ['MI', '329'],
                        ['FA', '349'],
                        ['SOL', '392'],
                        ['LA', '440'],
                        ['SI', '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Duration');

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Piezo Buzzer');
            }
        };

        // Source: src/blocks/zum_piezo_buzzerav/zum_piezo_buzzerav.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.zum_piezo_buzzerav = function() {

            var dropdown_pin = this.getFieldValue('PIN');
            var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['zum_piezo_buzzerav']({
                'dropdown_pin': dropdown_pin,
                'Buzztone': Buzztone,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * zum_piezo_buzzerav block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_piezo_buzzerav = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_piezo_buzzerav',
            /**
             * zum_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Advanced Buzzer')
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('TONE');

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('Duration');

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('Piezo Buzzer Advanced');
            }
        };

        // Source: src/blocks/zum_potentiometer/zum_potentiometer.js
        /* global Blockly, options, profiles, JST */
        /* jshint sub:true */

        /**
         * zum_potentiometer code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.zum_potentiometer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var code = JST['zum_potentiometer']({
                'dropdown_pin': dropdown_pin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_potentiometer block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_potentiometer = {
            category: Blockly.LANG_CATEGORY_ZUM,
            helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/zum_potentiometer',
            /**
             * zum_potentiometer initialization
             */
            init: function() {
                this.setColour(Blockly.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField('Potentiometer')
                    .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField('PIN#')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip('bq Potentiometer');
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
