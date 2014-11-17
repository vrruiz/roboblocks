/*! roboblocks - v0.1.3 - 2014-11-17
 * http://github.com/bq/roboblock
 * Copyright (c) 2014 bq; Licensed  */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'blockly-bq', 'blockly.blocks'], factory);
    } else {
        factory(_, window.Blockly, window.Blocks);
    }
}(function(_, Blockly, Blocks) {
    var load = function(options) {
        // Source: src/lang.js
        /* global RoboBlocks*/

        RoboBlocks.locales = {
            defaultLanguage: {},
            languages: []
        };

        RoboBlocks.locales.getKey = function(key) {
            return this.defaultLanguage[key];
        };
        RoboBlocks.locales.setDefaultLang = function(langCode) {
            for (var i in this.languages) {
                if (this.languages[i].langCode === langCode) {
                    this.defaultLanguage = this.languages[i].values;
                }
            }
        };

        RoboBlocks.locales.add = function(langCode, values) {
            if (!langCode) {
                return this.defaultLanguage;
            }

            if (langCode && !values) {
                if (!this.languages[langCode]) {
                    throw new Error('Unknown language : ' + langCode);
                }
                //this.defaultLanguage = langCode;
            }

            if (values || !this.languages[langCode]) {
                this.languages.push({
                    langCode: langCode,
                    values: values
                });
            }
            return this;
        };

        RoboBlocks.locales.initialize = function() {
            this.setDefaultLang('en-GB');
            return this;
        };
        // Source: lang/en-GB.js
        (function() {
            var language = {
                //random :
                LANG_VARIABLES_SET_ITEM: 'item',

                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logic',

                LANG_LOGIC_OPERATION_AND: 'and',
                LANG_LOGIC_OPERATION_OR: 'or',

                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Checks if both inputs are equal .',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Checks if both inputs are different.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Checks if the first input is smaller than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Checks if the first input is smaller than or equal to the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Checks if the first input is greater than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Checks if the first input is greater than or equal to the second one.',

                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Checks if both inputs are true.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Checks if either inputs are true.',

                LANG_LOGIC_NEGATE_INPUT_NOT: 'not',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Returns the opposite of the input.',
                LANG_LOGIC_NEGATE_HELPURL: '',

                LANG_LOGIC_BOOLEAN_TRUE: 'true',
                LANG_LOGIC_BOOLEAN_FALSE: 'false',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Returns either true or false.',

                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Communication',

                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth receive data',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Returns the data received by the Bluetooth module',

                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth send data',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Send',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Sends the input data using the Bluetooth module',

                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth definition',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baud rate',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Name',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PinCode',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Receive',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Send',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Bluetooth module definition',

                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth Serial Available',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the bluetooth is available or not.',

                LANG_ADVANCED_SERIAL_AVAILABLE: 'Serial Available',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the serial port is available or not',

                LANG_ADVANCED_SERIAL_PRINT: 'Serial Print',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Prints data as ASCII text.',

                LANG_ADVANCED_SERIAL_PRINTLN: 'Serial Println',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Prints data as ASCII text and adds a Carriage Return (CR).',

                LANG_ADVANCED_SERIAL_READ: 'Serial Read',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Reads incoming serial data from serial port as ASCII text.',

                LANG_ADVANCED_SERIAL_SPECIAL: 'Special Chars',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tab',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Line Feed',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Writes special Chars.',

                //bq blocks :
                LANG_CATEGORY_BQ: 'octopus bloqs',

                LANG_BQ_BAT: 'BAT - Ultrasonic Sensor',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Returns the distance measured by the ultrasonic sensor.',

                LANG_BQ_BUTTON: 'Button',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Button',

                LANG_BQ_BUTTONS: 'Button Pad',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Button #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Button #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Button #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Button #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Button #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Button Pad',

                LANG_BQ_INFRARED: 'Infrared Sensor',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Returns the digital value read by the infrared sensor.',

                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'X axis PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Y axis PIN#',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Button PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Joystick Position',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',

                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ON',
                LANG_BQ_LED_OFF: 'OFF',
                LANG_BQ_LED_TOOLTIP: 'LED',

                LANG_BQ_PHOTORESISTOR: 'Light Sensor',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',

                LANG_BQ_PIEZO_BUZZER: 'Buzzer',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TONE',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Duration',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',

                LANG_BQ_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duration',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',

                LANG_BQ_POTENTIOMETER: 'Potentiometer',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',

                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD blocks',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_DEF_TOOLTIP: 'Block that defines the LCD',

                LANG_LCD_SETBACKLIGHT: 'LCD: setBacklight(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Sets the backlight of the LCD screen.',

                LANG_LCD_PRINT: 'LCD: print ',
                LANG_LCD_PRINT_POSITION: 'Set text position?',
                LANG_LCD_PRINT_TOOLTIP: 'Prints a String in the LCD at the specified position or the next available one.',

                LANG_LCD_CLEAR: 'LCD clear',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD clear',

                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',

                LANG_CONTROLS_BASE_DELAY_WAIT: 'Wait (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Waits the specified time in milliseconds (ms)',

                LANG_CONTROLS_IF_TOOLTIP_1: 'If the condition is true, execute the statements.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'If the condition is true, then do the first block of statements. Otherwise, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.',
                LANG_CONTROLS_IF_MSG_IF: 'if',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'else if',
                LANG_CONTROLS_IF_MSG_ELSE: 'else',
                LANG_CONTROLS_IF_MSG_THEN: 'do',
                LANG_CONTROLS_IF_IF_Field_IF: 'if',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this if block.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'else if',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Add a condition to the if block.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'else',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Add a final, catch-all condition to the if block.',

                LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'from',
                LANG_CONTROLS_FOR_INPUT_TO: 'to',
                LANG_CONTROLS_FOR_INPUT_DO: 'do',
                LANG_CONTROLS_FOR_TOOLTIP: 'Count from a start number to an end number. Each time the count is incremented by one, the variable takes that value then do the statements.',

                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'until',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'While the condition is true, then do the statements.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'While the condition is false, then do the statements.',

                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repeat',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'times',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'do',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Repeat the statements a certain number of times',

                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'of loop',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'break out',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continue with next iteration',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Break out of the containing loop.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Skip the rest of this loop, and continue with the next iteration.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Warning: This block may only be used within a loop.',

                LANG_CONTROLS_SWITCH_HELPURL: '',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Execute the statement of the case .',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'The switch expression is evaluated once',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'case',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'The default keyword specifies the code to run if there is no case match',
                LANG_CONTROLS_SWITCH_CASE: 'case',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'do',


                //math blocks :
                LANG_CATEGORY_MATH: 'Math',

                LANG_MATH_ADVANCED_MAP_MAP: 'Map ',
                LANG_MATH_ADVANCED_MAP_FROM: 'From [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'to [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Re-map the input from a certain range to another.',

                LANG_MATH_NUMBER_TOOLTIP: 'Number',

                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Array',

                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Returns the value of a certain element of the array.',

                LANG_MATH_MODULO_TOOLTIP: 'Returns the remainder of the division of the two input numbers.',

                LANG_MATH_BASE_MAP: 'Map ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Value to [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Re-map the input from [0-1023] to another.',

                LANG_MATH_SINGLE_OP_ROOT: 'square root',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'absolute',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Returns the square root of a number.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Returns the absolute value of a number.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Returns the negation of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Returns the natural logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Returns the base 10 logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Returns e to the power of a number.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Returns 10 to the power of a number.',

                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',

                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A letter, word, or line of text.',

                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'create text with',
                LANG_TEXT_JOIN_TOOLTIP: 'Create a piece of text by joining together any number of items.',

                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this text block.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'item',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Add an item to the text.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',

                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'to',
                LANG_TEXT_APPEND_APPENDTEXT: 'append text',
                LANG_TEXT_APPEND_VARIABLE: 'item',
                LANG_TEXT_APPEND_TOOLTIP: 'Append some text to variable %1.',

                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'length',
                LANG_TEXT_LENGTH_TOOLTIP: 'Returns number of letters (including spaces) in the provided text.',

                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Checks if both input strings are equal, regardless of the case.',

                LANG_TEXT_SUBSTRING: 'Crop ',
                LANG_TEXT_SUBSTRING_FROM: 'from',
                LANG_TEXT_SUBSTRING_TO: 'to',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Obtain a substring from the input string with the caracters between the two input numbers.',

                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Pin functions',

                LANG_ADVANCED_CONVERSION_CONVERT: 'Convert',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binary',
                LANG_ADVANCED_CONVERSION_VALUE: 'value',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convert a number from one base to another.',

                LANG_ADVANCED_INOUT_ANALOG_READ: 'AnalogRead PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Reads the value from a specified digital pin',

                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'AnalogWrite PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'value',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Write a value between 0 and 255 to a specific analog output PIN',

                LANG_ADVANCED_BUILTIN_LED: 'BUILT-IN LED',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'state',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Built-in LED that is internally connected to PIN 13',

                LANG_ADVANCED_INOUT_DIGITAL_READ: 'DigitalRead PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Reads the value from a specified digital pin',

                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'DigitalWrite',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'state',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Write a value in a specified digital pin',

                LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
                LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH OR LOW',

                LANG_ADVANCED_MATH_RANDOM: 'Random between',
                LANG_ADVANCED_MATH_RANDOM_AND: ' and ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Returns a random number between the two limits.',

                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Functions',

                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'function',
                LANG_PROCEDURES_DEFNORETURN_DO: 'do',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'A function with no return value.',

                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'function',
                LANG_PROCEDURES_DEFRETURN_DO: 'do',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'return',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'A function with a return value.',

                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Warning: This function has duplicate parameters.',

                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'do',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'function',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Calls a function with no return value.',

                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'do',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'function',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Calls a function with a return value.',

                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parameters',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',

                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Highlight function',

                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'If the condition is true, then returns this value.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Warning: This block may only be used within a function with a return value.',

                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',

                LANG_VARIABLES_GLOBAL: 'Variable ',
                LANG_VARIABLES_GLOBAL_TYPE: 'of type ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'equals',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declares and defines a GLOBAL variable of type int or String.',

                LANG_VARIABLES_LOCAL: 'LOCAL variable ',
                LANG_VARIABLES_LOCAL_TYPE: 'of type ',
                LANG_VARIABLES_LOCAL_EQUALS: 'equals',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declare and define a LOCAL variable of type int or String.',

                LANG_VARIABLES_DEFINE: 'Define variable ',
                LANG_VARIABLES_DEFINE_AS: 'as',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Define the value of a variable.',

                LANG_VARIABLES_SET: 'Set variable ',
                LANG_VARIABLES_SET_AS: 'as',
                LANG_VARIABLES_SET_TOOLTIP: 'Sets the value of a variable.',

                LANG_VARIABLES_GET: 'Variable ',
                LANG_VARIABLES_GET_TOOLTIP: 'Returns the value of a variable.',

                LANG_VARIABLES_PIN_ANALOG: 'Analog pin',
                LANG_VARIABLES_PIN_DIGITAL: 'Digital pin',
                LANG_VARIABLES_PIN_TOOLTIP: 'Select the PIN.',

                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',

                LANG_ZUM_BUTTON: 'Button',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'zum Button',

                LANG_ZUM_FOLLOWER: 'Infrared Sensor',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN LEFT#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN RIGHT#',
                LANG_ZUM_FOLLOWER_LEFT: 'Left',
                LANG_ZUM_FOLLOWER_RIGHT: 'Right',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Returns the digital value read by the infrared sensor',

                LANG_ZUM_INFRARED: 'Infrared Sensor',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Returns the digital value read by the infrared sensor',

                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ON',
                LANG_ZUM_LED_OFF: 'OFF',
                LANG_ZUM_LED_TOOLTIP: 'zum LED',

                LANG_ZUM_PHOTORESISTOR: 'Light Sensor',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',

                LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONE',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duration',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',

                LANG_ZUM_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duration',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',

                LANG_ZUM_POTENTIOMETER: 'Potentiometer',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',

                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',

                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'TURN CLOCKWISE',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TURN COUNTERCLOCKWISE',
                LANG_SERVO_CONT_STOPPED: 'STOPPED',
                LANG_SERVO_CONT_DELAY: 'Delay',
                LANG_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',

                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Degrees (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Delay',
                LANG_SERVO_MOVE_TOOLTIP: 'Move between 0~180 degree',
            };

            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('en', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('en-GB', language);
            }
        }());
        // Source: lang/es-ES.js
        (function() {
            var language = {
                //random :
                LANG_VARIABLES_SET_ITEM: 'elemento',

                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',

                LANG_LOGIC_OPERATION_AND: 'y',
                LANG_LOGIC_OPERATION_OR: 'o',

                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si las dos entradas son iguales.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si las dos entradas no son iguales entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada es menor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada es menor o igual que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada es mayor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada es mayor o igual que la segunda entrada.',

                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si ambas entradas son verdaderas.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de las entradas son verdaderas.',

                LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devuelve lo contrario de la entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',

                LANG_LOGIC_BOOLEAN_TRUE: 'verdadero',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devuelve verdadero o falso en función de lo seleccionado.',

                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicación',

                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devuelve los datos recibidos por el módulo Bluetooth',

                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar datos',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Toma los datos de la entrada y los envía usando el módulo Bluetooth',

                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nombre',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definición del módulo Bluetooth',

                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Puerto Serie Disponible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el módulo Bluetooth está disponible o no',

                LANG_ADVANCED_SERIAL_AVAILABLE: 'Puerto Serie Disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el puerto serie está disponible o no',

                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir por puerto serie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime los datos como texto ASCII.',

                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir por puerto serie (RC)',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime los datos como texto ASCII y con retorno de carro (RC).',

                LANG_ADVANCED_SERIAL_READ: 'Leer desde el puerto serie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto ASCII.',

                LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiales',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de línea',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escribe caracteres especiales.',

                //bq blocks :
                LANG_CATEGORY_BQ: 'Bloques octopus',

                LANG_BQ_BAT: 'BAT - Sensor de Ultrasonidos',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devuelve la distancia medida por el sensor.',

                LANG_BQ_BUTTON: 'Botón',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Botón',

                LANG_BQ_BUTTONS: 'Botonera',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Botón #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Botón #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Botón #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Botón #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Botón #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Botonera',

                LANG_BQ_INFRARED: 'Sensor infrarrojo',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Devuelve el valor digital medido por el sensor infrarrojo',

                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'Eje X PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Eje Y PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Posición Joystick',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Pulsador PIN#',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',

                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ENCENDER',
                LANG_BQ_LED_OFF: 'APAGAR',
                LANG_BQ_LED_TOOLTIP: 'LED',

                LANG_BQ_PHOTORESISTOR: 'Sensor de Luz',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico medido por la fotorresistencia.',

                LANG_BQ_PIEZO_BUZZER: 'Zumbador',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TONO',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Duración',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',

                LANG_BQ_PIEZO_BUZZERAV: 'Zumbador avanzado',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duración',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador avanzado',

                LANG_BQ_POTENTIOMETER: 'Potenciómetro',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Devuelve el valor analógico medido por el potenciómetro',

                //LCD blocks:
                LANG_CATEGORY_LCD: 'Bloques LCD',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_DEF_TOOLTIP: 'Define el LCD',

                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminación',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminación de la pantalla LCD',

                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: '¿Fijar posición del texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime un string en la pantalla LCD en la posición específicada o en la siguiente disponible.',

                LANG_LCD_CLEAR: 'LCD borrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',

                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',

                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el tiempo especificado en milisegundos (ms)',

                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condición es verdadera, ejecuta las acciones dentro del bloque.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condición es verdadera, se ejecuta el primer bloque de comandos. Si no lo es, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos. Si ninguno de los valores es verdadero, se ejecuta el último bloque de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_MSG_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_MSG_THEN: 'ejecutar',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque "si".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Añade una condición al bloque "si".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Añade una condición final al bloque "si" para capturar el resto de opciones.',

                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'hasta',
                LANG_CONTROLS_FOR_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio hasta uno final. Cada vez que se incrementa en uno la cuenta, la variable toma ese valor y se ejecutan las acciones.',

                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mientras',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'hasta',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mientras la condición sea verdadera, ejecutar las instrucciones.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mientras la condición sea falsa, ejecutar las instrucciones.',

                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Ejecutar las instrucciones un número concreto de veces.',

                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrumpir',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar con la siguiente iteración',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrumpir el bucle que contiene esta instrucción.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltarse el resto de acciones de esta iteración y continuar con la siguiente iteración.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de un bucle.',

                LANG_CONTROLS_SWITCH: 'si ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara de uno en uno si se cumplen los distintos casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloque "default" especifica la acción que se va a ejecutar si no se han cumplido ninguno de los casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'es: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'en otro caso',
                LANG_CONTROLS_SWITCH_DO: 'ejecutar',

                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',

                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea la entrada desde un rango de valores iniciales a otro rango distinto.',

                LANG_MATH_NUMBER_TOOLTIP: 'Número entero',

                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteros',

                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devuelve el valor de un elemento concreto del vector.',

                LANG_MATH_MODULO_TOOLTIP: 'Devuelve el resto de la división de las dos entradas.',

                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea la entrada desde el rango [0-1023] a otro rango de valores.',

                LANG_MATH_SINGLE_OP_ROOT: 'raíz cuadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devuelve la raíz cuadrada de un número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devuelve el valor absoluto de un número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devuelve el número cambiado de signo.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devuelve el logaritmo neperiano de un número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devuelve el logaritmo en base 10 de un número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devuelve el exponencial de un número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devuelve 10 elevado a una potencia.',

                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',

                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una letra, una palabra o una línea de texto.',

                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea texto juntando cualquier número de elementos.',

                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Añadir un elemento al texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',

                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'añadirle texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Añadir texto a la variable %1.',

                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devuelve el número de letras (incluyendo los espacios) en el texto introducido.',

                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si los dos textos introducidos son iguales, independientemente de que tengan letras mayúsculas o minúsculas.',

                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'desde',
                LANG_TEXT_SUBSTRING_TO: 'hasta',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta los caracteres del texto introducido que se encuentren entre los dos índices y crea con ellos un nuevo texto.',

                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funciones PIN',

                LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base de un número.',

                LANG_ADVANCED_INOUT_ANALOG_READ: 'Leer el pin analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lee el valor de un pin analógico específico.',

                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir en el pin analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 y 255 en un PIN analógico específico.',

                LANG_ADVANCED_BUILTIN_LED: 'LED EN LA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ENCENDIDO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado en la placa que está internamente conectado al PIN 13.',

                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Leer el pin digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lee el valor desde un pin digital específico.',

                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escribir en el pin digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAJO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escribe un valor en el pin digital específico.',

                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAJO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',

                LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' y ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número aleatorio entre los dos límites introducidos.',

                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funciones',

                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func',
                LANG_PROCEDURES_DEFNORETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se ejecutará sin devolver nada.',

                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func',
                LANG_PROCEDURES_DEFRETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'devuelve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',

                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función tiene parámetros duplicados.',

                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'función',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Ejecuta esta función.',

                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'función',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Ejecuta esta función que tiene valor de retorno.',

                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',

                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subraya la función',

                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condición es verdadera, la función devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de una función que tenga valor de retorno.',

                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',

                LANG_VARIABLES_GLOBAL: 'Variable',
                LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara y define una variable GLOBAL de tipo entero (int) o texto (String).',

                LANG_VARIABLES_LOCAL: 'Variable LOCAL',
                LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara y define una variable LOCAL de tipo entero (int) o texto (String).',

                LANG_VARIABLES_DEFINE: 'Definir variable ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor de una variable.',

                LANG_VARIABLES_SET: 'Variable ',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Cambia el valor de una variable.',

                LANG_VARIABLES_GET: 'Variable ',
                LANG_VARIABLES_GET_TOOLTIP: 'Devuelve el valor de una variable',

                LANG_VARIABLES_PIN_ANALOG: 'Pin analógico',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN deseado.',

                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',

                LANG_ZUM_BUTTON: 'Botón',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'Botón zum',

                LANG_ZUM_FOLLOWER: 'Sensor infrarrojo',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DERECHA#',
                LANG_ZUM_FOLLOWER_LEFT: 'Izquierda',
                LANG_ZUM_FOLLOWER_RIGHT: 'Derecha',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',

                LANG_ZUM_INFRARED: 'Sensor infrarrojo',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',

                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ENCENDER',
                LANG_ZUM_LED_OFF: 'APAGAR',
                LANG_ZUM_LED_TOOLTIP: 'LED zum',

                LANG_ZUM_PHOTORESISTOR: 'Sensor de Luz',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico del sensor de luz (fotorresistencia).',

                LANG_ZUM_PIEZO_BUZZER: 'Zumbador',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duración',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',

                LANG_ZUM_PIEZO_BUZZERAV: 'Zumbador avanzado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duración',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador piezoeléctrico avanzado.',

                LANG_ZUM_POTENTIOMETER: 'Potenciómetro',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciómetro zum.',

                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',

                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIDO HORARIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIDO ANTIHORARIO',
                LANG_SERVO_CONT_STOPPED: 'DETENER',
                LANG_SERVO_CONT_DELAY: 'Pausa',
                LANG_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',

                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Grados (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa',
                LANG_SERVO_MOVE_TOOLTIP: 'Mover el servo entre 0 y 180 grados.',
            };

            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('es-ES', language);
            }
        }());
        // Source: src/constants.js
        /* global RoboBlocks*/

        RoboBlocks.locales.initialize();

        RoboBlocks.variables = {};

        // help URLs
        RoboBlocks.GITHUB_SRC_URL = 'https://github.com/bq/roboblocks/tree/master/src/';

        // RGB block colors
        RoboBlocks.LANG_COLOUR_BQ = '#D04141';
        RoboBlocks.LANG_COLOUR_ZUM = '#CC7B44';
        RoboBlocks.LANG_COLOUR_SERVO = '#CECE42';
        RoboBlocks.LANG_COLOUR_LCD = '#ACCE42';
        RoboBlocks.LANG_COLOUR_CONTROL = '#44CC44';
        RoboBlocks.LANG_COLOUR_LOGIC = '#42CE91';
        RoboBlocks.LANG_COLOUR_MATH = '#42CBCE';
        RoboBlocks.LANG_COLOUR_TEXT = '#42A3CE';
        RoboBlocks.LANG_COLOUR_COMMUNICATION = '#4263CE';
        RoboBlocks.LANG_COLOUR_ADVANCED = '#9142CE';
        RoboBlocks.LANG_COLOUR_VARIABLES = '#B244CC';
        RoboBlocks.LANG_COLOUR_PROCEDURES = '#CE42B3';


        RoboBlocks.setColors = function(colorArray) {
            RoboBlocks.LANG_COLOUR_BQ = colorArray[0];
            RoboBlocks.LANG_COLOUR_ZUM = colorArray[1];
            RoboBlocks.LANG_COLOUR_SERVO = colorArray[2];
            RoboBlocks.LANG_COLOUR_LCD = colorArray[3];
            RoboBlocks.LANG_COLOUR_CONTROL = colorArray[4];
            RoboBlocks.LANG_COLOUR_LOGIC = colorArray[5];
            RoboBlocks.LANG_COLOUR_MATH = colorArray[6];
            RoboBlocks.LANG_COLOUR_TEXT = colorArray[7];
            RoboBlocks.LANG_COLOUR_COMMUNICATION = colorArray[8];
            RoboBlocks.LANG_COLOUR_ADVANCED = colorArray[9];
            RoboBlocks.LANG_COLOUR_VARIABLES = colorArray[10];
            RoboBlocks.LANG_COLOUR_PROCEDURES = colorArray[11];
        };

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
                    ['13', '13']
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
                    toolbox += '<category id="' + block + '" name="' + block + '">';
                    blocks[block].forEach(categoryItem);
                    toolbox += '</category>';
                }

            }
            toolbox += '</xml>';

            return toolbox;
        };

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

        this["JST"]["advanced_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    __e(num) +
                    ',' +
                    __e(from_min) +
                    ',' +
                    __e(from_max) +
                    ',' +
                    __e(to_min) +
                    ',' +
                    __e(to_max) +
                    ')';

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

        this["JST"]["base_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    __e(value_num) +
                    ',0,1023,0,' +
                    __e(value_dmax) +
                    ')';

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

        this["JST"]["bq_bluetooth_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <SoftwareSerial.h>\n\nSoftwareSerial blueToothSerial(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(NextPIN) +
                    ');';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT);\n  pinMode(' +
                    __e(NextPIN) +
                    ', OUTPUT);\n  blueToothSerial.begin(' +
                    __e(baud_rate) +
                    ');\n  blueToothSerial.flush();\n';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_receive"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.read()';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_send"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.write( ' +
                    __e(statement_send) +
                    ' );\n';

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
                    ')';

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
                __p += '  adc_key_in =analogRead(' +
                    __e(dropdown_pin) +
                    ');\n  key = get_key(adc_key_in);\n  if (key != oldkey)\n  {\n    delay(50);\n    adc_key_in = analogRead(' +
                    __e(dropdown_pin) +
                    ');\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      oldkey = key;\n      if (key >=0){\n        switch(key)\n        {\n          case 0:\n           ' +
                    __e(code_btn1) +
                    '\n          break;\n          case 1:\n           ' +
                    __e(code_btn2) +
                    '\n          break;\n          case 2:\n           ' +
                    __e(code_btn3) +
                    '\n          break;\n          case 3:\n           ' +
                    __e(code_btn4) +
                    '\n          break;  \n          case 4:\n           ' +
                    __e(code_btn5) +
                    '\n          break;\n        }      \n      }\n    }\n  }\n';

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
                __p += 'readJoystick_' +
                    __e(pinx) +
                    '()';

            }
            return __p
        };

        this["JST"]["bq_joystick_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'int * readJoystick_pointer_' +
                    __e(pinx) +
                    ';\n\nint * readJoystick_' +
                    __e(pinx) +
                    '(){\n  readJoystick_pointer_' +
                    __e(pinx) +
                    '[0]=analogRead(' +
                    __e(pinx) +
                    ');\n  readJoystick_pointer_' +
                    __e(pinx) +
                    '[1]=analogRead(' +
                    __e(piny) +
                    ');\n  readJoystick_pointer_' +
                    __e(pinx) +
                    '[2]=digitalRead(' +
                    __e(pinbutton) +
                    ');\n  return readJoystick_pointer_' +
                    __e(pinx) +
                    ';\n}';

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

        this["JST"]["bt_serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (blueToothSerial.available()>0){\n' +
                    __e(branch) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["controls_else"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else {\n' +
                    __e(branch) +
                    '\n}';

            }
            return __p
        };

        this["JST"]["controls_elseif"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else if (' +
                    __e(argument) +
                    ') {\n' +
                    __e(branch) +
                    '\n}';

            }
            return __p
        };

        this["JST"]["controls_if"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (' +
                    __e(argument) +
                    ') {\n' +
                    __e(branch) +
                    '\n}';

            }
            return __p
        };

        this["JST"]["controls_whileUntil"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'while (' +
                    __e(argument0) +
                    ') {\n  ' +
                    __e(branch) +
                    ' }\n';

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

        this["JST"]["lcd_clear"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.clear();';

            }
            return __p
        };

        this["JST"]["lcd_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n#include <LiquidCrystal.h>\nLiquidCrystal lcd(0);\n';

            }
            return __p
        };

        this["JST"]["lcd_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.begin(20, 4);\n  lcd.clear(); \n';

            }
            return __p
        };

        this["JST"]["lcd_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.print(' +
                    __e(val) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_print_pos"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setCursor(' +
                    __e(ycoor) +
                    ',' +
                    __e(xcoor) +
                    ');\nlcd.print(' +
                    __e(val) +
                    ');';

            }
            return __p
        };

        this["JST"]["lcd_setBacklight"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setBacklight(' +
                    __e(state) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["logic_compare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    ' ' +
                    __e(operator) +
                    ' ' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["logic_negate"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '!' +
                    __e(argument0);

            }
            return __p
        };

        this["JST"]["logic_operation"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    ' ' +
                    __e(operator) +
                    ' ' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["math_arithmetic"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    ' ' +
                    __e(operator) +
                    ' ' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["math_arithmetic_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pow(' +
                    __e(argument0) +
                    ',' +
                    __e(argument1) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_modulo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    '%' +
                    __e(argument1);

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

        this["JST"]["procedures_callnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(funcName) +
                    '(' +
                    __e(funcArgs) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["procedures_callreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(funcName) +
                    '(' +
                    __e(funcArgs) +
                    ')';

            }
            return __p
        };

        this["JST"]["procedures_defnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(returnType) +
                    ' ' +
                    __e(funcName) +
                    ' (' +
                    __e(args) +
                    ') {\n' +
                    __e(branch) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["procedures_defreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(returnType) +
                    ' ' +
                    __e(funcName) +
                    ' (' +
                    __e(args) +
                    ') {\n  ' +
                    __e(branch) +
                    ' ' +
                    __e(returnValue) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (Serial.available()>0){\n' +
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
                __p += 'Servo servo_' +
                    __e(dropdown_pin) +
                    ';';

            }
            return __p
        };

        this["JST"]["servo_cont_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>';

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
                __p += 'Servo servo_' +
                    __e(dropdown_pin) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["servo_move_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>';

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

        this["JST"]["text_equalsIgnoreCase"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(string1) +
                    '.equalsIgnoreCase(' +
                    __e(string2) +
                    ')';

            }
            return __p
        };

        this["JST"]["text_length"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    ' .length()';

            }
            return __p
        };

        this["JST"]["text_substring"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(string1) +
                    '.substring(' +
                    __e(from) +
                    ',' +
                    __e(to) +
                    ')';

            }
            return __p
        };

        this["JST"]["variables_set"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(varName) +
                    '=' +
                    __e(varValue) +
                    ';';

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
                    ')==HIGH)\n{\n  ' +
                    __e(code_btn1) +
                    '\n}\nif(digitalRead(' +
                    __e(NextPIN) +
                    ')==HIGH)\n{\n  ' +
                    __e(code_btn2) +
                    '\n}\n';

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
        /* global Blockly, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_conversion',
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_CONVERT'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_DECIMAL') || 'DEC', 'DEC'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_HEXADECIMAL') || 'HEX', 'HEX'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_OCTAL') || 'OCT', 'OCT'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_BINARY') || 'BIN', 'BIN']
                    ]), 'CONV');
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_VALUE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_TOOLTIP'));
            }
        };

        // Source: src/blocks/advanced_map/advanced_map.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * advanced_map code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_map = function() {
            var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var from_min = Blockly.Arduino.valueToCode(this, 'FROM_MIN', Blockly.Arduino.ORDER_NONE);
            var from_max = Blockly.Arduino.valueToCode(this, 'FROM_MAX', Blockly.Arduino.ORDER_NONE);
            var to_min = Blockly.Arduino.valueToCode(this, 'TO_MIN', Blockly.Arduino.ORDER_NONE);
            var to_max = Blockly.Arduino.valueToCode(this, 'TO_MAX', Blockly.Arduino.ORDER_NONE);

            var code = JST['advanced_map']({
                'num': num,
                'from_min': from_min,
                'from_max': from_max,
                'to_min': to_min,
                'to_max': to_max
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_map block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_map = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_map',
            /**
             * advanced_map initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_MAP'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MIN', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_FROM'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.appendValueInput('TO_MIN', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TO'))
                    .setCheck(Number);
                this.appendValueInput('TO_MAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TOOLTIP'));
            }
        };

        // Source: src/blocks/array_get/array_get.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * array_get code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.array_get = function() {
            // Numeric value.
            var variable = this.getFieldValue('VAR');
            var index = this.getFieldValue('INDEX');

            var code = variable + '[' + index + ']';

            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.array_get = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/array_get',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                    .appendField(new Blockly.FieldVariable(' '), 'VAR');
                // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.appendDummyInput('DUMMY2')
                    .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1'))
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX')
                    .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));

                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ARRAY_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                this.last_variable = this.getFieldValue('VAR');

                if (!this.last_variables) {
                    this.last_variables = Blockly.Variables.allVariables();
                }
                var variables = Blockly.Variables.allVariables();

                for (var i in variables) {
                    if (Blockly.Variables.allVariables()[i] !== this.last_variables[i]) {
                        try {
                            this.removeInput('DUMMY');
                            this.removeInput('DUMMY2');
                        } catch (e) {}

                        this.appendDummyInput('DUMMY')
                            .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                        this.appendDummyInput('DUMMY2')
                            .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1'))
                            .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX')
                            .appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));

                        this.setFieldValue(this.last_variable, 'VAR');

                        this.last_variables = Blockly.Variables.allVariables();
                    }
                }
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            }
        };


        Blockly.Blocks.array_get.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/base_delay/base_delay.js
        /* global Blockly, JST, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.base_delay = function() {
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['base_delay']({
                'delay_time': delay_time
            });
            return code;
        };

        Blockly.Blocks.base_delay = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_delay',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('DELAY_TIME', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_WAIT'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_map/base_map.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * base_map code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.base_map = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['base_map']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });

            return [code, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.base_map = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_map',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_VALUE_TO'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_bat/bq_bat.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bat code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_bat = function() {
            var red_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
            var blue_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'bat'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bat',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('RED PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_RED_PIN'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('BLUE PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_BLUE_PIN'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);


                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BAT_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_bluetooth_def/bq_bluetooth_def.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_def code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_def = function() {
            var dropdown_pin, NextPIN;
            if (this.getFieldValue('TOGGLE') === 'FALSE') {
                dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
                NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
            } else {
                dropdown_pin = 0;
                NextPIN = 1;
            }

            var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_def_definitions']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });

            Blockly.Arduino.setups_['setup_bluetooth_'] = JST['bq_bluetooth_def_setups']({
                'baud_rate': baud_rate,
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });

            return '';
        };

        /**
         * bq_bluetooth__def block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_def',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('BAUD_RATE')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_BAUD_RATE'))
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendDummyInput()
                    .appendField('zum?')
                    .appendField(new Blockly.FieldCheckbox('TRUE'), 'TOGGLE')
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.checkBT();
                this.last_toogle = this.getFieldValue('TOGGLE');

                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_TOOLTIP'));
            },
            checkBT: function() {
                if (this.getFieldValue('TOGGLE') === 'FALSE') {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}

                    this.appendValueInput('PIN')
                        .setCheck(Number)
                        .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN1'))
                        .setAlign(Blockly.ALIGN_RIGHT);

                    this.appendValueInput('PIN2')
                        .setCheck(Number)
                        .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN2'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}
                }
            },
            onchange: function() {
                if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
                    this.checkBT();
                    this.last_toogle = this.getFieldValue('TOGGLE');
                }
            }
        };

        // Source: src/blocks/bq_bluetooth_receive/bq_bluetooth_receive.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_receive = function() {
            var code = JST['bq_bluetooth_receive']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_bluetooth_slave block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_receive = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_receive',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.setInputsInline(false);


                this.setOutput(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_bluetooth_send/bq_bluetooth_send.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_send = function() {
            var statement_send = Blockly.Arduino.valueToCode(this, 'SNT', Blockly.Arduino.ORDER_ATOMIC) || '';

            var code = JST['bq_bluetooth_send']({
                'statement_send': statement_send
            });

            return code;
        };

        /**
         * bq_bluetooth_send block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_send = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_send',
            /**
             * bq_bluetooth_send initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_SEND'));

                this.setInputsInline(false);


                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_button/bq_button.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_button = function() {

            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            });

            var code = JST['bq_button']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_button block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_button = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'botón'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_button',
            /**
             * bq_button initialization
             **/
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_PIN'))
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_buttons/bq_buttons.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_buttons code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_buttons = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
            var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
            var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
            var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');
            code_btn3 = code_btn3.replace(/&quot;/g, '"');
            code_btn4 = code_btn4.replace(/&quot;/g, '"');
            code_btn5 = code_btn5.replace(/&quot;/g, '"');

            Blockly.Arduino.definitions_['define_buttons'] = JST['bq_buttons_definitions']({
                'dropdown_pin': dropdown_pin
            });


            var code = JST['bq_buttons']({
                'dropdown_pin': dropdown_pin,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2,
                'code_btn3': code_btn3,
                'code_btn4': code_btn4,
                'code_btn5': code_btn5
            });

            return code;
        };

        /**
         * bq_buttons block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_buttons = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'botones'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_buttons',
            /**
             * bq_buttons initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_PIN'))
                    .setCheck(Number);
                this.appendStatementInput('BUTN1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_A'));
                this.appendStatementInput('BUTN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_B'));
                this.appendStatementInput('BUTN3')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_C'));
                this.appendStatementInput('BUTN4')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_D'));
                this.appendStatementInput('BUTN5')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_E'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_infrared/bq_infrared.js
        /* global Blockly, options,  JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_infrared = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['bq_infrared_setups']({
                'dropdown_pin': dropdown_pin
            });

            var code = JST['bq_infrared']({
                'dropdown_pin': dropdown_pin
            });

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_infrared = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_infrared',
            /**
             * bq_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_PIN'))
                    .setCheck(Number);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_joystick/bq_joystick.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_joystick code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_joystick = function() {
            var pinx = Blockly.Arduino.valueToCode(this, 'PINX', Blockly.Arduino.ORDER_ATOMIC);
            var piny = Blockly.Arduino.valueToCode(this, 'PINY', Blockly.Arduino.ORDER_ATOMIC);
            var pinbutton = Blockly.Arduino.valueToCode(this, 'PINBUTTON', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.definitions_['define_joystick'] = JST['bq_joystick_definitions']({
                'pinx': pinx,
                'piny': piny,
                'pinbutton': pinbutton
            });

            var array = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC);
            var code = JST['bq_joystick']({
                'pinx': pinx,
                'array': array
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_joystick block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_joystick = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'joystick'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_joystick',
            /**
             * bq_joystick initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom));

                // this.appendValueInput('POS')
                //     .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_POSITION'))
                //     .setAlign(Blockly.ALIGN_RIGHT)
                //     .setCheck(Number);


                this.appendValueInput('PINX')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_X'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);

                this.appendValueInput('PINY')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_Y'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);

                this.appendValueInput('PINBUTTON')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_BUTTON'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);

                this.setOutput(true, Number);
                // this.setPreviousStatement(true, null);
                // this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_led/bq_led.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_led = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tag: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_led',
            /**
             * bq_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_PIN'))
                    .setCheck(Number);

                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_BQ_LED_ON') || 'ON', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_BQ_LED_OFF') || 'OFF', 'LOW']
                    ]), 'STAT')
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_LED_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_photoresistor/bq_photoresistor.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        //        var code = 'analogRead(' + dropdown_pin + ')';
        Blockly.Arduino.bq_photoresistor = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

            var code = JST['bq_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * bq_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_photoresistor = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'fotorresistencia'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_photoresistor',
            /**
             * bq_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_PIN'))
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_piezo_buzzer/bq_piezo_buzzer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_piezo_buzzer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC) || '';

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'zumbador'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzer',
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_PIN'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

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
                    ]), 'STAT') //523
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TOOLTIP'));
            }
        };


        // Source: src/blocks/bq_piezo_buzzerav/bq_piezo_buzzerav.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_piezo_buzzerav = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'zumbador avanzado'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzerav',
            /**
             * bq_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_PIN'))
                    .setCheck(Number);

                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TONE'));

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_potentiometer/bq_potentiometer.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_potentiometer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_potentiometer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'potenciómetro'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_potentiometer',
            /**
             * bq_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_PIN'))
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_TOOLTIP'));
            }
        };

        // Source: src/blocks/bt_serial_available/bt_serial_available.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bt_serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

            var code = JST['bt_serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
         */
        Blockly.Blocks.bt_serial_available = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bt_serial_available',
            /**
             * bt_serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_flow_statements/controls_flow_statements.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_flow_statements code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_flow_statements = function() {
            // Flow statements: continue, break.
            switch (this.getFieldValue('FLOW')) {
                case 'BREAK':
                    return 'break;\n';
                case 'CONTINUE':
                    return 'continue;\n';
            }
            throw 'Unknown flow statement.';
        };


        Blockly.Blocks.controls_flow_statements = {
            // Flow statements: continue, break.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_flow_statements',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                var dropdown = new Blockly.FieldDropdown(
                    [
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK') || 'BREAK', 'BREAK'],
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE') || 'CONTINUE', 'CONTINUE']
                    ]);
                this.appendDummyInput()
                    .appendField(dropdown, 'FLOW')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP'));
                this.setPreviousStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('FLOW');
                    return Blockly.Blocks.controls_flow_statements.TOOLTIPS[op];
                });
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a control statement?
                var block = this;
                do {
                    if (block.type === 'controls_repeat' ||
                        block.type === 'controls_forEach' ||
                        block.type === 'controls_for' ||
                        block.type === 'controls_whileUntil') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
            BREAK: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'),
            CONTINUE: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE')
        };

        // Source: src/blocks/controls_for/controls_for.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_for code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_for = function() {
            var variable0 = this.getFieldValue('VAR') || '';

            var argument0 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var code;
            // if (argument0.match(/^-?\d+(\.\d+)?$/) && argument1.match(/^-?\d+(\.\d+)?$/)) {
            // Both arguments are simple numbers.
            var up = parseFloat(argument0) <= parseFloat(argument1);
            code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
                variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
                variable0 + (up ? '++' : '--') + ') {\n' +
                branch + '}\n';
            // } 
            // else {
            //     code = '';
            //     // Cache non-trivial values to variables to prevent repeated look-ups.
            //     var startVar = argument0;
            //     // if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
            //     //     startVar = Blockly.Arduino.variableDB_.getDistinctName(variable0 + '_start', Blockly.Variables.NAME_TYPE);
            //     //     code += 'int ' + startVar + ' = ' + argument0 + ';\n';
            //     // }
            //     var endVar = argument1;
            //     // if (!argument1.match(/^\w+$/) && !argument1.match(/^-?\d+(\.\d+)?$/)) {
            //     //     endVar = Blockly.Arduino.variableDB_.getDistinctName(variable0 + '_end', Blockly.Variables.NAME_TYPE);
            //     //     code += 'int ' + endVar + ' = ' + argument1 + ';\n';
            //     // }
            //     code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
            //         '    (' + startVar + ' <= ' + endVar + ') ? ' +
            //           variable0 + ' <= ' + endVar + ' : ' +
            //           variable0 + ' >= ' + endVar + ';\n' +
            //           '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +
            //               ') ? 1 : -1) {\n' +
            //           branch + '}\n';
            // }
            return code;
        };


        Blockly.Blocks.controls_for = {
            // For loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_for',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'))
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                this.appendValueInput('FROM')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                this.appendValueInput('TO')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return RoboBlocks.LANG_CONTROLS_FOR_TOOLTIP.replace('%1',
                        thisBlock.getFieldValue('VAR'));
                });
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.last_variables) {
                    this.last_variables = Blockly.Variables.allVariables();
                }
                var variables = Blockly.Variables.allVariables();

                for (var i in variables) {
                    if (Blockly.Variables.allVariables()[i] !== this.last_variables[i]) {
                        try {
                            this.removeInput('DUMMY');
                            this.removeInput('FROM');
                            this.removeInput('TO');
                            this.removeInput('DO');


                            this.appendDummyInput('DUMMY')
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'))
                                .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');


                            this.appendValueInput('FROM')
                                .setCheck(Number)
                                .setAlign(Blockly.ALIGN_RIGHT)
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                            this.appendValueInput('TO')
                                .setCheck(Number)
                                .setAlign(Blockly.ALIGN_RIGHT)
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                            this.appendStatementInput('DO')
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));

                        } catch (e) {}
                        this.last_variables = Blockly.Variables.allVariables();
                    }
                }
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            }
        };


        // Source: src/blocks/controls_if/controls_if.js
        /* global Blockly, JST,  RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_if code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_if = function() {
            // If/elseif/else condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
            argument = argument.replace(/&quot;/g, '"');

            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);

            var code = JST['controls_if']({
                'argument': argument,
                'branch': branch
            });

            for (n = 1; n <= this.elseifCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                code += JST['controls_elseif']({
                    'argument': argument,
                    'branch': branch
                });
            }
            if (this.elseCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'ELSE');
                code += JST['controls_else']({
                    'argument': argument,
                    'branch': branch
                });
            }
            branch = branch.replace(/&quot;/g, '"');
            code = code.replace(/&quot;/g, '"');

            return code + '\n';
        };

        /**
         * controls_if block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_if = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            tags: ['bq'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_if',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendStatementInput('DO0')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                    'controls_if_else'
                ]));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_1');
                    } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_2');
                    } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_3');
                    } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_4');
                    }
                    return '';
                });
                this.elseifCount_ = 0;
                this.elseCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.elseifCount_ && !this.elseCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.elseifCount_) {
                    container.setAttribute('elseif', this.elseifCount_);
                }
                if (this.elseCount_) {
                    container.setAttribute('else', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
                this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
                for (var x = 1; x <= this.elseifCount_; x++) {
                    this.appendValueInput('IF' + x)
                        .setCheck(Boolean)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.elseCount_) {
                    this.appendStatementInput('ELSE')
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.elseifCount_; x++) {
                    var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
                    elseifBlock.initSvg();
                    connection.connect(elseifBlock.previousConnection);
                    connection = elseifBlock.nextConnection;
                }
                if (this.elseCount_) {
                    var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
                    elseBlock.initSvg();
                    connection.connect(elseBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the else input blocks and remove the inputs.
                if (this.elseCount_) {
                    this.removeInput('ELSE');
                }
                this.elseCount_ = 0;
                // Disconnect all the elseif input blocks and remove the inputs.
                for (var x = this.elseifCount_; x > 0; x--) {
                    this.removeInput('IF' + x);
                    this.removeInput('DO' + x);
                }
                this.elseifCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            this.elseifCount_++;
                            var ifInput = this.appendValueInput('IF' + this.elseifCount_)
                                .setCheck(Boolean)
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                            var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                            doInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                ifInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_if_else':
                            this.elseCount_++;
                            var elseInput = this.appendStatementInput('ELSE');
                            elseInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                elseInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            var inputIf = this.getInput('IF' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputIf && inputIf.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_if_else':
                            inputDo = this.getInput('ELSE');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            }
        };

        Blockly.Blocks.controls_if_if = {
            // If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_IF_Field_IF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_IF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_elseif = {
            // Else-If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_else = {
            // Else condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSE_Field_ELSE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSE_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/controls_switch/controls_switch.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * contrls_switch code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_switch = function() {
            // switch condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF0',
                Blockly.Arduino.ORDER_NONE) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
            var code = 'switch (' + argument + ')\n{';
            for (n = 1; n <= this.switchCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n, Blockly.Arduino.ORDER_NONE) || '';
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
            }
            if (this.defaultCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
                code += '  \n  default:\n  {\n' + branch + '  }';
            }
            return code + '\n}\n';
        };


        Blockly.Blocks.controls_switch = {
            // switch condition.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_switch',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_switch_case', 'controls_switch_default']));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_1');
                    } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_2');
                    } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_3');
                    } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_4');
                    }
                    return '';
                });
                this.defaultCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.switchCount_ && !this.defaultCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.switchCount_) {
                    container.setAttribute('case', this.switchCount_);
                }
                if (this.defaultCount_) {
                    container.setAttribute('default', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.switchCount_ = window.parseInt(xmlElement.getAttribute('case'), 10);
                this.defaultCount_ = window.parseInt(xmlElement.getAttribute('default'), 10);
                for (var x = 1; x <= this.switchCount_; x++) {
                    this.appendValueInput('SWITCH' + x)
                        .setCheck(Number)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                    this.setInputsInline(true);
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.defaultCount_) {
                    this.appendStatementInput('DEFAULT')
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch_switch');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.switchCount_; x++) {
                    var switchBlock = Blockly.Block.obtain(workspace, 'controls_switch_case');
                    switchBlock.initSvg();
                    connection.connect(switchBlock.previousConnection);
                    connection = switchBlock.nextConnection;
                }
                if (this.defaultCount_) {
                    var defaultBlock = Blockly.Block.obtain(workspace, 'controls_switch_default');
                    defaultBlock.initSvg();
                    connection.connect(defaultBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the switch blocks and remove the inputs.
                if (this.defaultCount_) {
                    this.removeInput('DEFAULT');
                }
                this.defaultCount_ = 0;
                // Disconnect all the switch input blocks and remove the inputs.
                for (var x = this.switchCount_; x > 0; x--) {
                    this.removeInput('SWITCH' + x);
                    this.removeInput('DO' + x);
                }
                this.switchCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            this.switchCount_++;
                            var case_lang;
                            if (this.switchCount_ === 1) {
                                case_lang = RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_IS');
                            } else {
                                case_lang = RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE');
                            }
                            var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                                .setCheck(Number)
                                .appendField(case_lang)
                                .setAlign(Blockly.ALIGN_RIGHT);
                            this.setInputsInline(true);

                            var doInput = this.appendStatementInput('DO' + this.switchCount_);
                            doInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DO'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                switchInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_switch_default':
                            this.defaultCount_++;
                            var defaultInput = this.appendStatementInput('DEFAULT');
                            defaultInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                defaultInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            var inputSwitch = this.getInput('SWITCH' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputSwitch && inputSwitch.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_switch_default':
                            inputDo = this.getInput('DEFAULT');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            }
        };


        Blockly.Blocks.controls_switch_switch = {
            // If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip('Switch');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_case = {
            // case condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('Switch case');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_default = {
            // default condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip('Switch default');
                this.contextMenu = false;
            }
        };
        // Source: src/blocks/controls_whileUntil/controls_whileUntil.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_whileUntil code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_whileUntil = function() {
            // Do while/until loop.
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_NONE) || '';
            argument0 = argument0.replace(/&quot;/g, '"');

            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');


            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            if (this.getFieldValue('MODE') === 'UNTIL') {
                if (!argument0.match(/^\w+$/)) {
                    argument0 = '(' + argument0 + ')';
                }
                argument0 = '!' + argument0;
            }
            var code = JST['controls_whileUntil']({
                'argument0': argument0,
                'branch': branch
            });

            return code;
        };


        Blockly.Blocks.controls_whileUntil = {
            // Do while/until loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_whileUntil',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
                    ]), 'MODE');
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('MODE');
                    return Blockly.Blocks.controls_whileUntil.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.controls_whileUntil.TOOLTIPS = {
            WHILE: RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'),
            UNTIL: RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL')
        };

        // Source: src/blocks/inout_analog_read/inout_analog_read.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_analog_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_read',
            /**
             * inout_analog_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ'));
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_analog_write/inout_analog_write.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_analog_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_write = function() {

            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_write',
            /**
             * inout_analog_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE'));
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_builtin_led/inout_builtin_led.js
        /* global Blockly, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_builtin_led',
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED'))
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_ON') || 'ON', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_OFF') || 'OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_digital_read/inout_digital_read.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_digital_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_read',
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ'));
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_digital_write/inout_digital_write.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_digital_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_write = function() {

            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_write',
            /**
             * inout_digital_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE'))
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH') || 'HIGH', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW') || 'LOW', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setInputsInline(true);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_highlow/inout_highlow.js
        /* global Blockly, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_highlow',
            /**
             * inout_highlow initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_HIGH') || 'HIGH', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_LOW') || 'LOW', 'LOW']
                    ]), 'BOOL');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_clear/lcd_clear.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_clear code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_clear = function() {
            var code = JST['lcd_clear']({});
            return code;
        };

        /**
         * lcd_clear block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_clear = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_clear',
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_CLEAR'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_CLEAR_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_def/lcd_def.js
        /* global Blockly, JST, options, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_def code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_def = function() {
            Blockly.Arduino.definitions_['define_softwareserial'] = JST['lcd_def_definitions']({});
            Blockly.Arduino.setups_['setup_bluetooth_'] = JST['lcd_def_setups']({});
            return '';
        };

        /**
         * lcd_def block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['bq', 'lcd'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_def',
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF'))
                    .appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));


                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_print/lcd_print.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_print code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_print = function() {
            var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC);
            var xcoor = Blockly.Arduino.valueToCode(this, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var ycoor = Blockly.Arduino.valueToCode(this, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);

            var code;
            if (this.getFieldValue('POS') === 'TRUE') {
                code = JST['lcd_print_pos']({
                    'val': val,
                    'xcoor': xcoor,
                    'ycoor': ycoor
                });
            } else {
                code = JST['lcd_print']({
                    'val': val
                });
            }

            return code;
        };

        /**
         * lcd_print block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_print = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_print',
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendValueInput('VAL')
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_POSITION'))
                    .appendField(new Blockly.FieldCheckbox('FALSE'), 'POS')
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.last_pos = this.getFieldValue('POS');

                this.getPosition();

                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_PRINT_TOOLTIP'));
            },
            getPosition: function() {
                try {
                    this.removeInput('XCOOR');
                    this.removeInput('YCOOR');
                } catch (e) {}

                if (this.getFieldValue('POS') === 'TRUE') {
                    this.appendValueInput('XCOOR')
                        .appendField('row: ')
                        .setAlign(Blockly.ALIGN_RIGHT);

                    this.appendValueInput('YCOOR')
                        .appendField('column: ')
                        .setAlign(Blockly.ALIGN_RIGHT);

                }

            },
            onchange: function() {

                if (this.getFieldValue('POS') !== this.last_pos) {
                    this.getPosition();
                    this.last_pos = this.getFieldValue('POS');
                }
            }
        };

        // Source: src/blocks/lcd_setBacklight/lcd_setBacklight.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_setBacklight code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_setBacklight = function() {
            // Blockly.Arduino.definitions_['define_softwareserial'] = JST['lcd_setBacklight_definitions']({});
            // Blockly.Arduino.setups_['setup_bluetooth_']= JST['lcd_setBacklight_setups']({});
            var state = this.getFieldValue('STATE');
            var code = JST['lcd_setBacklight']({
                'state': state
            });
            return code;
        };

        /**
         * lcd_setBacklight block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_setBacklight = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_setBacklight',
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT'))
                    .appendField(new Blockly.FieldDropdown([
                        ['LOW', 'LOW'],
                        ['HIGH', 'HIGH']
                    ]), 'STATE')
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT_CLOSE'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));


                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT_TOOLTIP'));
            }
        };

        // Source: src/blocks/logic_boolean/logic_boolean.js
        /* global Blockly, RoboBlocks */

        /**
         * logic_boolean code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_boolean = function() {
            // Boolean values true and false.
            var code = (this.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.logic_boolean = {
            // Boolean data type: true and false.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_boolean',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TRUE'), 'TRUE'],
                        [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_FALSE'), 'FALSE']
                    ]), 'BOOL');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TOOLTIP'));
            }
        };
        // Source: src/blocks/logic_compare/logic_compare.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * logic_compare code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.logic_compare = function() {
            // Comparison operator.
            var mode = this.getFieldValue('OP');
            var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
            var order = (operator === '==' || operator === '!=') ?
                Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            var code = JST['logic_compare']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });

            return [code, order];
        };

        Blockly.Arduino.logic_compare.OPERATORS = {
            EQ: '==',
            NEQ: '!=',
            LT: '<',
            LTE: '<=',
            GT: '>',
            GTE: '>='
        };


        Blockly.Blocks.logic_compare = {
            // Comparison operator.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_compare',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A');
                this.appendValueInput('B')
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_compare.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.logic_compare.OPERATORS = [
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE']
        ];

        Blockly.Blocks.logic_compare.TOOLTIPS = {
            EQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_EQ'),
            NEQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_NEQ'),
            LT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LT'),
            LTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LTE'),
            GT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GT'),
            GTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GTE')
        };

        // Source: src/blocks/logic_negate/logic_negate.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * logic_negate code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_negate = function() {
            // Negation.
            var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
            var code = JST['logic_negate']({
                'argument0': argument0
            });

            //'!' + argument0;
            return [code, order];
        };


        Blockly.Blocks.logic_negate = {
            // Negation.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_negate',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_LOGIC_NEGATE_INPUT_NOT'));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_NEGATE_TOOLTIP'));
            }
        };

        // Source: src/blocks/logic_operation/logic_operation.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * logic_operation code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.logic_operation = function() {
            // Operations 'and', 'or'.
            var operator = (this.getFieldValue('OP') === 'AND') ? '&&' : '||';
            var order = (operator === '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND :
                Blockly.Arduino.ORDER_LOGICAL_OR;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            var code = JST['logic_operation']({
                'operator': operator,
                'argument0': argument0,
                'argument1': argument1
            });
            return [code, order];
        };


        Blockly.Blocks.logic_operation = {
            // Logical operations: 'and', 'or'.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_operation',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A')
                    .setCheck(Boolean);
                this.appendValueInput('B')
                    .setCheck(Boolean)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_AND') || 'AND', 'AND'],
                        [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_OR') || 'OR', 'OR']
                    ]), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_operation.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.logic_operation.TOOLTIPS = {
            AND: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_AND'),
            OR: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_OR')
        };
        // Source: src/blocks/math_arithmetic/math_arithmetic.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_arithmetic code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.math_arithmetic = function() {
            // Basic arithmetic operators, and power.
            var mode = this.getFieldValue('OP');
            var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
            var operator = tuple[0];
            var order = tuple[1];
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            var code;
            if (!operator) {
                code = JST['math_arithmetic_pow']({
                    'argument0': argument0,
                    'argument1': argument1
                });
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
            code = JST['math_arithmetic']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });
            return [code, order];
        };

        Blockly.Arduino.math_arithmetic.OPERATORS = {
            ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
            MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
            MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            POWER: [null, Blockly.Arduino.ORDER_NONE]
        };




        Blockly.Blocks.math_arithmetic = {
            // Basic arithmetic operator.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_arithmetic',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('A')
                    .setCheck(Number);
                this.appendValueInput('B')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_arithmetic.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_arithmetic.OPERATORS = [
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']
        ];

        Blockly.Blocks.math_arithmetic.TOOLTIPS = {
            ADD: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_ADD'),
            MINUS: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MINUS'),
            MULTIPLY: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY'),
            DIVIDE: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE'),
            POWER: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_POWER')
        };

        // Source: src/blocks/math_array/math_array.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_array code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_array = function() {
            // Numeric value.
            var code = '{';
            code += window.parseFloat(this.getFieldValue('NUM0'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM1'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM2'));
            code += '}';

            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.math_array = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_array',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_ARRAY3'))
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET3'))
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM0')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));


                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM1')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));

                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM2')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET4'));

                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_TOOLTIP'));
            }
        };


        Blockly.Blocks.math_array.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/math_modulo/math_modulo.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_modulo code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_modulo = function() {
            // Remainder computation.
            var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = JST['math_modulo']({
                'argument0': argument0,
                'argument1': argument1
            });

            //argument0 + ' % ' + argument1;
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_modulo = {
            // Remainder of a division.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_modulo',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('DIVIDEND')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MODULO_INPUT_DIVIDEND'));
                this.appendValueInput('DIVISOR')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('%');
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MODULO_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_number/math_number.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_number code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_number = function() {
            // Numeric value.
            var code = window.parseFloat(this.getFieldValue('NUM'));
            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, order];
        };

        Blockly.Blocks.math_number = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_number',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_number.validator), 'NUM');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_NUMBER_TOOLTIP'));
            }
        };

        Blockly.Blocks.math_number.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };

        // Source: src/blocks/math_random/math_random.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * math_random code generation
         * @return {String} Code generated with block parameters
         */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_random',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_AND'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_single/math_single.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_single code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_single = function() {
            // Math operators with single operand.
            var operator = this.getFieldValue('OP');
            var code;
            var arg;
            if (operator === 'NEG') {
                // Negation is a special case given its different operator precedents.
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_PREFIX) || '';
                if (arg[0] === '-') {
                    // --3 is not legal in Dart.
                    arg = ' ' + arg;
                }
                code = '-' + arg;
                return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
            }
            if (operator === 'ABS)') {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            } else if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            } else {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
            }
            var PI = 3.14159;
            // First, handle cases which generate values that don't need parentheses.
            switch (operator) {
                case 'ABS':
                    code = arg + '.abs()';
                    break;
                case 'ROOT':
                    code = 'sqrt(' + arg + ')';
                    break;
                case 'LN':
                    code = 'log(' + arg + ')';
                    break;
                case 'EXP':
                    code = 'exp(' + arg + ')';
                    break;
                case 'POW10':
                    code = 'pow(10,' + arg + ')';
                    break;
                case 'SIN':
                    code = 'sin(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'COS':
                    code = 'cos(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'TAN':
                    code = 'tan(' + arg + ' / 180 * ' + PI + ')';
                    break;
            }
            if (code) {
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
            // Second, handle cases which generate values that may need parentheses.
            switch (operator) {
                case 'LOG10':
                    code = 'log(' + arg + ') / log(10)';
                    break;
                case 'ASIN':
                    code = 'asin(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ACOS':
                    code = 'acos(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ATAN':
                    code = 'atan(' + arg + ') / ' + PI + ' * 180';
                    break;
                default:
                    throw 'Unknown math operator: ' + operator;
            }
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };


        Blockly.Blocks.math_single = {
            // Advanced math operators with single operand.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_single',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('NUM')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ROOT') || 'SQR ROOT', 'ROOT'],
                        [RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ABSOLUTE') || 'ABS', 'ABS'],
                        ['-', 'NEG'],
                        ['ln', 'LN'],
                        ['log10', 'LOG10'],
                        ['e^', 'EXP'],
                        ['10^', 'POW10']
                    ]), 'OP');
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_single.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_single.TOOLTIPS = {
            ROOT: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ROOT'),
            ABS: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ABS'),
            NEG: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_NEG'),
            LN: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LN'),
            LOG10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LOG10'),
            EXP: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_EXP'),
            POW10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_POW10')
        };

        // Source: src/blocks/pin_analog/pin_analog.js
        /* global Blockly, profiles, RoboBlocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_analog = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_analog = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_ANALOG'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            }
        };

        // Source: src/blocks/pin_digital/pin_digital.js
        /* global Blockly, profiles, RoboBlocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_digital = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_digital = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            }
        };

        // Source: src/blocks/procedures_callnoreturn/procedures_callnoreturn.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * procedures_callnoreturn code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.procedures_callnoreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];

            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || '';
            }
            var funcArgs = args.join(', ');
            var code = JST['procedures_callnoreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });

            return code;
        };




        Blockly.Blocks.procedures_callnoreturn = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callnoreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

                this.appendDummyInput('DUMMY')
                    .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');

                this.setPreviousStatement(true);
                this.setNextStatement(true);

                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;

                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');

                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');

                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        var proc_name = procedures[0][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },

            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[0].length > 0 || procedures[1].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[0][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][0] === funcName) {
                            return procedures[0][i][1];
                        }
                    }
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    console.log('procedures_callnoreturn-->procedure_name has changed!', this.getFieldValue('PROCEDURES'), this.last_procedure);
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    console.log('procedures_callnoreturn-->variables have changed!', this.getVariables(this.getFieldValue('PROCEDURES')), this.last_variables, this.getFieldValue('PROCEDURES'));
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num = 0;
                if (func_variables) {
                    // if (typeof this.last_variables==='undefined'){
                    //     this.last_variables=this.getVariables(this.getFieldValue('PROCEDURES'));
                    // }
                    if (func_variables.length >= this.last_variables) {
                        var_num = func_variables.length;
                    } else {
                        var_num = this.last_variables.length;
                    }
                    for (var x = 0; x < var_num; x++) {

                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x)
                                .appendField(func_variables[x], 'ARG_NAME' + x)
                                .setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }
                    }
                    this.arguments_ = func_variables;
                }
            },

            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {

                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY')
                                .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable)
                        .appendField(func_variables[variable])
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');

                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x)
                        .appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x)
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            }

        };
        // Source: src/blocks/procedures_callreturn/procedures_callreturn.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * procedures_callreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_callreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];

            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';
            }

            var funcArgs = args.join(', ');

            var code = JST['procedures_callreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });

            //funcName + '(' + args.join(', ') + ')';
            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };

        Blockly.Blocks.procedures_callreturn = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

                this.appendDummyInput('DUMMY')
                    .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');

                this.addVariables();
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLRETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');

                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');

                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        var proc_name = procedures[1][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },

            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[1][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][0] === funcName) {
                            return procedures[1][i][1];
                        }
                    }
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    // console.log('procedures_callnoreturn-->procedure_name has changed!', this.getFieldValue('PROCEDURES'),this.last_procedure);
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    // console.log('procedures_callnoreturn-->variables have changed!',this.getVariables(this.getFieldValue('PROCEDURES')),this.last_variables, this.getFieldValue('PROCEDURES'));
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num;

                if (func_variables) {
                    if (typeof this.last_variables === 'undefined') {
                        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    }
                    if (func_variables.length >= this.last_variables) {
                        var_num = func_variables.length;
                    } else {
                        var_num = this.last_variables.length;
                    }
                    for (var x = 0; x < var_num; x++) {

                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x)
                                .appendField(func_variables[x], 'ARG_NAME' + x)
                                .setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }

                        // console.log('getinput(arg+x)', this.getInput('ARG'+x), x);
                        // console.log('getinput(arg_name+x)', this.getFieldValue('ARG_NAME'+x), x);
                    }
                    this.arguments_ = func_variables;
                }
            },

            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {

                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY')
                                .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable)
                        .appendField(func_variables[variable])
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');

                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x)
                        .appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x)
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/procedures_defnoreturn/procedures_defnoreturn.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * procedures_defnoreturn code generation
         * @return {String} Code generated with block parameters
         */


        // Defining a procedure without a return value uses the same generator as
        // a procedure with a return value.
        Blockly.Arduino.procedures_defnoreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var returnType = 'void';
            var args = this.paramString;

            var code = JST['procedures_defnoreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch
            });

            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };




        Blockly.Blocks.procedures_defnoreturn = {
            // Define a procedure with no return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defnoreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(
                    RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), this);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput(name,
                        Blockly.Procedures.rename), 'NAME')
                    .appendField('', 'PARAMS');
                this.appendStatementInput('STACK')
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_DO'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_TOOLTIP'));
                this.arguments_ = [];
                this.type_arguments_ = [];
            },
            updateParams_: function() {
                // Check for duplicated arguments.
                var badArg = false;
                var hash = {};
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
                        badArg = true;
                        break;
                    }
                    hash['arg_' + this.arguments_[x].toLowerCase()] = true;
                }
                if (badArg) {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEF_DUPLICATE_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                } else {
                    this.setWarningText(null);
                }
                // Merge the arguments into a human-readable list.
                var params = [];
                for (var i in this.arguments_) {
                    params.push(this.type_arguments_[i] + ' ' + this.arguments_[i]);
                }

                this.paramString = params.join(', ');
                this.setFieldValue(this.paramString, 'PARAMS');
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg_name');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);

                    parameter = document.createElement('arg_type');
                    parameter.setAttribute('name', this.type_arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.arguments_ = [];
                this.type_arguments_ = [];

                var childNode;
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    childNode = xmlElement.childNodes[x];
                    if (childNode.nodeName.toLowerCase() === 'arg_name') {
                        this.arguments_.push(childNode.getAttribute('name'));
                    }
                    if (childNode.nodeName.toLowerCase() === 'arg_type') {
                        this.type_arguments_.push(childNode.getAttribute('name'));
                    }
                }
                this.updateParams_();
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorcontainer');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.arguments_.length; x++) {
                    var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
                    paramBlock.initSvg();
                    paramBlock.setFieldValue(this.type_arguments_[x], 'TYPE');
                    paramBlock.setFieldValue(this.arguments_[x], 'NAME');
                    // Store the old location.
                    paramBlock.oldLocation = x;
                    connection.connect(paramBlock.previousConnection);
                    connection = paramBlock.nextConnection;
                }
                // Initialize procedure's callers with blank IDs.
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, null);
                Blockly.Procedures.mutateCallers(this.getFieldValue('TYPE'), this.workspace, this.type_arguments_, null);

                return containerBlock;
            },
            compose: function(containerBlock) {
                this.arguments_ = [];
                this.paramIds_ = [];
                this.type_arguments_ = [];
                var paramBlock = containerBlock.getInputTargetBlock('STACK');
                var varName;
                while (paramBlock) {
                    varName = paramBlock.getFieldValue('NAME');
                    this.type_arguments_.push(paramBlock.getFieldValue('TYPE'));
                    this.arguments_.push(varName);
                    this.paramIds_.push(paramBlock.id);
                    paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
                }
                this.updateParams_();
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, this.paramIds_);
            },
            dispose: function() {
                var name = this.getFieldValue('NAME');
                var editable = this.editable;
                var workspace = this.workspace;
                // Call parent's destructor.
                Blockly.Block.prototype.dispose.apply(this, arguments);
                if (editable) {
                    // Dispose of any callers.
                    Blockly.Procedures.disposeCallers(name, workspace);
                }
            },
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES NOT have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, false];
            },
            getVars: function() {
                return this.arguments_;
            },
            renameVar: function(oldName, newName) {
                var change = false;
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (Blockly.Names.equals(oldName, this.arguments_[x])) {
                        newName = this.validName(newName);
                        this.arguments_[x] = newName;
                        change = true;
                    }
                }
                if (change) {
                    this.updateParams_();
                    // Update the mutator's variables if the mutator is open.
                    if (this.mutator.isVisible_()) {
                        var blocks = this.mutator.workspace_.getAllBlocks();
                        var block;
                        for (x = 0; blocks.length; x++) {
                            block = blocks[x];
                            if (block.type === 'procedures_mutatorarg' && Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                                block.setFieldValue(newName, 'NAME');
                            }
                        }
                    }
                }
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');

                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');

                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_procedure !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_procedure = name;
                }
            }
        };

        Blockly.Blocks.procedures_mutatorcontainer = {
            // Procedure container (for mutator dialog).
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_MUTATORCONTAINER_Field'));
                this.appendStatementInput('STACK');
                this.setTooltip('');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.procedures_mutatorarg = {
            // Procedure argument (for mutator dialog).
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_MUTATORARG_Field'))
                    .appendField(new Blockly.FieldDropdown([
                        ['int', 'int'],
                        ['String', 'String']
                    ]), 'TYPE')
                    .appendField(new Blockly.FieldTextInput('x', Blockly.Blocks.procedures_mutatorarg.validator), 'NAME');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('');
                this.contextMenu = false;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_variable = name;
                }
            },
            validName: Blockly.Blocks.procedures_defnoreturn.validName
        };

        Blockly.Blocks.procedures_mutatorarg.validator = function(newVar) {
            // Merge runs of whitespace.  Strip leading and trailing whitespace.
            // Beyond this, all names are legal.
            newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');

            return newVar || null;
        };
        // Source: src/blocks/procedures_defreturn/procedures_defreturn.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * procedures_defreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_defreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
            returnValue = returnValue.replace(/&quot;/g, '"');

            var returnType = this.getReturnType();
            if (returnValue) {
                returnValue = '  return ' + returnValue + ';\n';
            }

            var args = this.paramString;

            var code = JST['procedures_defreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch,
                'returnValue': returnValue
            });


            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };



        Blockly.Blocks.procedures_defreturn = {
            // Define a procedure with a return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Procedures are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(
                    RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE'), this);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput(name,
                        Blockly.Procedures.rename), 'NAME')
                    .appendField('', 'PARAMS');
                this.appendStatementInput('STACK')
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_DO'));
                this.appendValueInput('RETURN')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_TOOLTIP'));
                this.arguments_ = [];
            },
            getReturnType: function() {
                var returnType;
                var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
                if (!returnValue) {
                    returnType = 'void';
                } else if ((returnValue.search('analogRead') >= 0) || (returnValue.search('digitalRead') >= 0) || (returnValue.search('Distanc') >= 0) || (!isNaN(parseFloat(returnValue))) || returnValue[0] === '{' || returnValue.search('\\[') >= 0) {
                    returnType = 'int';
                } else if (returnValue.search('readJoystick') >= 0) {
                    returnType = 'int *';
                } else {
                    returnType = 'String';
                }
                return returnType;
            },
            updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
            decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
            compose: Blockly.Blocks.procedures_defnoreturn.compose,
            dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, true];
            },
            getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
            renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
            mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
            domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
            validName: Blockly.Blocks.procedures_defnoreturn.validName,
            onchange: Blockly.Blocks.procedures_defnoreturn.onchange
        };

        // Source: src/blocks/procedures_ifreturn/procedures_ifreturn.js
        /* global Blockly, RoboBlocks */

        /**
         * procedures_ifreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_ifreturn = function() {
            // Conditionally return value from a procedure.
            var condition = Blockly.Arduino.valueToCode(this, 'CONDITION',
                Blockly.Arduino.ORDER_NONE) || '';
            var code = 'if (' + condition + ') {\n';
            if (this.hasReturnValue_) {
                var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE) || '';
                code += '  return ' + value + ';\n';
            } else {
                code += '  return;\n';
            }
            code += '}\n';
            return code;
        };



        Blockly.Blocks.procedures_ifreturn = {
            // Conditionally return value from a procedure.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_ifreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendValueInput('CONDITION')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_TOOLTIP'));
                this.hasReturnValue_ = true;
            },
            mutationToDom: function() {
                // Save whether this block has a return value.
                var container = document.createElement('mutation');
                container.setAttribute('value', Number(this.hasReturnValue_));
                return container;
            },
            domToMutation: function(xmlElement) {
                // Restore whether this block has a return value.
                var value = xmlElement.getAttribute('value');
                this.hasReturnValue_ = (value === 1);
                // if (!this.hasReturnValue_) {
                //     this.removeInput('VALUE');
                // }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a procedure?
                var block = this;
                do {
                    if (block.type === 'procedures_defreturn') {
                        console.log('aaaaaaaaaaaa', block.type);
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    // If needed, toggle whether this block has a return value.
                    // if (block.type === 'procedures_defnoreturn' && this.hasReturnValue_) {
                    //     this.removeInput('VALUE');
                    //     this.hasReturnValue_ = false;
                    // } else if (block.type === 'procedures_defreturn' && !this.hasReturnValue_) {
                    //     this.appendValueInput('VALUE');
                    //     this.hasReturnValue_ = true;
                    // }
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        // Source: src/blocks/serial_available/serial_available.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_available',
            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_print/serial_print.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_print',
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_println/serial_println.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_println',
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_read/serial_read.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_read',
            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ'));
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_special/serial_special.js
        /* global Blockly, JST, RoboBlocks */
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_special',
            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TAB') || 'TAB', '\\t'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN') || 'CARRIAGE RETURN', '\\r'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED') || 'LINE FEED', '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP'));
            }
        };

        // Source: src/blocks/servo_cont/servo_cont.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * servo_cont code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_cont = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var value_degree = this.getFieldValue('ROT') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '';

            Blockly.Arduino.definitions_['include_servo'] = JST['servo_cont_definitions_include']({});


            Blockly.Arduino.definitions_['define_servo' + dropdown_pin] = JST['servo_cont_definitions']({
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_cont',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_PIN'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_ROT'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_CLOCKWISE') || 'CLOCKWISE', '0'],
                        [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE') || 'ANTICLOCKWISE', '180'],
                        [RoboBlocks.locales.getKey('LANG_SERVO_CONT_STOPPED') || 'STOPPED', '90']
                    ]), 'ROT');
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_DELAY'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_CONT_TOOLTIP'));
            }
        };

        // Source: src/blocks/servo_move/servo_move.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * servo_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_move = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.definitions_['include_servo'] = JST['servo_move_definitions_include']({
                'dropdown_pin': dropdown_pin
            });

            Blockly.Arduino.definitions_['define_servo' + dropdown_pin] = JST['servo_move_definitions']({
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_PIN'));
                this.appendValueInput('DEGREE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DEGREES'));
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DELAY'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_TOOLTIP'));
            }
        };

        // Source: src/blocks/text/text.js
        /* global Blockly, RoboBlocks */

        /**
         * text code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text = function() {
            // Text value.
            var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text = {
            // Text value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField('"')
                    .appendField(new Blockly.FieldTextInput(''), 'TEXT')
                    .appendField('"');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_TEXT_TOOLTIP'));
            }
        };

        // Source: src/blocks/text_append/text_append.js
        /* global Blockly, RoboBlocks */

        /**
         * text_append code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_append = function() {
            // Append to a variable in place.
            var varName = this.getFieldValue('VAR') || '';
            var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            return varName + ' += String(' + argument0 + ');\n';
        };


        Blockly.Blocks.text_append = {
            // Append to a variable in place.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_append',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('TEXT')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'))
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return RoboBlocks.LANG_TEXT_APPEND_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
                });
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.last_variables) {
                    this.last_variables = Blockly.Variables.allVariables();
                }
                var variables = Blockly.Variables.allVariables();

                for (var i in variables) {
                    if (Blockly.Variables.allVariables()[i] !== this.last_variables[i]) {
                        try {
                            this.removeInput('TEXT');

                            this.appendValueInput('TEXT')
                                .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'))
                                .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                                .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));

                            this.setInputsInline(true);

                        } catch (e) {}
                        this.last_variables = Blockly.Variables.allVariables();
                    }
                }
            }
        };
        // Source: src/blocks/text_equalsIgnoreCase/text_equalsIgnoreCase.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_equalsIgnoreCase code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_equalsIgnoreCase = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            string1 = string1.replace(/&quot;/g, '"');
            var string2 = Blockly.Arduino.valueToCode(this, 'STRING2', Blockly.Arduino.ORDER_NONE);
            string2 = string2.replace(/&quot;/g, '"');

            var code = JST['text_equalsIgnoreCase']({
                'string1': string1,
                'string2': string2
            });

            return [code, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.text_equalsIgnoreCase = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_equalsIgnoreCase',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_IS'));

                this.appendValueInput('STRING2')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_EQUAL'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_join/text_join.js
        /* global Blockly, RoboBlocks */

        /**
         * text_join code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_join = function() {
            // Create a string made up of any number of elements of any type.
            var code;
            if (this.itemCount_ === 0) {
                return ['\'\'', Blockly.Arduino.ORDER_ATOMIC];
            } else if (this.itemCount_ === 1) {
                var argument0 = Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
                code = argument0;
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            } else {
                code = [];
                code[0] = 'String(' + (Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE) || '');
                for (var n = 1; n < this.itemCount_; n++) {
                    code[n] = ') + String(' + (Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE) || '');
                }
                code[this.itemCount_] = ')';
                code = code.join('');
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
        };

        Blockly.Blocks.text_join = {
            // Create a string made up of any number of elements of any type.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_join',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('ADD0')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                this.appendValueInput('ADD1');
                this.setOutput(true, String);
                this.setMutator(new Blockly.Mutator(['text_create_join_item']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_TOOLTIP'));
                this.itemCount_ = 2;
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                container.setAttribute('items', this.itemCount_);
                return container;
            },
            domToMutation: function(xmlElement) {
                for (var x = 0; x < this.itemCount_; x++) {
                    this.removeInput('ADD' + x);
                }
                this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
                for (x = 0; x < this.itemCount_; x++) {
                    var input = this.appendValueInput('ADD' + x);
                    if (x === 0) {
                        input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'text_create_join_container');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.itemCount_; x++) {
                    var itemBlock = Blockly.Block.obtain(workspace, 'text_create_join_item');
                    itemBlock.initSvg();
                    connection.connect(itemBlock.previousConnection);
                    connection = itemBlock.nextConnection;
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect all input blocks and remove all inputs.
                if (this.itemCount_ === 0) {
                    this.removeInput('EMPTY');
                } else {
                    for (var x = this.itemCount_ - 1; x >= 0; x--) {
                        this.removeInput('ADD' + x);
                    }
                }
                this.itemCount_ = 0;
                // Rebuild the block's inputs.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                while (itemBlock) {
                    var input = this.appendValueInput('ADD' + this.itemCount_);
                    if (this.itemCount_ === 0) {
                        input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                    // Reconnect any child blocks.
                    if (itemBlock.valueConnection_) {
                        input.connection.connect(itemBlock.valueConnection_);
                    }
                    this.itemCount_++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 0;
                while (itemBlock) {
                    var input = this.getInput('ADD' + x);
                    itemBlock.valueConnection_ = input && input.connection.targetConnection;
                    x++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
            }
        };



        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_Field_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };


        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TITLE_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/text_length/text_length.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_length code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.text_length = function() {
            // String length.
            var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            var code = JST['text_length']({
                'argument0': argument0
            });

            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };

        Blockly.Blocks.text_length = {
            // String length.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_length',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VALUE')
                    .setCheck([String, Array])
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_INPUT_LENGTH'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_substring/text_substring.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_substring code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_substring = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_NONE);
            var to = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_NONE);


            var code = JST['text_substring']({
                'string1': string1,
                'from': from,
                'to': to
            });

            return code;
        };

        Blockly.Blocks.text_substring = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_substring',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    // .setCheck(String)
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING'));

                this.appendValueInput('FROM')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_FROM'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('TO')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TO'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);
                // this.appendDummyInput()
                //     .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TOOLTIP'));
            }
        };
        // Source: src/blocks/variables_get/variables_get.js

        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * variables_get code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_get = function() {
            // Variable setter.
            var varName = this.getFieldValue('VAR') || '';
            this.var_type = RoboBlocks.variables[this.getFieldValue('VAR')];

            return [varName, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.variables_get = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_get',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                    .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                // this.last_variable=this.getFieldValue('VAR');

                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();

                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('DUMMY');
                //         }catch(e){}

                //         this.appendDummyInput('DUMMY')
                //             .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                //             .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                //         this.setFieldValue(this.last_variable, 'VAR');

                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            }
        };
        // Source: src/blocks/variables_global/variables_global.js

        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */

        /**
         * variables_global code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_global = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);

            var varName = this.getFieldValue('VAR') || '';

            if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue)) || (varValue.search('random') >= 0)) || varValue.search('\\[') >= 0) {
                varType = 'int';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';';
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '[0]=' + varValue[0] + ';\n  ' + varName + '[1]=' + varValue[1] + ';\n  ' + varName + '[2]=' + varValue[2] + ';';

            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if (varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (var i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int') {
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                        Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';';

                    }
                }
            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue];
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';';
            } else {
                varType = 'String';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';';
            }

            RoboBlocks.variables[varName] = varType;
            return '';
        };


        Blockly.Blocks.variables_global = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_global',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL'))
                    .appendField(new Blockly.FieldTextInput(''), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));

                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');

                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');

                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };

        // Source: src/blocks/variables_local/variables_local.js

        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */

        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_local = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var sufix = '';
            var code = '';


            if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue))) || (varValue.search('random') >= 0) || varValue.search('\\[') >= 0) {
                varType = 'int';
                code = varType + ' ' + varName + sufix + '=' + varValue + ';\n';
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                code = varType + varName + ';\n';
                code += varName + '[0]=' + varValue[0] + ';\n' + varName + '[1]=' + varValue[1] + ';\n' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                code = varType + varName + ';\n';
                code += varName + '=' + varValue + ';\n';
            } else if (varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (var i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int') {
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        code = varType + ' ' + varName + '=' + varValue + ';\n';
                    }
                }

            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue];
                code = varType + ' ' + varName + '=' + varValue + ';\n';
            } else {
                varType = 'String';
                code = varType + ' ' + varName + '=' + varValue + ';\n';

            }

            RoboBlocks.variables[varName] = varType;


            return code;
        };


        Blockly.Blocks.variables_local = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variable',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL'))
                    .appendField(new Blockly.FieldTextInput(''), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));

                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: Blockly.Blocks.variables_global.isVariable,
            onchange: Blockly.Blocks.variables_global.onchange,
            validName: Blockly.Blocks.variables_global.validName
        };

        // Source: src/blocks/variables_set/variables_set.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * variables_set code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_set = function() {
            // Variable setter.
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var varName = this.getFieldValue('VAR') || '';

            var code = JST['variables_set']({
                'varName': varName,
                'varValue': varValue
            });


            return code;
        };

        Blockly.Blocks.variables_set = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_set',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                    .appendField(new Blockly.FieldVariable(' '), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.setInputsInline(false);

                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }

                return dropdown;
            },
            onchange: function() {
                // this.last_variable=this.getFieldValue('VAR');
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();

                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('VALUE');

                //             this.appendValueInput('VALUE')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
                //                 .setAlign(Blockly.ALIGN_RIGHT);

                //             this.setInputsInline(false);
                //             this.setFieldValue(this.last_variable, 'VAR');

                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            }
        };
        // Source: src/blocks/zum_button/zum_button.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_button = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
                'dropdown_pin': dropdown_pin,
            });

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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'botón'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_button',
            /**
             * zum_button initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_PIN'));
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_follower/zum_follower.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_follower code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_follower = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC) || '';

            var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');

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

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_follower block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_follower = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_follower',
            /**
             * zum_follower initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203 * options.zoom, 165 * options.zoom));
                this.appendValueInput('PIN')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_LEFT'));
                this.appendValueInput('PIN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_RIGHT'));
                this.appendStatementInput('SENS1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_LEFT'));
                this.appendStatementInput('SENS2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_RIGHT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_infrared/zum_infrared.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_infrared = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_infrared',
            /**
             * zum_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_PIN'));
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_led/zum_led.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_led = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_led',
            /**
             * zum_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_PIN'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_STATE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ZUM_LED_ON') || 'ON', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_LED_OFF') || 'OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_LED_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_photoresistor/zum_photoresistor.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_photoresistor = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';

            var code = JST['zum_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * zum_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_photoresistor = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'fotorresistencia'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_photoresistor',
            /**
             * zum_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_PIN'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_piezo_buzzer/zum_piezo_buzzer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_piezo_buzzer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            //  Blockly.Arduino.setups_['setup_piezo_buzzer_' + dropdown_pin] = JST['zum_piezo_buzzer_setups']({
            //      'dropdown_pin': dropdown_pin,
            //      'dropdown_stat': dropdown_stat
            //  });


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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'zumbador'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzer',
            /**
             * zum_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_PIN'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_TONE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DO') || 'DO', '261'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_RE') || 'RE', '293'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_MI') || 'MI', '329'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_FA') || 'FA', '349'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SOL') || 'SOL', '392'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_LA') || 'LA', '440'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SI') || 'SI', '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_piezo_buzzerav/zum_piezo_buzzerav.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_piezo_buzzerav = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'zumbador avanzado'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzerav',
            /**
             * zum_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_PIN'));
                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_TONE'));

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_potentiometer/zum_potentiometer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_potentiometer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_potentiometer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'potenciómetro'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_potentiometer',
            /**
             * zum_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_PIN'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_TOOLTIP'));
            }
        };
        return Blockly.Blocks;
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
