'use strict';
/* global RoboBlocks */

RoboBlocks.GITHUB_SRC_URL = 'https://github.com/bq/roboblocks/tree/master/src/';

RoboBlocks.LANG_COLOUR_BQ='10';
RoboBlocks.LANG_COLOUR_ZUM='336';
RoboBlocks.LANG_COLOUR_SERVO='30';
RoboBlocks.LANG_COLOUR_TEXT='200';
RoboBlocks.LANG_COLOUR_LOGIC='120';
RoboBlocks.LANG_COLOUR_ADVANCED='260';
RoboBlocks.LANG_COLOUR_VARIABLES='300';
RoboBlocks.LANG_COLOUR_PROCEDURES='320';
RoboBlocks.LANG_COLOUR_CONTROL='80';
RoboBlocks.LANG_COLOUR_MATH='180';

RoboBlocks.LANG_COLOUR_COMMUNICATION='88';



RoboBlocks.bluetooth=[];



///////////// COPY TO EN.JS

//random : 
RoboBlocks.LANG_VARIABLES_SET_ITEM='item';

//logic blocks:
RoboBlocks.LANG_CATEGORY_LOGIC='Logic';

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

RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_AND='Returns true if both conditions are fulfilled';
RoboBlocks.LANG_LOGIC_OPERATION_TOOLTIP_OR='Returns true if one of the conditions is true';

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
RoboBlocks.LANG_CATEGORY_COMMUNICATION='Communication';

RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE='Bluetooth receive data';
RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH='Bluetooth';
RoboBlocks.LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP='Returns the data received by the bq Bluetooth module';

RoboBlocks.LANG_BQ_BLUETOOTH_SEND='Bluetooth send data';
RoboBlocks.LANG_BQ_BLUETOOTH_SEND_SEND='Send';
RoboBlocks.LANG_BQ_BLUETOOTH_SEND_TOOLTIP='Sends the input data using the bq Bluetooth module';


RoboBlocks.LANG_BQ_BLUETOOTH_DEF='Bluetooth definition';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_BAUD_RATE='Baud rate';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN1='RX';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PIN2='TX';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_NAME='Name';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_PINCODE='PinCode';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_RECEIVE='Receive';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_SEND='Send';
RoboBlocks.LANG_BQ_BLUETOOTH_DEF_TOOLTIP='bq Bluetooth';

RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE='Bluetooth Serial Available';
RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP='Check wether the bluetooth is available or not';

RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE='Serial Available';
RoboBlocks.LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP='Check wether the serial port is available or not';

RoboBlocks.LANG_ADVANCED_SERIAL_PRINT='Serial Print';
RoboBlocks.LANG_ADVANCED_SERIAL_PRINT_TOOLTIP='Prints data to the console/serial port as human-readable ASCII text.';

RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN='Serial Println';
RoboBlocks.LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP='Prints data to the console/serial port as human-readable ASCII text and add CR.';

RoboBlocks.LANG_ADVANCED_SERIAL_READ='Serial Read';
RoboBlocks.LANG_ADVANCED_SERIAL_READ_TOOLTIP='Reads incoming serial data from serial port as human-readable ASCII text.';

RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL='Special Chars';
RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TAB='Tab';
RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN='Carriage Return';
RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED='Line Feed';
RoboBlocks.LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP='Write special Chars';

//bq blocks : 
RoboBlocks.LANG_CATEGORY_BQ='bq bloqs';

RoboBlocks.LANG_BQ_BAT='BAT';
RoboBlocks.LANG_BQ_BAT_RED_PIN='RED PIN#';
RoboBlocks.LANG_BQ_BAT_BLUE_PIN='BLUE PIN#';
RoboBlocks.LANG_BQ_BAT_TOOLTIP='Output the measured distance';


RoboBlocks.LANG_BQ_BUTTON='Button';
RoboBlocks.LANG_BQ_BUTTON_PIN='PIN#';
RoboBlocks.LANG_BQ_BUTTON_TOOLTIP='bq Button';

RoboBlocks.LANG_BQ_BUTTONS='Buttons';
RoboBlocks.LANG_BQ_BUTTONS_PIN='PIN#';
RoboBlocks.LANG_BQ_BUTTONS_BUTTON_A='Button #A';
RoboBlocks.LANG_BQ_BUTTONS_BUTTON_B='Button #B';
RoboBlocks.LANG_BQ_BUTTONS_BUTTON_C='Button #C';
RoboBlocks.LANG_BQ_BUTTONS_BUTTON_D='Button #D';
RoboBlocks.LANG_BQ_BUTTONS_BUTTON_E='Button #E';
RoboBlocks.LANG_BQ_BUTTONS_TOOLTIP='bq Buttons';


RoboBlocks.LANG_BQ_INFRARED='Infrared Sensor';
RoboBlocks.LANG_BQ_INFRARED_PIN='PIN#';
RoboBlocks.LANG_BQ_INFRARED_TOOLTIP='bq Infrared Sensor';

RoboBlocks.LANG_BQ_JOYSTICK='Joystick';
RoboBlocks.LANG_BQ_JOYSTICK_PIN='PIN#';
RoboBlocks.LANG_BQ_JOYSTICK_TOOLTIP='bq Joystick';

RoboBlocks.LANG_BQ_LED='LED';
RoboBlocks.LANG_BQ_LED_PIN='PIN#';
RoboBlocks.LANG_BQ_LED_STATE='state';
RoboBlocks.LANG_BQ_LED_ON='ON';
RoboBlocks.LANG_BQ_LED_OFF='OFF';
RoboBlocks.LANG_BQ_LED_TOOLTIP='bq LED';

RoboBlocks.LANG_BQ_PHOTORESISTOR='Photoresistor';
RoboBlocks.LANG_BQ_PHOTORESISTOR_PIN='PIN#';
RoboBlocks.LANG_BQ_PHOTORESISTOR_TOOLTIP='Output the value of the photoresistor.';

RoboBlocks.LANG_BQ_PIEZO_BUZZER='Buzzer';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_PIN='PIN#';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_TONE='TONE';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_DO='DO';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_RE='RE';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_MI='MI';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_FA='FA';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_SOL='SOL';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_LA='LA';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_SI='SI';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_DURATION='Duration';
RoboBlocks.LANG_BQ_PIEZO_BUZZER_TOOLTIP='Piezo Buzzer';

RoboBlocks.LANG_BQ_PIEZO_BUZZERAV='Advanced Buzzer';
RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_PIN='PIN#';
RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TONE='TONE';
RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_DURATION='Duration';
RoboBlocks.LANG_BQ_PIEZO_BUZZERAV_TOOLTIP='Piezo Buzzer Advanced';

RoboBlocks.LANG_BQ_POTENTIOMETER='Potentiometer';
RoboBlocks.LANG_BQ_POTENTIOMETER_PIN='PIN#';
RoboBlocks.LANG_BQ_POTENTIOMETER_TOOLTIP='bq Potentiometer';


//controls blocks : 
RoboBlocks.LANG_CATEGORY_CONTROLS = 'Control';

RoboBlocks.LANG_CONTROLS_BASE_DELAY_WAIT='Wait (ms)';
RoboBlocks.LANG_CONTROLS_BASE_DELAY_TOOLTIP='Delay specific time (in ms)';

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

RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE='while';
RoboBlocks.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL='until';
RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE= 'While a value is true, then do some statements.';
RoboBlocks.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL= 'While a value is false, then do some statements.';

RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_REPEAT='Repeat';
RoboBlocks.LANG_CONTROLS_REPEAT_TITLE_TIMES='times';
RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO='do';
RoboBlocks.LANG_CONTROLS_REPEAT_TOOLTIP='Repeat the code a certain number of times';

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

RoboBlocks.LANG_MATH_NUMBER_TOOLTIP='Number';

RoboBlocks.LANG_MATH_BASE_MAP='Map ';
RoboBlocks.LANG_MATH_BASE_MAP_VALUE_TO='Value to [0-';
RoboBlocks.LANG_MATH_BASE_MAP_BRACKET = ']';
RoboBlocks.LANG_MATH_BASE_MAP_TOOLTIP='Re-maps a number from [0-1024] to another.';

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
RoboBlocks.LANG_CATEGORY_TEXT='Text';

RoboBlocks.LANG_TEXT_TEXT_HELPURL = '';
RoboBlocks.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

RoboBlocks.LANG_TEXT_JOIN_HELPURL = '';
RoboBlocks.LANG_TEXT_JOIN_Field_CREATEWITH = 'create text with';
RoboBlocks.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

RoboBlocks.LANG_TEXT_CREATE_JOIN_Field_JOIN = 'join';
RoboBlocks.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM = 'item';
RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';
RoboBlocks.LANG_TEXT_CREATE_JOIN_TITLE_JOIN='join';
RoboBlocks.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM='element';

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
RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_IS='';
RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_EQUAL=' ==';
RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_QUESTION='';
RoboBlocks.LANG_TEXT_EQUALSIGNORECASE_TOOLTIP='Returns true if both input strings are equal, regardless of the case.';

RoboBlocks.LANG_text_getBytes='get bytes of';
RoboBlocks.LANG_TEXT_GETBYTES_TOOLTIP='Returns the number of bytes of the input string';

RoboBlocks.LANG_TEXT_SUBSTRING='Crop ';
RoboBlocks.LANG_TEXT_SUBSTRING_FROM='from';
RoboBlocks.LANG_TEXT_SUBSTRING_TO='to';
RoboBlocks.LANG_TEXT_SUBSTRING_TOOLTIP='Obtain a substring from the input string with the caracters between the two input numbers.';

//advanced blocks : 
RoboBlocks.LANG_CATEGORY_ADVANCED='Pin functions';

RoboBlocks.LANG_ADVANCED_CONVERSION_CONVERT= 'Convert';
RoboBlocks.LANG_ADVANCED_CONVERSION_DECIMAL='Decimal';
RoboBlocks.LANG_ADVANCED_CONVERSION_HEXADECIMAL='Hexadecimal';
RoboBlocks.LANG_ADVANCED_CONVERSION_OCTAL='Octal';
RoboBlocks.LANG_ADVANCED_CONVERSION_BINARY='Binary';
RoboBlocks.LANG_ADVANCED_CONVERSION_VALUE= 'value';
RoboBlocks.LANG_ADVANCED_CONVERSION_TOOLTIP='Base convert a number';

RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ='AnalogRead PIN#';
RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP='Reads the value from a specified digital pin';

RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE='AnalogWrite PIN#';
RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE='value';
RoboBlocks.LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP='Write analog value between 0 and 255 to a specific Port';

RoboBlocks.LANG_ADVANCED_BUILTIN_LED='BUILTIN LED';
RoboBlocks.LANG_ADVANCED_BUILTIN_LED_STATE='state';
RoboBlocks.LANG_ADVANCED_BUILTIN_LED_ON='ON';
RoboBlocks.LANG_ADVANCED_BUILTIN_LED_OFF='OFF';
RoboBlocks.LANG_ADVANCED_BUILTIN_LED_TOOLTIP='bq LED';

RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ='DigitalRead PIN#';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP='Reads the value from a specified digital pin';

RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE='DigitalWrite';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN='PIN#';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE='state';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH='HIGH';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW='LOW';
RoboBlocks.LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP='bq digital_write';


RoboBlocks.LANG_ADVANCED_HIGHLOW_HIGH='HIGH';
RoboBlocks.LANG_ADVANCED_HIGHLOW_LOW='LOW';
RoboBlocks.LANG_ADVANCED_HIGHLOW_TOOLTIP='HIGH OR LOW';

RoboBlocks.LANG_ADVANCED_MATH_RANDOM='Random between';
RoboBlocks.LANG_ADVANCED_MATH_RANDOM_AND=' and ';
RoboBlocks.LANG_ADVANCED_MATH_RANDOM_TOOLTIP='Assign a random number';



//procedures blocks
RoboBlocks.LANG_CATEGORY_PROCEDURES='Procedures';

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
RoboBlocks.LANG_CATEGORY_VARIABLES='Variables';

RoboBlocks.LANG_VARIABLES_DECLARE='Declare a variable ';
RoboBlocks.LANG_VARIABLES_DECLARE_TYPE='of type ';
RoboBlocks.LANG_VARIABLES_DECLARE_TOOLTIP='Declare a variable of type int or String';

RoboBlocks.LANG_VARIABLES_GLOBAL='New variable ';
RoboBlocks.LANG_VARIABLES_GLOBAL_TYPE='of type ';
RoboBlocks.LANG_VARIABLES_GLOBAL_EQUALS='equals';
RoboBlocks.LANG_VARIABLES_GLOBAL_TOOLTIP='Declare and define a GLOBAL variable of type int or String';

RoboBlocks.LANG_VARIABLES_LOCAL='New LOCAL variable ';
RoboBlocks.LANG_VARIABLES_LOCAL_TYPE='of type ';
RoboBlocks.LANG_VARIABLES_LOCAL_EQUALS='equals';
RoboBlocks.LANG_VARIABLES_LOCAL_TOOLTIP='Declare and define a LOCAL variable of type int or String';

RoboBlocks.LANG_VARIABLES_DEFINE='Define variable ';
RoboBlocks.LANG_VARIABLES_DEFINE_AS='as';
RoboBlocks.LANG_VARIABLES_DEFINE_TOOLTIP='Define the value of a variable';


RoboBlocks.LANG_VARIABLES_SET='Set variable ';
RoboBlocks.LANG_VARIABLES_SET_AS='as';
RoboBlocks.LANG_VARIABLES_SET_TOOLTIP='Set the value of a variable';

RoboBlocks.LANG_VARIABLES_GET='Variable ';
RoboBlocks.LANG_VARIABLES_GET_TOOLTIP='Get the value of a variable';

RoboBlocks.LANG_VARIABLES_PIN_TOOLTIP='Select the PIN';

//zum blocks : 
RoboBlocks.LANG_CATEGORY_ZUM='zum';

RoboBlocks.LANG_ZUM_BUTTON='Button';
RoboBlocks.LANG_ZUM_BUTTON_PIN='PIN#';
RoboBlocks.LANG_ZUM_BUTTON_TOOLTIP='bq Button';

RoboBlocks.LANG_ZUM_FOLLOWER='Infrared Sensor';
RoboBlocks.LANG_ZUM_FOLLOWER_PIN_LEFT='PIN LEFT#';
RoboBlocks.LANG_ZUM_FOLLOWER_PIN_RIGHT='PIN RIGHT#';
RoboBlocks.LANG_ZUM_FOLLOWER_LEFT='Left';
RoboBlocks.LANG_ZUM_FOLLOWER_RIGHT='Right';
RoboBlocks.LANG_ZUM_FOLLOWER_TOOLTIP='bq Infrared Sensor';

RoboBlocks.LANG_ZUM_INFRARED='Infrared Sensor';
RoboBlocks.LANG_ZUM_INFRARED_PIN='PIN#';
RoboBlocks.LANG_ZUM_INFRARED_TOOLTIP='bq Infrared Sensor';

RoboBlocks.LANG_ZUM_LED='LED';
RoboBlocks.LANG_ZUM_LED_PIN='PIN#';
RoboBlocks.LANG_ZUM_LED_ON='ON';
RoboBlocks.LANG_ZUM_LED_OFF='OFF';
RoboBlocks.LANG_ZUM_LED_TOOLTIP='bq LED';

RoboBlocks.LANG_ZUM_PHOTORESISTOR='Photoresistor';
RoboBlocks.LANG_ZUM_PHOTORESISTOR_PIN='PIN#';
RoboBlocks.LANG_ZUM_PHOTORESISTOR_TOOLTIP='Output the value of the photoresistor.';

RoboBlocks.LANG_ZUM_PIEZO_BUZZER='Buzzer';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_PIN='PIN#';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TONE='TONE';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DO='DO';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_RE='RE';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_MI='MI';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_FA='FA';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SOL='SOL';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_LA='LA';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_SI='SI';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_DURATION='Duration';
RoboBlocks.LANG_ZUM_PIEZO_BUZZER_TOOLTIP='Piezo Buzzer';

RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV='Advanced Buzzer';
RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_PIN='PIN#';
RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TONE='TONE';
RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_DURATION='Duration';
RoboBlocks.LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP='Piezo Buzzer Advanced';

RoboBlocks.LANG_ZUM_POTENTIOMETER='Potentiometer';
RoboBlocks.LANG_ZUM_POTENTIOMETER_PIN='PIN#';
RoboBlocks.LANG_ZUM_POTENTIOMETER_TOOLTIP='zum Potentiometer';



//servo blocks : 
RoboBlocks.LANG_CATEGORY_SERVO='Servo';

RoboBlocks.LANG_SERVO_CONT='Servo';
RoboBlocks.LANG_SERVO_CONT_PIN='PIN#';
RoboBlocks.LANG_SERVO_CONT_ROT='ROT';
RoboBlocks.LANG_SERVO_CONT_TURN_CLOCKWISE='TURN CLOCKWISE';
RoboBlocks.LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE='TURN COUNTERCLOCKWISE';
RoboBlocks.LANG_SERVO_CONT_STOPPED='STOPPED';
RoboBlocks.LANG_SERVO_CONT_DELAY='Delay';
RoboBlocks.LANG_SERVO_CONT_TOOLTIP='Continuous rotation servo';

RoboBlocks.LANG_SERVO_MOVE='Servo';
RoboBlocks.LANG_SERVO_MOVE_PIN='PIN#';
RoboBlocks.LANG_SERVO_MOVE_DEGREES='Degrees (0~180)';
RoboBlocks.LANG_SERVO_MOVE_DELAY='Delay';
RoboBlocks.LANG_SERVO_MOVE_TOOLTIP='Move between 0~180 degree';

RoboBlocks.LANG_SERVO_READ_DEGREES='Read Degrees';
RoboBlocks.LANG_SERVO_READ_DEGREES_PIN='PIN#';
RoboBlocks.LANG_SERVO_READ_DEGREES_SERVO='Servo';
RoboBlocks.LANG_SERVO_READ_DEGREES_TOOLTIP='Returns that degree with the last servo move.';
