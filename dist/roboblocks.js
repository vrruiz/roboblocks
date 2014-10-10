/*! roboblocks - v0.0.6 - 2014-10-10
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




        ///////////// COPY TO EN.JS
        //random : 
        RoboBlocks.LANG_VARIABLES_SET_ITEM = 'item';

        //bq blocks : 
        RoboBlocks.LANG_CATEGORY_BQ = 'bq bloqs';

        RoboBlocks.LANG_BQ_BAT = 'BAT';
        RoboBlocks.LANG_BQ_BAT_RED_PIN = 'RED PIN#';
        RoboBlocks.LANG_BQ_BAT_BLUE_PIN = 'BLUE PIN#';
        RoboBlocks.LANG_BQ_BAT_TOOLTIP = 'Output the measured distance';

        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE = 'Bluetooth';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN = 'PIN#';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_NAME = 'Name';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PINCODE = 'PinCode';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_RECEIVE = 'Receive';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_SEND = 'Send';
        RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_TOOLTIP = 'bq Bluetooth';

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




        //advanced blocks : 
        RoboBlocks.LANG_CATEGORY_ADVANCED = 'Advanced';

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


        //procedures blocks
        RoboBlocks.LANG_CATEGORY_PROCEDURES = 'Procedures';


        //variables blocks : 
        RoboBlocks.LANG_CATEGORY_VARIABLES = 'Variables';

        RoboBlocks.LANG_VARIABLES_DECLARE = 'Declare a variable ';
        RoboBlocks.LANG_VARIABLES_DECLARE_TYPE = 'of type ';
        RoboBlocks.LANG_VARIABLES_DECLARE_TOOLTIP = 'Declare a variable of type int or String';

        RoboBlocks.LANG_VARIABLES_DEFINE = 'Define variable ';
        RoboBlocks.LANG_VARIABLES_DEFINE_AS = 'as';
        RoboBlocks.LANG_VARIABLES_DEFINE_TOOLTIP = 'Define the value of a variable';


        RoboBlocks.LANG_VARIABLES_SET = 'Set variable ';
        RoboBlocks.LANG_VARIABLES_SET_AS = 'as';
        RoboBlocks.LANG_VARIABLES_SET_TOOLTIP = 'Set the value of a variable';

        RoboBlocks.LANG_VARIABLES_GET = 'Get variable ';
        RoboBlocks.LANG_VARIABLES_GET_TOOLTIP = 'Get the value of a variable';

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
                    ',0,1024,0,' +
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

        this["JST"]["controls_forEach"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'for (var ' +
                    __e(variable0) +
                    ' in ' +
                    __e(argument0) +
                    ') {\n ' +
                    __e(branch) +
                    ' }\n';

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

        this["JST"]["controls_repeat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'for(' +
                    __e(loopVar) +
                    '=0; ' +
                    __e(loopVar) +
                    '<' +
                    __e(repeats) +
                    '; ' +
                    __e(loopVar) +
                    '++){\n ' +
                    __e(branch) +
                    ' }\n';

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

        this["JST"]["math_arithmetic"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '(' +
                    __e(argument0) +
                    '' +
                    __e(operator) +
                    '' +
                    __e(argument1) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_arithmetic_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Math.pow(' +
                    __e(argument0) +
                    ',' +
                    __e(argument1) +
                    ')';

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

        this["JST"]["variables_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(varType) +
                    ' ' +
                    __e(varName) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["variables_define"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(varName) +
                    '=' +
                    __e(varValue) +
                    ';\n';

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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_conversion',
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'bat'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bat',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_BAT)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BAT_RED_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BAT_BLUE_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.arduino.bluetooth), 'PIN');

                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_BAT_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_bluetooth_slave/bq_bluetooth_slave.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_slave',
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.bluetooth), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_NAME)
                    .appendField(new Blockly.FieldTextInput('zum'), 'NAME');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_PINCODE)
                    .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
                this.appendStatementInput('RCV')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_RECEIVE);
                this.appendStatementInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_SEND);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_BLUETOOTH_SLAVE_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_button/bq_button.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_button code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_button = function() {

            var dropdown_pin = this.getFieldValue('PIN');

            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            });

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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'button'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_button',
            /**
             * bq_button initialization
             **/
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_BUTTON)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_BUTTON_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_BQ_BUTTON_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_buttons/bq_buttons.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_buttons code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_buttons = function() {
            var dropdown_pin = this.getFieldValue('PIN');
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_BUTTONS_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_INFRARED)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_INFRARED_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_BQ_INFRARED_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_joystick/bq_joystick.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_joystick code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_joystick = function() {
            var dropdown_pin = this.getFieldValue('PIN');
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_JOYSTICK)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_JOYSTICK_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_JOYSTICK_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_led/bq_led.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tag: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_led',
            /**
             * bq_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_LED)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_LED_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('state')
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_BQ_LED_ON, 'HIGH'],
                        [RoboBlocks.LANG_BQ_LED_OFF, 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.LANG_BQ_LED_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_photoresistor/bq_photoresistor.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_PHOTORESISTOR_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_PHOTORESISTOR_TOOLTIP);
            }
        };

        // Source: src/blocks/bq_piezo_buzzer/bq_piezo_buzzer.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_piezo_buzzer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

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
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZER_TONE)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_DO, '261'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_RE, '293'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_MI, '329'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_FA, '349'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SOL, '392'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_LA, '440'],
                        [RoboBlocks.LANG_BQ_PIEZO_BUZZER_SI, '494']
                    ]), 'STAT'); //523
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'advanced buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzerav',
            /**
             * bq_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_BQ,
            tags: ['bq', 'potentiometer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_potentiometer',
            /**
             * bq_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_BQ_POTENTIOMETER)
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_BQ_POTENTIOMETER_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_BQ_POTENTIOMETER_TOOLTIP);
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
            var variable0 = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
            variable0 = variable0.substring(0, variable0.length - 1);

            var argument0 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
            var argument1 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var code;
            if (argument0.match(/^-?\d+(\.\d+)?$/) && argument1.match(/^-?\d+(\.\d+)?$/)) {
                // Both arguments are simple numbers.
                var up = parseFloat(argument0) <= parseFloat(argument1);
                code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
                    variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
                    variable0 + (up ? '++' : '--') + ') {\n' +
                    branch + '}\n';
            } else {
                code = '';
                // Cache non-trivial values to variables to prevent repeated look-ups.
                var startVar = argument0;
                if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
                    startVar = Blockly.Arduino.variableDB_.getDistinctName(variable0 + '_start', Blockly.Variables.NAME_TYPE);
                    code += 'int ' + startVar + ' = ' + argument0 + ';\n';
                }
                var endVar = argument1;
                if (!argument1.match(/^\w+$/) && !argument1.match(/^-?\d+(\.\d+)?$/)) {
                    endVar = Blockly.Arduino.variableDB_.getDistinctName(variable0 + '_end', Blockly.Variables.NAME_TYPE);
                    code += 'int ' + endVar + ' = ' + argument1 + ';\n';
                }
                code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
                    '    (' + startVar + ' <= ' + endVar + ') ? ' +
                    variable0 + ' <= ' + endVar + ' : ' +
                    variable0 + ' >= ' + endVar + ';\n' +
                    '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +
                    ') ? 1 : -1) {\n' +
                    branch + '}\n';
            }
            return code;
        };


        Blockly.Blocks.controls_for = {
            // For loop.
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_for',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_CONTROLS_FOR_INPUT_WITH)
                    .appendField(new Blockly.FieldVariable(null), 'VAR');
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
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            }
        };


        // Source: src/blocks/controls_forEach/controls_forEach.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_forEach code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_forEach = function() {
            // For each loop.
            var variable0 = Blockly.Arduino.variableDB_.getName(
                this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
            variable0 = variable0.substring(0, variable0.length - 1);
            var argument0 = Blockly.Arduino.valueToCode(this, 'LIST',
                Blockly.Arduino.ORDER_ASSIGNMENT) || '[]';
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var code = JST['controls_forEach']({
                'variable0': variable0,
                'argument0': argument0,
                'branch': branch
            });

            //'for (var ' + variable0 + ' in  ' + argument0 + ') {\n' +branch + '}\n';
            return code;
        };


        Blockly.Blocks.controls_forEach = {
            // For each loop.
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_forEach',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('LIST')
                    .setCheck(Array)
                    .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_ITEM)
                    .appendField(new Blockly.FieldVariable(null), 'VAR')
                    .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_INLIST);
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_FOREACH_INPUT_DO);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return RoboBlocks.LANG_CONTROLS_FOREACH_TOOLTIP.replace('%1', thisBlock.getTitleValue('VAR'));
                });
            },
            getVars: function() {
                return [this.getTitleValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
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



        // Source: src/blocks/controls_repeat/controls_repeat.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_repeat code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_repeat = function() {
            // Repeat n times.
            var repeats = Number(this.getFieldValue('TIMES'));
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var loopVar = Blockly.Arduino.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);

            var code = JST['controls_repeat']({
                'repeats': repeats,
                'branch': branch,
                'loopVar': loopVar
            });

            return code;
        };

        Blockly.Blocks.controls_repeat = {
            // Repeat n times.
            category: RoboBlocks.LANG_CATEGORY_CONTROLS,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_repeat',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_REPEAT)
                    .appendField(new Blockly.FieldTextInput('', Blockly.Blocks.math_number.validator), 'TIMES')
                    .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_TIMES);
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_CONTROLS_REPEAT_TOOLTIP);
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
            code = JST['math_arithmetic_pow']({
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_available',
            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_print',
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_println',
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_read',
            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
            category: RoboBlocks.LANG_CATEGORY_ADVANCED,
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_special',
            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_SERVO,
            tags: ['servo continuous'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_cont',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_SERVO_CONT)
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_SERVO_CONT_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField(RoboBlocks.LANG_SERVO_CONT_ROT)
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_SERVO,
            tags: ['servo move'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_SERVO_MOVE)
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_SERVO_MOVE_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
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

        // Source: src/blocks/servo_read_degrees/servo_read_degrees.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_SERVO,
            tags: ['servo read degrees'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_read_degrees',
            /**
             * servo_read_degrees initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES_SERVO)
                    .appendField(new Blockly.FieldImage('img/blocks/bqservo02.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_SERVO_READ_DEGREES);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_SERVO_READ_DEGREES_TOOLTIP);
            }
        };

        // Source: src/blocks/variables_declare/variables_declare.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * variables_declare code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_declare = function() {
            // Variable setter.
            var varType = Blockly.Arduino.valueToCode(this, 'TYPE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var varName = this.getFieldValue('VAR') || '';
            Blockly.Arduino.definitions_['define_var' + varName] = JST['variables_declare']({
                'varType': varType,
                'varName': varName
            });

            return '';
        };

        Blockly.Blocks.variables_declare = {
            // Variable setter.
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_declare',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_VARIABLES_DECLARE)
                    // .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
                    .appendField(new Blockly.FieldTextInput(''), 'VAR');


                this.appendDummyInput()
                    .appendField(RoboBlocks.LANG_VARIABLES_DECLARE_TYPE)
                    .appendField(new Blockly.FieldDropdown([
                        ['int', 'int'],
                        ['String', 'String']
                    ]), 'TYPE');

                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_DECLARE_TOOLTIP);
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
        // Source: src/blocks/variables_define/variables_define.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * variables_define code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_define = function() {
            // Variable setter.
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var varName = this.getFieldValue('VAR') || '';

            Blockly.Arduino.setups_['setup_var' + varName] = JST['variables_define']({
                'varName': varName,
                'varValue': varValue
            });

            return '';
        };

        Blockly.Blocks.variables_define = {
            // Variable setter.
            category: RoboBlocks.LANG_CATEGORY_VARIABLES, // Variables are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_define',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.LANG_VARIABLES_DEFINE)
                    .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                this.appendValueInput('VALUE')
                    .appendField(RoboBlocks.LANG_VARIABLES_DEFINE_AS)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(true);

                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.LANG_VARIABLES_DEFINE_TOOLTIP);
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
                        this.removeInput('DUMMY');
                        this.removeInput('VALUE');

                        this.appendDummyInput('DUMMY')
                            .appendField(RoboBlocks.LANG_VARIABLES_DEFINE)
                            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                        this.appendValueInput('VALUE')
                            .appendField(RoboBlocks.LANG_VARIABLES_DEFINE_AS)
                            .setAlign(Blockly.ALIGN_RIGHT);
                        this.setInputsInline(true);

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
                        this.removeInput('DUMMY');

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
                        this.removeInput('DUMMY');
                        this.removeInput('VALUE');

                        this.appendDummyInput('DUMMY')
                            .appendField(RoboBlocks.LANG_VARIABLES_SET)
                            .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');

                        this.appendValueInput('VALUE')
                            .appendField(RoboBlocks.LANG_VARIABLES_SET_AS)
                            .setAlign(Blockly.ALIGN_RIGHT);
                        this.setInputsInline(true);

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
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_button = function() {
            var dropdown_pin = this.getFieldValue('PIN');

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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_BUTTON)
                    .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_BUTTON_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.LANG_ZUM_BUTTON_TOOLTIP);
            }
        };

        // Source: src/blocks/zum_follower/zum_follower.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_follower code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_follower = function() {
            var dropdown_pin = this.getFieldValue('PIN') || 1;
            var NextPIN = this.getFieldValue('PIN2') || 2;
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
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_LEFT)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.appendDummyInput('')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.LANG_ZUM_FOLLOWER_PIN_RIGHT)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN2');
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'infrared'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_infrared',
            /**
             * zum_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_INFRARED)
                    .appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_INFRARED_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
                this.setOutput(true);
                this.setTooltip(RoboBlocks.LANG_ZUM_INFRARED_TOOLTIP);
            }
        };

        // Source: src/blocks/zum_led/zum_led.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_led',
            /**
             * zum_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_LED)
                    .appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_LED_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField('state')
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_PHOTORESISTOR)
                    .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PHOTORESISTOR_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_ZUM_PHOTORESISTOR_TOOLTIP);
            }
        };

        // Source: src/blocks/zum_piezo_buzzer/zum_piezo_buzzer.js
        /* global Blockly, options, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_piezo_buzzer = function() {
            var dropdown_pin = this.getFieldValue('PIN');
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
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER)
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TONE)
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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'advanced buzzer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzerav',
            /**
             * zum_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV)
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

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
        /* global Blockly, options, profiles, JST, RoboBlocks */
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
            category: RoboBlocks.LANG_CATEGORY_ZUM,
            tags: ['bq', 'zum', 'potentiometer'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_potentiometer',
            /**
             * zum_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.LANG_ZUM_POTENTIOMETER)
                    .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.LANG_ZUM_POTENTIOMETER_PIN)
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.LANG_ZUM_POTENTIOMETER_TOOLTIP);
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
