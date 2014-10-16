/*! roboblocks - v0.0.6 - 2014-10-16
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

        RoboBlocks.LANG_COLOUR_BQ = '10';
        RoboBlocks.LANG_COLOUR_ZUM = '336';
        RoboBlocks.LANG_COLOUR_SERVO = '30';
        RoboBlocks.LANG_COLOUR_TEXT = '200';
        RoboBlocks.LANG_COLOUR_LOGIC = '120';
        RoboBlocks.LANG_COLOUR_ADVANCED = '260';
        RoboBlocks.LANG_COLOUR_VARIABLES = '300';
        RoboBlocks.LANG_COLOUR_PROCEDURES = '320';
        RoboBlocks.LANG_COLOUR_CONTROL = '80';
        RoboBlocks.LANG_COLOUR_MATH = '180';

        RoboBlocks.LANG_COLOUR_COMMUNICATION = '88';



        RoboBlocks.bluetooth = [];



        ///////////// COPY TO EN.JS

        //random : 
        RoboBlocks.LANG_VARIABLES_SET_ITEM = 'item';

        //logic blocks:
        RoboBlocks.LANG_CATEGORY_LOGIC = 'Logic';

        RoboBlocks.LANG_LOGIC_OPERATION_AND = 'and';
        RoboBlocks.LANG_LOGIC_OPERATION_OR = 'or';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Returns true if both inputs equal each other.';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Returns true if both inputs are not equal to each other.';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Returns true if the first input is smaller than the second input.';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Returns true if the first input is smaller than or equal to the second input.';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Returns true if the first input is greater than the second input.';
        RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Returns true if the first input is greater than or equal to the second input.';

        RoboBlocks.LANG_LOGIC_OPERATION_AND = 'and';
        RoboBlocks.LANG_LOGIC_OPERATION_OR = 'or';
        RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Returns true if both inputs are true.';
        RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Returns true if either inputs are true.';

        RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Returns true if both conditions are fulfilled';
        RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Returns true if one of the conditions is true';

        RoboBlocks.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
        RoboBlocks.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';
        RoboBlocks.LANG_LOGIC_NEGATE_HELPURL = '';
        RoboBlocks.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
        RoboBlocks.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';


        RoboBlocks.LANG_LOGIC_BOOLEAN_TRUE = 'true';
        RoboBlocks.LANG_LOGIC_BOOLEAN_FALSE = 'false';
        RoboBlocks.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

        RoboBlocks.LANG_LOGIC_NULL = 'null';
        RoboBlocks.LANG_LOGIC_NULL_TOOLTIP = 'Returns null.';

        //communication blocks: 
        RoboBlocks.LANG_CATEGORY_COMMUNICATION = 'Communication';

        RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE = 'Bluetooth receive data';
        RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH = 'Bluetooth';
        RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP = 'Returns the data received by the bq Bluetooth module';

        RoboBlocks.LANG_BQ_BLUETOOTH_SEND = 'Bluetooth send data';
        RoboBlocks.LANG_BQ_BLUETOOTH_SEND_SEND = 'Send';
        RoboBlocks.LANG_BQ_BLUETOOTH_SEND_TOOLTIP = 'Sends the input data using the bq Bluetooth module';


        RoboBlocks.LANG_BQ_BLUETOOTH_DEF = 'Bluetooth definition';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_BAUD_RATE = 'Baud rate';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN1 = 'RX';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN2 = 'TX';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_NAME = 'Name';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PINCODE = 'PinCode';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_RECEIVE = 'Receive';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_SEND = 'Send';
        RoboBlocks.LANG_BQ_BLUETOOTH_DEF_TOOLTIP = 'bq Bluetooth';

        RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE = 'Bluetooth Serial Available';
        RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP = 'Check wether the bluetooth is available or not';

        RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE = 'Serial Available';
        RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP = 'Check wether the serial port is available or not';

        RoboBlocks.LANG_ADVANCED_SERIAL_PRINT = 'Serial Print';
        RoboBlocks.LANG_ADVANCED_SERIAL_PRINT_TOOLTIP = 'Prints data to the console/serial port as human-readable ASCII text.';

        RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN = 'Serial Println';
        RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP = 'Prints data to the console/serial port as human-readable ASCII text and add CR.';

        RoboBlocks.LANG_ADVANCED_SERIAL_READ = 'Serial Read';
        RoboBlocks.LANG_ADVANCED_SERIAL_READ_TOOLTIP = 'Reads incoming serial data from serial port as human-readable ASCII text.';

        RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL = 'Special Chars';
        RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TAB = 'Tab';
        RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN = 'Carriage Return';
        RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED = 'Line Feed';
        RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP = 'Write special Chars';

        //bq blocks : 
        RoboBlocks.LANG_CATEGORY_BQ = 'bq bloqs';

        RoboBlocks.LANG_BQ_BAT = 'BAT';
        RoboBlocks.LANG_BQ_BAT_RED_PIN = 'RED PIN#';
        RoboBlocks.LANG_BQ_BAT_BLUE_PIN = 'BLUE PIN#';
        RoboBlocks.LANG_BQ_BAT_TOOLTIP = 'Output the measured distance';


        RoboBlocks.LANG_BQ_BUTTON = 'Button';
        RoboBlocks.LANG_BQ_BUTTON_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_BUTTON_TOOLTIP = 'bq Button';

        RoboBlocks.LANG_BQ_BUTTONS = 'Buttons';
        RoboBlocks.LANG_BQ_BUTTONS_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_BUTTONS_BUTTON_A = 'Button #A';
        RoboBlocks.LANG_BQ_BUTTONS_BUTTON_B = 'Button #B';
        RoboBlocks.LANG_BQ_BUTTONS_BUTTON_C = 'Button #C';
        RoboBlocks.LANG_BQ_BUTTONS_BUTTON_D = 'Button #D';
        RoboBlocks.LANG_BQ_BUTTONS_BUTTON_E = 'Button #E';
        RoboBlocks.LANG_BQ_BUTTONS_TOOLTIP = 'bq Buttons';


        RoboBlocks.LANG_BQ_INFRARED = 'Infrared Sensor';
        RoboBlocks.LANG_BQ_INFRARED_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_INFRARED_TOOLTIP = 'bq Infrared Sensor';

        RoboBlocks.LANG_BQ_JOYSTICK = 'Joystick';
        RoboBlocks.LANG_BQ_JOYSTICK_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_JOYSTICK_TOOLTIP = 'bq Joystick';

        RoboBlocks.LANG_BQ_LED = 'LED';
        RoboBlocks.LANG_BQ_LED_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_LED_STATE = 'state';
        RoboBlocks.LANG_BQ_LED_ON = 'ON';
        RoboBlocks.LANG_BQ_LED_OFF = 'OFF';
        RoboBlocks.LANG_BQ_LED_TOOLTIP = 'bq LED';

        RoboBlocks.LANG_BQ_PHOTORESISTOR = 'Photoresistor';
        RoboBlocks.LANG_BQ_PHOTORESISTOR_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_PHOTORESISTOR_TOOLTIP = 'Output the value of the photoresistor.';

        RoboBlocks.LANG_BQ_PIEZO_BUZZER = 'Buzzer';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_TONE = 'TONE';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_DO = 'DO';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_RE = 'RE';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_MI = 'MI';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_FA = 'FA';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_SOL = 'SOL';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_LA = 'LA';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_SI = 'SI';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_DURATION = 'Duration';
        RoboBlocks.LANG_BQ_PIEZO_BUZZER_TOOLTIP = 'Piezo Buzzer';

        RoboBlocks.LANG_BQ_PIEZO_BUZZERAV = 'Advanced Buzzer';
        RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TONE = 'TONE';
        RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_DURATION = 'Duration';
        RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TOOLTIP = 'Piezo Buzzer Advanced';

        RoboBlocks.LANG_BQ_POTENTIOMETER = 'Potentiometer';
        RoboBlocks.LANG_BQ_POTENTIOMETER_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_POTENTIOMETER_TOOLTIP = 'bq Potentiometer';


        //controls blocks : 
        RoboBlocks.LANG_CATEGORY_CONTROLS = 'Control';

        RoboBlocks.LANG_CONTROLS_BASE_DELAY_WAIT = 'Wait (ms)';
        RoboBlocks.LANG_CONTROLS_BASE_DELAY_TOOLTIP = 'Delay specific time (in ms)';

        RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
        RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
        RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
        RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
        RoboBlocks.LANG_CONTROLS_IF_MSG_IF = 'if';
        RoboBlocks.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
        RoboBlocks.LANG_CONTROLS_IF_MSG_ELSE = 'else';
        RoboBlocks.LANG_CONTROLS_IF_MSG_THEN = 'do';
        RoboBlocks.LANG_CONTROLS_IF_IF_Field_IF = 'if';
        RoboBlocks.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
        RoboBlocks.LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF = 'else if';
        RoboBlocks.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
        RoboBlocks.LANG_CONTROLS_IF_ELSE_Field_ELSE = 'else';
        RoboBlocks.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';
        RoboBlocks.LANG_CONTROLS_IF_IF_Field_IF = 'if';
        RoboBlocks.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';

        RoboBlocks.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
        RoboBlocks.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
        RoboBlocks.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
        RoboBlocks.LANG_CONTROLS_FOR_INPUT_TO = 'to';
        RoboBlocks.LANG_CONTROLS_FOR_INPUT_DO = 'do';
        RoboBlocks.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number. For each count, set the current count number to variable %1, and then do some statements.';

        RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
        RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
        RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
        RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

        RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_REPEAT = 'Repeat';
        RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_TIMES = 'times';
        RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO = 'do';
        RoboBlocks.LANG_CONTROLS_REPEAT_TOOLTIP = 'Repeat the code a certain number of times';

        RoboBlocks.LANG_CONTROLS_FOREACH_HELPURL = '';
        RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each item';
        RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
        RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
        RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
        RoboBlocks.LANG_CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the item to variable %1, and then do some statements.';

        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = '';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
        RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

        RoboBlocks.LANG_CONTROLS_SWITCH_HELPURL = '';
        RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_1 = 'Use the switch statement to select one of many blocks of code to be executed.';
        RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_2 = 'Use the switch statement to select one of many blocks of code to be executed.';
        RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_3 = 'Use the switch statement to select one of many blocks of code to be executed.';
        RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_4 = 'Use the switch statement to select one of many blocks of code to be executed.';
        RoboBlocks.LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP = 'The switch expression is evaluated once';
        RoboBlocks.LANG_CONTROLS_SWITCH_CASE_TOOLTIP = 'case';
        RoboBlocks.LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP = 'The default keyword specifies the code to run if there is no case match';


        //math blocks : 
        RoboBlocks.LANG_CATEGORY_MATH = 'Math';

        RoboBlocks.LANG_MATH_ADVANCED_MAP_MAP = 'Map ';
        RoboBlocks.LANG_MATH_ADVANCED_MAP_FROM = 'From [';
        RoboBlocks.LANG_MATH_ADVANCED_MAP_HYPHEN = '-';
        RoboBlocks.LANG_MATH_ADVANCED_MAP_BRACKET = ']';
        RoboBlocks.LANG_MATH_ADVANCED_MAP_TO = 'to [';
        RoboBlocks.LANG_MATH_ADVANCED_MAP_TOOLTIP = 'Re-maps a number from a certain range to another.';

        RoboBlocks.LANG_MATH_NUMBER_TOOLTIP = 'Number';

        RoboBlocks.LANG_MATH_BASE_MAP = 'Map ';
        RoboBlocks.LANG_MATH_BASE_MAP_VALUE_TO = 'Value to [0-';
        RoboBlocks.LANG_MATH_BASE_MAP_BRACKET = ']';
        RoboBlocks.LANG_MATH_BASE_MAP_TOOLTIP = 'Re-maps a number from [0-1024] to another.';

        RoboBlocks.LANG_MATH_SINGLE_OP_ROOT = 'square root';
        RoboBlocks.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Returns the square root of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Returns the absolute value of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Returns the negation of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_LN = 'Returns the natural logarithm of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Returns the base 10 logarithm of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Returns e to the power of a number.';
        RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Returns 10 to the power of a number.';

        //text blocks: 
        RoboBlocks.LANG_CATEGORY_TEXT = 'Text';

        RoboBlocks.LANG_TEXT_TEXT_HELPURL = '';
        RoboBlocks.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

        RoboBlocks.LANG_TEXT_JOIN_HELPURL = '';
        RoboBlocks.LANG_TEXT_JOIN_Field_CREATEWITH = 'create text with';
        RoboBlocks.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

        RoboBlocks.LANG_TEXT_CREATE_JOIN_Field_JOIN = 'join';
        RoboBlocks.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
        RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM = 'item';
        RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';
        RoboBlocks.LANG_TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
        RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'element';

        RoboBlocks.LANG_TEXT_APPEND_HELPURL = '';
        RoboBlocks.LANG_TEXT_APPEND_TO = 'to';
        RoboBlocks.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
        RoboBlocks.LANG_TEXT_APPEND_VARIABLE = 'item';
        RoboBlocks.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable %1.';

        RoboBlocks.LANG_TEXT_LENGTH_HELPURL = '';
        RoboBlocks.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length';
        RoboBlocks.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces) in the provided text.';

        // RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_IS='Is ';
        // RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_EQUAL=' equal to';
        // RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_QUESTION='?';
        RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_IS = '';
        RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_EQUAL = ' ==';
        RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_QUESTION = '';
        RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_TOOLTIP = 'Returns true if both input strings are equal, regardless of the case.';

        RoboBlocks.LANG_text_getBytes = 'get bytes of';
        RoboBlocks.LANG_TEXT_GETBYTES_TOOLTIP = 'Returns the number of bytes of the input string';

        RoboBlocks.LANG_TEXT_SUBSTRING = 'Crop ';
        RoboBlocks.LANG_TEXT_SUBSTRING_FROM = 'from';
        RoboBlocks.LANG_TEXT_SUBSTRING_TO = 'to';
        RoboBlocks.LANG_TEXT_SUBSTRING_TOOLTIP = 'Obtain a substring from the input string with the caracters between the two input numbers.';

        //advanced blocks : 
        RoboBlocks.LANG_CATEGORY_ADVANCED = 'Pin functions';

        RoboBlocks.LANG_ADVANCED_CONVERSION_CONVERT = 'Convert';
        RoboBlocks.LANG_ADVANCED_CONVERSION_DECIMAL = 'Decimal';
        RoboBlocks.LANG_ADVANCED_CONVERSION_HEXADECIMAL = 'Hexadecimal';
        RoboBlocks.LANG_ADVANCED_CONVERSION_OCTAL = 'Octal';
        RoboBlocks.LANG_ADVANCED_CONVERSION_BINARY = 'Binary';
        RoboBlocks.LANG_ADVANCED_CONVERSION_VALUE = 'value';
        RoboBlocks.LANG_ADVANCED_CONVERSION_TOOLTIP = 'Base convert a number';

        RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ = 'AnalogRead PIN#';
        RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP = 'Reads the value from a specified digital pin';

        RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE = 'AnalogWrite PIN#';
        RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE = 'value';
        RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP = 'Write analog value between 0 and 255 to a specific Port';

        RoboBlocks.LANG_ADVANCED_BUILTIN_LED = 'BUILTIN LED';
        RoboBlocks.LANG_ADVANCED_BUILTIN_LED_STATE = 'state';
        RoboBlocks.LANG_ADVANCED_BUILTIN_LED_ON = 'ON';
        RoboBlocks.LANG_ADVANCED_BUILTIN_LED_OFF = 'OFF';
        RoboBlocks.LANG_ADVANCED_BUILTIN_LED_TOOLTIP = 'bq LED';

        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ = 'DigitalRead PIN#';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP = 'Reads the value from a specified digital pin';

        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE = 'DigitalWrite';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN = 'PIN#';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE = 'state';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH = 'HIGH';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW = 'LOW';
        RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP = 'bq digital_write';


        RoboBlocks.LANG_ADVANCED_HIGHLOW_HIGH = 'HIGH';
        RoboBlocks.LANG_ADVANCED_HIGHLOW_LOW = 'LOW';
        RoboBlocks.LANG_ADVANCED_HIGHLOW_TOOLTIP = 'HIGH OR LOW';

        RoboBlocks.LANG_ADVANCED_MATH_RANDOM = 'Random between';
        RoboBlocks.LANG_ADVANCED_MATH_RANDOM_AND = ' and ';
        RoboBlocks.LANG_ADVANCED_MATH_RANDOM_TOOLTIP = 'Assign a random number';



        //procedures blocks
        RoboBlocks.LANG_CATEGORY_PROCEDURES = 'Procedures';

        RoboBlocks.LANG_PROCEDURES_DEFNORETURN_HELPURL = '';
        RoboBlocks.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
        RoboBlocks.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
        RoboBlocks.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure with no return value.';

        RoboBlocks.LANG_PROCEDURES_DEFRETURN_HELPURL = '';
        RoboBlocks.LANG_PROCEDURES_DEFRETURN_PROCEDURE = RoboBlocks.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
        RoboBlocks.LANG_PROCEDURES_DEFRETURN_DO = RoboBlocks.LANG_PROCEDURES_DEFNORETURN_DO;
        RoboBlocks.LANG_PROCEDURES_DEFRETURN_RETURN = 'return';
        RoboBlocks.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure with a return value.';

        RoboBlocks.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This procedure has duplicate parameters.';

        RoboBlocks.LANG_PROCEDURES_CALLNORETURN_HELPURL = '';
        RoboBlocks.LANG_PROCEDURES_CALLNORETURN_CALL = 'do';
        RoboBlocks.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
        RoboBlocks.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';

        RoboBlocks.LANG_PROCEDURES_CALLRETURN_HELPURL = '';
        RoboBlocks.LANG_PROCEDURES_CALLRETURN_CALL = RoboBlocks.LANG_PROCEDURES_CALLNORETURN_CALL;
        RoboBlocks.LANG_PROCEDURES_CALLRETURN_PROCEDURE = RoboBlocks.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
        RoboBlocks.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';

        RoboBlocks.LANG_PROCEDURES_MUTATORCONTAINER_Field = 'parameters';
        RoboBlocks.LANG_PROCEDURES_MUTATORARG_Field = 'variable:';

        RoboBlocks.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';

        RoboBlocks.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then returns a value.';
        RoboBlocks.LANG_PROCEDURES_IFRETURN_WARNING = 'Warning: This block may only be used within a procedure with a return value.';


        //variables blocks : 
        RoboBlocks.LANG_CATEGORY_VARIABLES = 'Variables';

        RoboBlocks.LANG_VARIABLES_DECLARE = 'Declare a variable ';
        RoboBlocks.LANG_VARIABLES_DECLARE_TYPE = 'of type ';
        RoboBlocks.LANG_VARIABLES_DECLARE_TOOLTIP = 'Declare a variable of type int or String';

        RoboBlocks.LANG_VARIABLES_GLOBAL = 'New variable ';
        RoboBlocks.LANG_VARIABLES_GLOBAL_TYPE = 'of type ';
        RoboBlocks.LANG_VARIABLES_GLOBAL_EQUALS = 'equals';
        RoboBlocks.LANG_VARIABLES_GLOBAL_TOOLTIP = 'Declare and define a GLOBAL variable of type int or String';

        RoboBlocks.LANG_VARIABLES_LOCAL = 'New LOCAL variable ';
        RoboBlocks.LANG_VARIABLES_LOCAL_TYPE = 'of type ';
        RoboBlocks.LANG_VARIABLES_LOCAL_EQUALS = 'equals';
        RoboBlocks.LANG_VARIABLES_LOCAL_TOOLTIP = 'Declare and define a LOCAL variable of type int or String';

        RoboBlocks.LANG_VARIABLES_DEFINE = 'Define variable ';
        RoboBlocks.LANG_VARIABLES_DEFINE_AS = 'as';
        RoboBlocks.LANG_VARIABLES_DEFINE_TOOLTIP = 'Define the value of a variable';


        RoboBlocks.LANG_VARIABLES_SET = 'Set variable ';
        RoboBlocks.LANG_VARIABLES_SET_AS = 'as';
        RoboBlocks.LANG_VARIABLES_SET_TOOLTIP = 'Set the value of a variable';

        RoboBlocks.LANG_VARIABLES_GET = 'Variable ';
        RoboBlocks.LANG_VARIABLES_GET_TOOLTIP = 'Get the value of a variable';

        RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP = 'Select the PIN';

        //zum blocks : 
        RoboBlocks.LANG_CATEGORY_ZUM = 'zum';

        RoboBlocks.LANG_ZUM_BUTTON = 'Button';
        RoboBlocks.LANG_ZUM_BUTTON_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_BUTTON_TOOLTIP = 'bq Button';

        RoboBlocks.LANG_ZUM_FOLLOWER = 'Infrared Sensor';
        RoboBlocks.LANG_ZUM_FOLLOWER_PIN_LEFT = 'PIN LEFT#';
        RoboBlocks.LANG_ZUM_FOLLOWER_PIN_RIGHT = 'PIN RIGHT#';
        RoboBlocks.LANG_ZUM_FOLLOWER_LEFT = 'Left';
        RoboBlocks.LANG_ZUM_FOLLOWER_RIGHT = 'Right';
        RoboBlocks.LANG_ZUM_FOLLOWER_TOOLTIP = 'bq Infrared Sensor';

        RoboBlocks.LANG_ZUM_INFRARED = 'Infrared Sensor';
        RoboBlocks.LANG_ZUM_INFRARED_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_INFRARED_TOOLTIP = 'bq Infrared Sensor';

        RoboBlocks.LANG_ZUM_LED = 'LED';
        RoboBlocks.LANG_ZUM_LED_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_LED_ON = 'ON';
        RoboBlocks.LANG_ZUM_LED_OFF = 'OFF';
        RoboBlocks.LANG_ZUM_LED_TOOLTIP = 'bq LED';

        RoboBlocks.LANG_ZUM_PHOTORESISTOR = 'Photoresistor';
        RoboBlocks.LANG_ZUM_PHOTORESISTOR_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_PHOTORESISTOR_TOOLTIP = 'Output the value of the photoresistor.';

        RoboBlocks.LANG_ZUM_PIEZO_BUZZER = 'Buzzer';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TONE = 'TONE';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DO = 'DO';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_RE = 'RE';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_MI = 'MI';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_FA = 'FA';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SOL = 'SOL';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_LA = 'LA';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SI = 'SI';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DURATION = 'Duration';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TOOLTIP = 'Piezo Buzzer';

        RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV = 'Advanced Buzzer';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TONE = 'TONE';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_DURATION = 'Duration';
        RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP = 'Piezo Buzzer Advanced';

        RoboBlocks.LANG_ZUM_POTENTIOMETER = 'Potentiometer';
        RoboBlocks.LANG_ZUM_POTENTIOMETER_PIN = 'PIN#';
        RoboBlocks.LANG_ZUM_POTENTIOMETER_TOOLTIP = 'zum Potentiometer';



        //servo blocks : 
        RoboBlocks.LANG_CATEGORY_SERVO = 'Servo';

        RoboBlocks.LANG_SERVO_CONT = 'Servo';
        RoboBlocks.LANG_SERVO_CONT_PIN = 'PIN#';
        RoboBlocks.LANG_SERVO_CONT_ROT = 'ROT';
        RoboBlocks.LANG_SERVO_CONT_TURN_CLOCKWISE = 'TURN CLOCKWISE';
        RoboBlocks.LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE = 'TURN COUNTERCLOCKWISE';
        RoboBlocks.LANG_SERVO_CONT_STOPPED = 'STOPPED';
        RoboBlocks.LANG_SERVO_CONT_DELAY = 'Delay';
        RoboBlocks.LANG_SERVO_CONT_TOOLTIP = 'Continuous rotation servo';

        RoboBlocks.LANG_SERVO_MOVE = 'Servo';
        RoboBlocks.LANG_SERVO_MOVE_PIN = 'PIN#';
        RoboBlocks.LANG_SERVO_MOVE_DEGREES = 'Degrees (0~180)';
        RoboBlocks.LANG_SERVO_MOVE_DELAY = 'Delay';
        RoboBlocks.LANG_SERVO_MOVE_TOOLTIP = 'Move between 0~180 degree';

        RoboBlocks.LANG_SERVO_READ_DEGREES = 'Read Degrees';
        RoboBlocks.LANG_SERVO_READ_DEGREES_PIN = 'PIN#';
        RoboBlocks.LANG_SERVO_READ_DEGREES_SERVO = 'Servo';
        RoboBlocks.LANG_SERVO_READ_DEGREES_TOOLTIP = 'Returns that degree with the last servo move.';

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
                    ',)';

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
                    ' );';

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
                    ');\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      oldkey = key;\n      if (key >=0){\n        switch(key)\n        {\n          case 0:\n           code_btn1\n          break;\n          case 1:\n           code_btn2\n          break;\n          case 2:\n           code_btn3\n          break;\n          case 3:\n           code_btn4\n          break;  \n          case 4:\n           code_btn5\n          break;\n        }      \n      }\n    }\n  }\n';

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
                    ')';

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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_conversion',
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_CONVERSION_CONVERT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ADVANCED_CONVERSION_DECIMAL, 'DEC'],
                        [RoboBlocks.LANG_ADVANCED_CONVERSION_HEXADECIMAL, 'HEX'],
                        [RoboBlocks.LANG_ADVANCED_CONVERSION_OCTAL, 'OCT'],
                        [RoboBlocks.LANG_ADVANCED_CONVERSION_BINARY, 'BIN']
                    ]), 'CONV');
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.LANG_ADVANCED_CONVERSION_VALUE)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_CONVERSION_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_map',
            /**
             * advanced_map initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_MAP)
                    .setCheck(Number);
                this.appendValueInput('FROM_MIN', Number)
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_FROM)
                    .setCheck(Number);
                this.appendValueInput('FROM_MAX', Number)
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_HYPHEN)
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_BRACKET);
                this.appendValueInput('TO_MIN', Number)
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_TO)
                    .setCheck(Number);
                this.appendValueInput('TO_MAX', Number)
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_HYPHEN)
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_MATH_ADVANCED_MAP_BRACKET);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_MATH_ADVANCED_MAP_TOOLTIP);
            }
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
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_delay',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('DELAY_TIME', Number)
                    .appendField(RoboBlocks.LANG_CONTROLS_BASE_DELAY_WAIT)
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_CONTROLS_BASE_DELAY_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_map',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.LANG_MATH_BASE_MAP)
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.LANG_MATH_BASE_MAP_VALUE_TO)
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_MATH_BASE_MAP_BRACKET);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_MATH_BASE_MAP_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'bat'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bat',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_BAT)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('RED PIN')
                    .appendField(RoboBlocks.LANG_BQ_BAT_RED_PIN)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('BLUE PIN')
                    .appendField(RoboBlocks.LANG_BQ_BAT_BLUE_PIN)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);


                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_BAT_TOOLTIP);
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
            var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);

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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_def',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('BAUD_RATE')
                    .setCheck(Number)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_BAUD_RATE)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('PIN')
                    .setCheck(Number)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN1)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('PIN2')
                    .setCheck(Number)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN2)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_DEF_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_bluetooth_receive/bq_bluetooth_receive.js
        /* global Blockly, options, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_receive',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.setInputsInline(false);


                this.setOutput(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_bluetooth_send/bq_bluetooth_send.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_send = function() {
            var statement_send = Blockly.Arduino.valueToCode(this, 'SNT', Blockly.Arduino.ORDER_ATOMIC);

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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_send',
            /**
             * bq_bluetooth_send initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SEND)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SEND_SEND);

                this.setInputsInline(false);


                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_SEND_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'button'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_button',
            /**
             * bq_button initialization
             **/
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_BUTTON)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
                    .setCheck(Number)
                    .appendField(RoboBlocks.LANG_BQ_BUTTON_PIN)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_BQ_BUTTON_TOOLTIP);
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
            //  var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
            //  var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
            //  var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
            //  var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
            //  var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'buttons'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_buttons',
            /**
             * bq_buttons initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_PIN)
                    .setCheck(Number);
                this.appendStatementInput('BUTN1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_A);
                this.appendStatementInput('BUTN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_B);
                this.appendStatementInput('BUTN3')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_C);
                this.appendStatementInput('BUTN4')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_D);
                this.appendStatementInput('BUTN5')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_BUTTON_E);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_BUTTONS_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'infrared'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_infrared',
            /**
             * bq_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_INFRARED)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_INFRARED_PIN)
                    .setCheck(Number);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_BQ_INFRARED_TOOLTIP);
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
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'joystick'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_joystick',
            /**
             * bq_joystick initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_JOYSTICK)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_JOYSTICK_PIN)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_JOYSTICK_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tag: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_led',
            /**
             * bq_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_LED)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_LED_PIN)
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_LED_STATE)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_BQ_LED_ON, 'HIGH'],
                        [RoboBlocks.LANG_BQ_LED_OFF, 'LOW']
                    ]), 'STAT')
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_LED_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'photoresistor'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_photoresistor',
            /**
             * bq_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR_PIN)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_PHOTORESISTOR_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzer',
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_PIN)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_TONE)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_DO, '261'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_RE, '293'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_MI, '329'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_FA, '349'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SOL, '392'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_LA, '440'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SI, '494']
                    ]), 'STAT') //523
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_DURATION);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_PIEZO_BUZZER_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'advanced buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzerav',
            /**
             * bq_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_PIN)
                    .setCheck(Number);

                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TONE);

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_DURATION);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'potentiometer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_potentiometer',
            /**
             * bq_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_BQ_POTENTIOMETER)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_POTENTIOMETER_PIN)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_POTENTIOMETER_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bt_serial_available',
            /**
             * bt_serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE);
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_flow_statements',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                var dropdown = new Blockly.FieldDropdown(
                    [
                        [RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, 'BREAK'],
                        [RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, 'CONTINUE']
                    ]);
                this.appendDummyInput()
                    .appendField(dropdown, 'FLOW')
                    .appendField(RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP);
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
                        this.setWarningText(RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_WARNING);
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
            BREAK: RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
            CONTINUE: RoboBlocks.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
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
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_for',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_WITH)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                this.appendValueInput('FROM')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_FROM);
                this.appendValueInput('TO')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_TO);
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_DO);
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
                                .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_WITH)
                                .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');


                            this.appendValueInput('FROM')
                                .setCheck(Number)
                                .setAlign(Blockly.ALIGN_RIGHT)
                                .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_FROM);
                            this.appendValueInput('TO')
                                .setCheck(Number)
                                .setAlign(Blockly.ALIGN_RIGHT)
                                .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_TO);
                            this.appendStatementInput('DO')
                                .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_DO);

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
            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
            var code = JST['controls_if']({
                'argument': argument,
                'branch': branch
            });

            for (n = 1; n <= this.elseifCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                code = JST['controls_elseif']({
                    'argument': argument,
                    'branch': branch
                });
            }
            if (this.elseCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'ELSE');
                code = JST['controls_else']({
                    'argument': argument,
                    'branch': branch
                });
            }
            return code + '\n';
        };

        /**
         * controls_if block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_if = {
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            tags: ['bq'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_if',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_IF);
                this.appendStatementInput('DO0')
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_THEN);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                    'controls_if_else'
                ]));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_1;
                    } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_2;
                    } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_3;
                    } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.LANG_CONTROLS_IF_TOOLTIP_4;
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
                        .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_ELSEIF);
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_THEN);
                }
                if (this.elseCount_) {
                    this.appendStatementInput('ELSE')
                        .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_ELSE);
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
                                .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_ELSEIF);
                            var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                            doInput.appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_THEN);
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
                            elseInput.appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_ELSE);
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
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_IF_Field_IF);
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.LANG_CONTROLS_IF_IF_TOOLTIP);
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_elseif = {
            // Else-If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_else = {
            // Else condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_ELSE_Field_ELSE);
                this.setPreviousStatement(true);
                this.setTooltip(RoboBlocks.LANG_CONTROLS_IF_ELSE_TOOLTIP);
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
                Blockly.Arduino.ORDER_NONE) || 'false';
            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
            var code = 'switch (' + argument + ')\n{';
            for (n = 1; n <= this.switchCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n, Blockly.Arduino.ORDER_NONE) || 'false';
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
            }
            if (this.defaultCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
                code += '  \n  default:\n  {\n' + branch + '  }';
            }
            return code + '\n}';
        };


        Blockly.Blocks.controls_switch = {
            // switch condition.
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_switch',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField('switch');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_switch_case',
                    'controls_switch_default'
                ]));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_1;
                    } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_2;
                    } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_3;
                    } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_4;
                    }
                    return '';
                });
                this.switchCount_ = 0;
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
                        .appendField('case');
                    this.setInputsInline(true);
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_THEN);
                }
                if (this.defaultCount_) {
                    this.appendStatementInput('DEFAULT')
                        .appendField('default');
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
                            var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                                .setCheck(Number)
                                .appendField('case');
                            this.setInputsInline(true);

                            var doInput = this.appendStatementInput('DO' + this.switchCount_);
                            doInput.appendField('do');
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
                            defaultInput.appendField('default');
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
                    .appendField('switch');
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
                    .appendField('case');
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
                    .appendField('default');
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
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
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
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_whileUntil',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'MODE');
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_WHILEUNTIL_INPUT_DO);
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

        Blockly.Blocks.controls_whileUntil.OPERATORS = [
            [RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
            [RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']
        ];

        Blockly.Blocks.controls_whileUntil.TOOLTIPS = {
            WHILE: RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
            UNTIL: RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
        };

        // Source: src/blocks/inout_analog_read/inout_analog_read.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_read',
            /**
             * inout_analog_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP);
            }
        };

        // Source: src/blocks/inout_analog_write/inout_analog_write.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_write',
            /**
             * inout_analog_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE)
                    .appendField(new Blockly.FieldDropdown(profiles.default.pwm), 'PIN');
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE)
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_builtin_led',
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_BUILTIN_LED)
                    .appendField(RoboBlocks.LANG_ADVANCED_BUILTIN_LED_STATE)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ADVANCED_BUILTIN_LED_ON, 'HIGH'],
                        [RoboBlocks.LANG_ADVANCED_BUILTIN_LED_OFF, 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_BUILTIN_LED_TOOLTIP);
            }
        };

        // Source: src/blocks/inout_digital_read/inout_digital_read.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_read',
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP);
            }
        };

        // Source: src/blocks/inout_digital_write/inout_digital_write.js
        /* global Blockly, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_write',
            /**
             * inout_digital_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE)
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH, 'HIGH'],
                        [RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW, 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_highlow',
            /**
             * inout_highlow initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ADVANCED_HIGHLOW_HIGH, 'HIGH'],
                        [RoboBlocks.LANG_ADVANCED_HIGHLOW_LOW, 'LOW']
                    ]), 'BOOL');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_HIGHLOW_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_LOGIC,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_boolean',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'BOOL');
                this.setTooltip(RoboBlocks.LANG_LOGIC_BOOLEAN_TOOLTIP);
            }
        };

        Blockly.Blocks.logic_boolean.OPERATORS = [
            [RoboBlocks.LANG_LOGIC_BOOLEAN_TRUE, 'TRUE'],
            [RoboBlocks.LANG_LOGIC_BOOLEAN_FALSE, 'FALSE']
        ];

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
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
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
            category: RoboBlocks.LANG_CATEGORY_LOGIC,
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
            ['==', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE']
        ];

        Blockly.Blocks.logic_compare.TOOLTIPS = {
            EQ: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_EQ,
            NEQ: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_NEQ,
            LT: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_LT,
            LTE: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_LTE,
            GT: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_GT,
            GTE: RoboBlocks.LANG_LOGIC_COMPARE_TOOLTIP_GTE
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
            category: RoboBlocks.LANG_CATEGORY_LOGIC,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_negate',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.LANG_LOGIC_NEGATE_INPUT_NOT);
                this.setTooltip(RoboBlocks.LANG_LOGIC_NEGATE_TOOLTIP);
            }
        };

        // Source: src/blocks/logic_null/logic_null.js
        /* global Blockly, RoboBlocks */

        /**
         * logic_null code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.logic_null = function() {
            var code = 'NULL';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        Blockly.Blocks.logic_null = {
            // Null data type.
            category: RoboBlocks.LANG_CATEGORY_LOGIC,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_null',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, null);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_LOGIC_NULL);
                this.setTooltip(RoboBlocks.LANG_LOGIC_NULL_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_LOGIC,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_operation',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A')
                    .setCheck(Boolean);
                this.appendValueInput('B')
                    .setCheck(Boolean)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_operation.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.logic_operation.OPERATORS = [
            [RoboBlocks.LANG_LOGIC_OPERATION_AND, 'AND'],
            [RoboBlocks.LANG_LOGIC_OPERATION_OR, 'OR']
        ];

        Blockly.Blocks.logic_operation.TOOLTIPS = {
            AND: RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_AND,
            OR: RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_OR
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
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
            ADD: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_ADD,
            MINUS: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS,
            MULTIPLY: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
            DIVIDE: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE,
            POWER: RoboBlocks.LANG_MATH_ARITHMETIC_TOOLTIP_POWER
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_modulo',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('DIVIDEND')
                    .setCheck(Number)
                    .appendField(RoboBlocks.LANG_MATH_MODULO_INPUT_DIVIDEND);
                this.appendValueInput('DIVISOR')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('%');
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.LANG_MATH_MODULO_TOOLTIP);
            }
        };

        // Source: src/blocks/math_number/math_number.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_number code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Blocks.math_number.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };

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
            category: RoboBlocks.LANG_CATEGORY_MATH, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_number',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_number.validator), 'NUM');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_MATH_NUMBER_TOOLTIP);
            }
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_random',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.LANG_ADVANCED_MATH_RANDOM)
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.LANG_ADVANCED_MATH_RANDOM_AND)
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_MATH_RANDOM_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_MATH,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_single',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('NUM')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_single.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_single.OPERATORS = [
            [RoboBlocks.LANG_MATH_SINGLE_OP_ROOT, 'ROOT'],
            [RoboBlocks.LANG_MATH_SINGLE_OP_ABSOLUTE, 'ABS'],
            ['-', 'NEG'],
            ['ln', 'LN'],
            ['log10', 'LOG10'],
            ['e^', 'EXP'],
            ['10^', 'POW10']
        ];

        Blockly.Blocks.math_single.TOOLTIPS = {
            ROOT: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_ROOT,
            ABS: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_ABS,
            NEG: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_NEG,
            LN: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_LN,
            LOG10: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_LOG10,
            EXP: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_EXP,
            POW10: RoboBlocks.LANG_MATH_SINGLE_TOOLTIP_POW10
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
            category: RoboBlocks.LANG_CATEGORY_VARIABLES,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('')
                    .appendField('Analog pin')
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_VARIABLES,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('')
                    .appendField('Digital pin')
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP);
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
            var args = []; //this.getInput('VARIABLES');//this.getVariables(funcName);

            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'VARIABLES' + x, Blockly.Arduino.ORDER_NONE) || '';
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
            category: RoboBlocks.LANG_CATEGORY_PROCEDURES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callnoreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

                var dropdown = new Blockly.FieldDropdown(this.getProcedures());

                this.appendDummyInput('DUMMY')
                    .appendField(dropdown, 'PROCEDURES');

                this.addVariables();

                this.setPreviousStatement(true);
                this.setNextStatement(true);

                this.setTooltip(RoboBlocks.LANG_PROCEDURES_CALLRETURN_TOOLTIP);
                this.arguments_ = [];
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        procedures_dropdown.push([procedures[0][i][0], procedures[0][i][0]]);
                    }
                } else {
                    procedures_dropdown.push(['', '']);
                }
                return procedures_dropdown;
            },
            renameProcedure: function(oldName) {
                var procedures = this.getProcedures();
                for (var i in procedures) {
                    if (Blockly.Names.equals(oldName, procedures[i][0])) {
                        var dropdown = new Blockly.FieldDropdown(this.getProcedures());
                        this.removeInput('DUMMY');
                        this.appendDummyInput('DUMMY')
                            .appendField(dropdown, 'PROCEDURES');
                    }
                }
                this.addVariables();
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.no_last_procedure) {
                    this.addVariables();
                    this.no_last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('VARIABLES' + i) === null) {
                        break;
                    }
                    this.removeInput('VARIABLES' + i);

                }
                for (var variable in func_variables) {
                    this.appendValueInput('VARIABLES' + variable)
                        .appendField(func_variables[variable]);
                }
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
                if (procedures[0].length > 0 || procedures[1].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][0] === funcName) {
                            return procedures[0][i][1];
                        }
                    }
                } else {
                    procedures_dropdown.push(['', '']);
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
            var args = []; //this.getInput('VARIABLES');//this.getVariables(funcName);

            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'VARIABLES' + x, Blockly.Arduino.ORDER_NONE) || 'null';
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
            category: RoboBlocks.LANG_CATEGORY_PROCEDURES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);

                var dropdown = new Blockly.FieldDropdown(this.getProcedures());

                this.appendDummyInput('DUMMY')
                    .appendField(dropdown, 'PROCEDURES');

                this.addVariables();
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_PROCEDURES_CALLRETURN_TOOLTIP);
                this.arguments_ = [];
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        procedures_dropdown.push([procedures[1][i][0], procedures[1][i][0]]);
                    }
                } else {
                    procedures_dropdown.push(['', '']);
                }
                return procedures_dropdown;
            },
            renameProcedure: function(oldName) {
                var procedures = this.getProcedures();
                for (var i in procedures) {
                    if (Blockly.Names.equals(oldName, procedures[i][0])) {
                        var dropdown = new Blockly.FieldDropdown(this.getProcedures());
                        this.removeInput('DUMMY');
                        this.appendDummyInput('DUMMY')
                            .appendField(dropdown, 'PROCEDURES');
                    }
                }
                this.addVariables();
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure) {
                    this.addVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('VARIABLES' + i) === null) {
                        break;
                    }
                    this.removeInput('VARIABLES' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('VARIABLES' + variable)
                        .appendField(func_variables[variable]);
                }
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
            var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
                Blockly.Procedures.NAME_TYPE);
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
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
            category: RoboBlocks.LANG_CATEGORY_PROCEDURES,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defnoreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(
                    RoboBlocks.LANG_PROCEDURES_DEFNORETURN_PROCEDURE, this);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput(name,
                        Blockly.Procedures.rename), 'NAME')
                    .appendField('', 'PARAMS');
                this.appendStatementInput('STACK')
                    .appendField(RoboBlocks.LANG_PROCEDURES_DEFNORETURN_DO);
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.LANG_PROCEDURES_DEFNORETURN_TOOLTIP);
                this.arguments_ = [];
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
                        this.setWarningText(RoboBlocks.LANG_PROCEDURES_DEF_DUPLICATE_WARNING);
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
                if (!this.hasReturnValue_) {
                    try {
                        this.removeInput('VALUE');
                    } catch (e) {}
                }
            }
        };

        Blockly.Blocks.procedures_mutatorcontainer = {
            // Procedure container (for mutator dialog).
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_PROCEDURES_MUTATORCONTAINER_Field);
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
                    .appendField(RoboBlocks.LANG_PROCEDURES_MUTATORARG_Field)
                    .appendField(new Blockly.FieldDropdown([
                        ['int', 'int'],
                        ['String', 'String']
                    ]), 'TYPE')
                    .appendField(new Blockly.FieldTextInput('x', Blockly.Blocks.procedures_mutatorarg.validator), 'NAME');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('');
                this.contextMenu = false;
            }
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
            var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
                Blockly.Procedures.NAME_TYPE);
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
            var returnType;
            if (!returnValue) {
                returnType = 'void';
            } else if ((returnValue.search('analogRead') >= 0) || (returnValue.search('digitalRead') >= 0) || (returnValue.search('Distanc') >= 0) || (!isNaN(parseFloat(returnValue)))) {
                returnType = 'int';
            } else {
                returnType = 'String';
            }
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
            category: RoboBlocks.LANG_CATEGORY_PROCEDURES, // Procedures are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(
                    RoboBlocks.LANG_PROCEDURES_DEFRETURN_PROCEDURE, this);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput(name,
                        Blockly.Procedures.rename), 'NAME')
                    .appendField('', 'PARAMS');
                this.appendStatementInput('STACK')
                    .appendField(RoboBlocks.LANG_PROCEDURES_DEFRETURN_DO);
                this.appendValueInput('RETURN')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_PROCEDURES_DEFRETURN_RETURN);
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.LANG_PROCEDURES_DEFRETURN_TOOLTIP);
                this.arguments_ = [];
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
            domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation
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
            category: RoboBlocks.LANG_CATEGORY_PROCEDURES,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_ifreturn',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendValueInput('CONDITION')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_IF);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_PROCEDURES_DEFRETURN_RETURN);
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_PROCEDURES_IFRETURN_TOOLTIP);
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
                if (!this.hasReturnValue_) {
                    this.removeInput('VALUE');
                }
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
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    // If needed, toggle whether this block has a return value.
                    if (block.type === 'procedures_defnoreturn' && this.hasReturnValue_) {
                        this.removeInput('VALUE');
                        this.hasReturnValue_ = false;
                    } else if (block.type === 'procedures_defreturn' && !this.hasReturnValue_) {
                        this.appendValueInput('VALUE');
                        this.hasReturnValue_ = true;
                    }
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.LANG_PROCEDURES_IFRETURN_WARNING);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_available',
            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE);
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_print',
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String)
                    .appendField(RoboBlocks.LANG_ADVANCED_SERIAL_PRINT);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_PRINT_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_println',
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String)
                    .appendField(RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_read',
            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_SERIAL_READ);
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_READ_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_special',
            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TAB, '\\t'],
                        [RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN, '\\r'],
                        [RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED, '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_SERVO,
            tags: ['servo continuous'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_cont',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_SERVO_CONT)
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_SERVO_CONT_PIN);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_SERVO_CONT_ROT)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_SERVO_CONT_TURN_CLOCKWISE, '0'],
                        [RoboBlocks.LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE, '180'],
                        [RoboBlocks.LANG_SERVO_CONT_STOPPED, '90']
                    ]), 'ROT');
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_SERVO_CONT_DELAY);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_SERVO_CONT_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_SERVO,
            tags: ['servo move'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_SERVO_MOVE)
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_SERVO_MOVE_PIN);
                this.appendValueInput('DEGREE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_SERVO_MOVE_DEGREES);
                this.appendValueInput('DELAY_TIME', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_SERVO_MOVE_DELAY);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_SERVO_MOVE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField('"')
                    .appendField(new Blockly.FieldTextInput(''), 'TEXT')
                    .appendField('"');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.LANG_TEXT_TEXT_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_append',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('TEXT')
                    .appendField(RoboBlocks.LANG_TEXT_APPEND_TO)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                    .appendField(RoboBlocks.LANG_TEXT_APPEND_APPENDTEXT);
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
                                .appendField(RoboBlocks.LANG_TEXT_APPEND_TO)
                                .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                                .appendField(RoboBlocks.LANG_TEXT_APPEND_APPENDTEXT);

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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_equalsIgnoreCase',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    .appendField(RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_IS);

                this.appendValueInput('STRING2')
                    .appendField(RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_EQUAL)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_QUESTION);

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_join',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('ADD0')
                    .appendField(RoboBlocks.LANG_TEXT_JOIN_Field_CREATEWITH);
                this.appendValueInput('ADD1');
                this.setOutput(true, String);
                this.setMutator(new Blockly.Mutator(['text_create_join_item']));
                this.setTooltip(RoboBlocks.LANG_TEXT_JOIN_TOOLTIP);
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
                        input.appendField(RoboBlocks.LANG_TEXT_JOIN_Field_CREATEWITH);
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
                        input.appendField(RoboBlocks.LANG_TEXT_JOIN_Field_CREATEWITH);
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
                    .appendField(RoboBlocks.LANG_TEXT_CREATE_JOIN_Field_JOIN);
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.LANG_TEXT_CREATE_JOIN_TOOLTIP);
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP);
                this.contextMenu = false;
            }
        };


        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_TEXT_CREATE_JOIN_TITLE_JOIN);
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.LANG_TEXT_CREATE_JOIN_TOOLTIP);
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_length',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VALUE')
                    .setCheck([String, Array])
                    .appendField(RoboBlocks.LANG_TEXT_LENGTH_INPUT_LENGTH);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_TEXT_LENGTH_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_TEXT,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_substring',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    // .setCheck(String)
                    .appendField(RoboBlocks.LANG_TEXT_SUBSTRING);

                this.appendValueInput('FROM')
                    .appendField(RoboBlocks.LANG_TEXT_SUBSTRING_FROM)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('TO')
                    .appendField(RoboBlocks.LANG_TEXT_SUBSTRING_TO)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);
                // this.appendDummyInput()
                //     .appendField(RoboBlocks.LANG_TEXT_SUBSTRING_QUESTION);

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_TEXT_SUBSTRING_TOOLTIP);
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

            return [varName, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.variables_get = {
            // Variable setter.
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_get',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_VARIABLES_GET)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_GET_TOOLTIP);
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
                        } catch (e) {}

                        this.appendDummyInput('DUMMY')
                            .appendField(RoboBlocks.LANG_VARIABLES_GET)
                            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

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
        // Source: src/blocks/variables_global/variables_global.js

        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */

        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        // function isNumber(obj) {
        //     if (obj.search('ead')>0){
        //         return true;
        //     }
        //     else {
        //         return !isNaN(parseFloat(obj));
        //     }
        // }

        Blockly.Arduino.variables_global = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            // varValue='digitalRead(';
            // console.log('aaaaaaaaaaaaaaaa', varValue, varValue.search('digitalRead'));
            // console.log(varValue.search('digitalRead'),varValue.search('digitalRead')>0);

            if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue)))) {
                varType = 'int';
            } else {
                varType = 'String';
            }

            // console.log('varType', varType);

            var varName = this.getFieldValue('VAR') || '';

            Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';';
            Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';';

            return '';
        };


        Blockly.Blocks.variables_global = {
            // Variable setter.
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_global',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_VARIABLES_GLOBAL)
                    .appendField(new Blockly.FieldTextInput(''), 'VAR');

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.LANG_VARIABLES_GLOBAL_EQUALS);

                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_GLOBAL_TOOLTIP);
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
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

            if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue)))) {
                varType = 'int';
            } else {
                varType = 'String';
            }

            var varName = this.getFieldValue('VAR') || '';

            var code = varType + ' ' + varName + ';\n' + varName + '=' + varValue + ';\n';

            return code;
        };


        Blockly.Blocks.variables_local = {
            // Variable setter.
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variable',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_VARIABLES_LOCAL)
                    .appendField(new Blockly.FieldTextInput(''), 'VAR');

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.LANG_VARIABLES_LOCAL_EQUALS);

                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_LOCAL_TOOLTIP);
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
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
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_set',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_VARIABLES_SET)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.LANG_VARIABLES_SET_AS)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(true);

                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_SET_TOOLTIP);
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
                            this.removeInput('VALUE');

                            this.appendDummyInput('DUMMY')
                                .appendField(RoboBlocks.LANG_VARIABLES_SET)
                                .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                            this.appendValueInput('VALUE')
                                .appendField(RoboBlocks.LANG_VARIABLES_SET_AS)
                                .setAlign(Blockly.ALIGN_RIGHT);
                            this.setInputsInline(true);

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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'button'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_button',
            /**
             * zum_button initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_BUTTON)
                    .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_BUTTON_PIN);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_ZUM_BUTTON_TOOLTIP);
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

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_follower block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_follower = {
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'follower'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_follower',
            /**
             * zum_follower initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER)
                    .appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203 * options.zoom, 165 * options.zoom));
                this.appendValueInput('PIN')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_LEFT);
                this.appendValueInput('PIN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_RIGHT);
                this.appendStatementInput('SENS1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_LEFT);
                this.appendStatementInput('SENS2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_RIGHT);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ZUM_FOLLOWER_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'infrared'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_infrared',
            /**
             * zum_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_INFRARED)
                    .appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_INFRARED_PIN);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_ZUM_INFRARED_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_led',
            /**
             * zum_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_LED)
                    .appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_LED_PIN);
                this.appendDummyInput()
                    .appendField('state')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ZUM_LED_ON, 'HIGH'],
                        [RoboBlocks.LANG_ZUM_LED_OFF, 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ZUM_LED_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'photoresistor'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_photoresistor',
            /**
             * zum_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_PHOTORESISTOR)
                    .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PHOTORESISTOR_PIN);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_ZUM_PHOTORESISTOR_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzer',
            /**
             * zum_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER)
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER_PIN);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TONE)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DO, '261'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_RE, '293'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_MI, '329'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_FA, '349'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SOL, '392'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_LA, '440'],
                        [RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SI, '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DURATION);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'advanced buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzerav',
            /**
             * zum_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV)
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_PIN);
                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TONE);

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_DURATION);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP);
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'potentiometer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_potentiometer',
            /**
             * zum_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.LANG_ZUM_POTENTIOMETER)
                    .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_POTENTIOMETER_PIN);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_ZUM_POTENTIOMETER_TOOLTIP);
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
