'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicate',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Remove Comment',
        BLOCKLY_MSG_ADD_COMMENT: 'Add Comment',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'External Inputs',
        BLOCKLY_MSG_INLINE_INPUTS: 'Inline Inputs',
        BLOCKLY_MSG_DELETE_BLOCK: 'Delete Block',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Delete %1 Blocks',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Collapse Block',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Expand Block',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Disable Block',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Enable Block',
        BLOCKLY_MSG_HELP: 'Help',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Collapse Blocks',
        BLOCKLY_MSG_EXPAND_ALL: 'Expand Blocks',
        LANG_VARIABLES_SET_ITEM: 'item',
        LANG_RESERVED_WORDS: 'Reserved word: this name is not allowed.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.',
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
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer',
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer',
        LANG_ADVANCED_SERIAL_PRINT: 'Send data to serial port',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Send data to serial port as ASCII text.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Send data with carriage return',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Send data to serial port as ASCII text and adds a Carriage Return (CR).',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Send value with format',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Send a number to serial port with specified format',
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR',
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).',
        LANG_ADVANCED_SERIAL_READ: 'Serial Read',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Reads incoming serial data from serial port as bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Serial Read String',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Reads incoming serial data from serial port as ASCII text.',
        //Sensor blocks:
        LANG_CATEGORY_SENSOR: 'Sensors',
        LANG_BQ_BAT: 'BAT - Ultrasonic Sensor',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Returns the distance measured by the ultrasonic sensor.',
        LANG_IR_READ: 'Reads from infrared receiver',
        LANG_IR_READ_PIN: 'connected to PIN#',
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD bloqs',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_DEF_CONNECTION: 'Connection type',
        LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)',
        LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)',
        LANG_LCD_DEF_ADDRESS: 'Address of the component',
        LANG_LCD_DEF_PIN_1: 'RS Pin',
        LANG_LCD_DEF_PIN_2: 'Enable Pin',
        LANG_LCD_DEF_PIN_3: 'Data4 Pin',
        LANG_LCD_DEF_PIN_4: 'Data5 Pin',
        LANG_LCD_DEF_PIN_5: 'Data6 Pin',
        LANG_LCD_DEF_PIN_6: 'Data7 Pin',
        LANG_LCD_DEF_TOOLTIP: 'Block that defines the LCD',
        LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
        LANG_LCD_ADVANCED_ROWS: 'Rows',
        LANG_LCD_ADVANCED_COLUMNS: 'Columns',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
        LANG_LCD_SETBACKLIGHT: 'LCD: setBacklight(',
        LANG_LCD_SETBACKLIGHT_CLOSE: ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Sets the backlight of the LCD screen.',
        LANG_LCD_PRINT: 'LCD: print ',
        LANG_LCD_PRINT_TEXT: 'Text or value',
        LANG_LCD_PRINT_SPECIAL: 'Defined character',
        LANG_LCD_PRINT_ROW: 'Row',
        LANG_LCD_PRINT_COL: 'Col',
        LANG_LCD_PRINT_POSITION: 'Set text position?',
        LANG_LCD_PRINT_TOOLTIP: 'Prints a String in the LCD at the specified position or the next available one.',
        LANG_LCD_CLEAR: 'LCD clear',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD clear',
        LANG_LCD_HOME: 'LCD Go home',
        LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen',
        LANG_LCD_DISPLAY: 'LCD Show content',
        LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display',
        LANG_LCD_NODISPLAY: 'LCD Hide content',
        LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it',
        LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left',
        LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left',
        LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right',
        LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right',
        LANG_LCD_CREATECHAR: 'LCD Create character in index',
        LANG_LCD_CREATECHAR_ROW1: 'Row 1',
        LANG_LCD_CREATECHAR_ROW2: 'Row 2',
        LANG_LCD_CREATECHAR_ROW3: 'Row 3',
        LANG_LCD_CREATECHAR_ROW4: 'Row 4',
        LANG_LCD_CREATECHAR_ROW5: 'Row 5',
        LANG_LCD_CREATECHAR_ROW6: 'Row 6',
        LANG_LCD_CREATECHAR_ROW7: 'Row 7',
        LANG_LCD_CREATECHAR_ROW8: 'Row 8',
        LANG_LCD_CREATECHAR_LENGTH: 'Each row must have five values, zero or one.',
        LANG_LCD_CREATECHAR_TOOLTIP: 'Creates a special char for LCD and stores it in the specified index.',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Control',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Wait (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Waits the specified time in milliseconds (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)',
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]',
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)',
        LANG_CONTROLS_BASE_MICROS: 'Time from start (us)',
        LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)',
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
        LANG_CONTROLS_EXECUTE: 'Execute',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
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
        LANG_CONTROLS_FOR_FROM_WARNING:'It is not possible to set a variable as the initial value of the for block.',
        LANG_CONTROLS_FOR_TO_WARNING:'It is not possible to set a variable as the final value of the for block.',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'It is not posiible to set a variable as the increment value of the for block',
        LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'from',
        LANG_CONTROLS_FOR_INPUT_TO: 'to',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment',
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
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'switch ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Execute the statement of the case .',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Use the switch statement to select one of many blocks of code to be executed.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'The switch expression is evaluated once',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'case',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'The default keyword specifies the code to run if there is no case match',
        LANG_CONTROLS_SWITCH_IS: 'case: ',
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
        LANG_MATH_MIN: 'Minimum value between',
        LANG_MATH_MIN_PARAM2: 'and',
        LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.',
        LANG_MATH_MAX: 'Maximum value between',
        LANG_MATH_MAX_PARAM2: 'and',
        LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.',
        LANG_MATH_POW: 'Value of',
        LANG_MATH_POW_PARAM2: 'to the power of',
        LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.',
        //text blocks:
        LANG_CATEGORY_TEXT: 'Text',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'A letter, word, or line of text.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character',
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
        LANG_TEXT_CHARAT: 'Character of text',
        LANG_TEXT_CHARAT_POSITION: 'in position',
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).',
        LANG_TEXT_SPECIAL: 'Special Chars',
        LANG_TEXT_SPECIAL_TAB: 'Tab',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Line Feed',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Writes special Chars.',
        LANG_TEXT_COMMENT: 'Comment',
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Pin functions',
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
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'value',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'state',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Write a value in a specified digital pin',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#',
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to',
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).',
        LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
        LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH OR LOW',
        LANG_ADVANCED_MATH_RANDOM: 'Random between',
        LANG_ADVANCED_MATH_RANDOM_AND: ' and ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Returns a random number between the two limits.',
        LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to',
        LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.',
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Functions',
        LANG_PROCEDURES_RETURN: 'return',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Returns a value',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Function call without matching definition',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'function_without_return',
        LANG_PROCEDURES_DEFNORETURN_DO: 'do',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'A function with no return value.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'function_with_return',
        LANG_PROCEDURES_DEFRETURN_DO: 'do',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'return',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'A function with a return value.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Warning: This function has duplicate parameters.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'do',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'function_without_return',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Calls a function with no return value.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'do',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'function_with_return',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Calls a function with a return value.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parameters',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Highlight function',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'If the condition is true, then returns this value.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Warning: This block may only be used within a function with a return value.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'This variable is not declared.',
        LANG_VARIABLES_GLOBAL: 'Declare GLOBAL Variable ',
        LANG_VARIABLES_GLOBAL_TYPE: 'of type ',
        LANG_VARIABLES_GLOBAL_EQUALS: 'equals',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declares and defines a GLOBAL variable of type int or String.',
        LANG_VARIABLES_LOCAL: 'Declare variable ',
        LANG_VARIABLES_LOCAL_TYPE: 'of type ',
        LANG_VARIABLES_LOCAL_EQUALS: 'equals',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Declare and define a LOCAL variable of type int or String.',
        LANG_VARIABLES_DEFINE: 'Define variable ',
        LANG_VARIABLES_DEFINE_AS: 'as',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Define the value of a variable.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Sets the value of a variable.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Returns the value of a variable.',
        LANG_VARIABLES_PIN_ANALOG: 'Analog pin',
        LANG_VARIABLES_PIN_DIGITAL: 'Digital pin',
        LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Select the PIN.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte',
        LANG_VARIABLES_TYPE_FLOAT: 'Float',
        LANG_VARIABLES_TYPE_INTEGER: 'Integer',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer',
        LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer',
        LANG_VARIABLES_TYPE_STRING: 'String',
        LANG_VARIABLES_TYPE_CHAR: 'Character',
        LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean',
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Sounds',
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
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duration [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV: 'Advanced Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONE',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duration [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',
        LANG_ZUM_DHT11_VALUE: 'Get',
        LANG_ZUM_DHT11_VALUE1: 'Temperature',
        LANG_ZUM_DHT11_VALUE2: 'Humidity',
        LANG_ZUM_DHT11_PIN: 'PIN',
        LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.',
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors',
        LANG_MOTOR_SERVO_CONT: 'Continuous rotation servo',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'TURN CLOCKWISE',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TURN COUNTERCLOCKWISE',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'STOPPED',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Delay [ms]',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',
        LANG_MOTOR_SERVO_MOVE: 'Servo',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Degrees (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Delay [ms]',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Move between 0~180 degree',
        LANG_MOTOR_SERVO_WARNING:'It is not possible to set the servo pin using a variable',
        LANG_MOTOR_STEPPER_MOVE: 'Stepper motor',
        LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution',
        LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?',
        LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1',
        LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2',
        LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3',
        LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4',
        LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to',
        LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)',
        LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor',
        LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)',
        LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.',
        LANG_MOTOR_PCA9685_DEF: 'PCA9685',
        LANG_MOTOR_PCA9685_DEF_FREQ: 'Servo',
        LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component',
        LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.',
        LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo',
        LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle',
        LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.',
        //interrupt blocks :
        LANG_CATEGORY_INTERRUPTS: 'Interrupts',
        LANG_INTERRUPTS_STATE: 'Set interrupts state to ',
        LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED',
        LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED',
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.',
        LANG_INTERRUPTS_ATTACH: 'Attach procedure ',
        LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ',
        LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin',
        LANG_INTERRUPTS_ATTACH_LOW: 'LOW',
        LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE',
        LANG_INTERRUPTS_ATTACH_RISING: 'RISING',
        LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING',
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return',
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.',
        LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin',
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.',
        LANG_WIFI_CONNECT: 'Wifi:',
        LANG_WIFI_CONNECT_STATION: 'connect',
        LANG_WIFI_CONNECT_SOFTAP: 'create network',
        LANG_WIFI_CONNECT_SSID: 'SSID',
        LANG_WIFI_CONNECT_PASSWORD: 'password',
        LANG_WIFI_CONNECT_CHANNEL: 'channel',
        LANG_WIFI_CONNECT_RX_PIN: 'Rx pin',
        LANG_WIFI_CONNECT_TX_PIN: 'Tx pin',
        LANG_WIFI_CONNECT_BAUD: 'baud rate',
        LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.',
        LANG_WIFI_DISCONNECT: 'Wifi:disconnect',
        LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.',
        LANG_WIFI_CLIENT: 'Wifi:connect to server',
        LANG_WIFI_CLIENT_IP: 'IP address',
        LANG_WIFI_CLIENT_PORT: 'Port',
        LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.',
        LANG_WIFI_SERVER: 'Wifi:start server',
        LANG_WIFI_SERVER_PORT: 'Port',
        LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.',
        LANG_WIFI_GETIP: 'Wifi:get IP address',
        LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.',
        LANG_WIFI_SEND_SERVER: 'Wifi:send to server',
        LANG_WIFI_SEND_SERVER_DATA: 'Text',
        LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.',
        LANG_WIFI_SEND_CLIENT: 'Wifi:send to client',
        LANG_WIFI_SEND_CLIENT_ID: 'ID',
        LANG_WIFI_SEND_CLIENT_DATA: 'Data',
        LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).',
        LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client',
        LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.',
        LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server',
        LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout',
        LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.',
        LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server',
        LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.',
        LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection',
        LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.'
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
