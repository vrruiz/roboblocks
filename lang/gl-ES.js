'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Borrar comentario',
        BLOCKLY_MSG_ADD_COMMENT: 'Engadir comentario',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
        BLOCKLY_MSG_INLINE_INPUTS: 'Entradas en liña',
        BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloque',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 bloques',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Minimizar bloque',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloque',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Desactivar bloque',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Activar bloque',
        BLOCKLY_MSG_HELP: 'Axuda',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Minimizar bloques',
        BLOCKLY_MSG_EXPAND_ALL: 'Expandir bloques',
        LANG_VARIABLES_SET_ITEM: 'elemento',
        LANG_RESERVED_WORDS: 'Palabra reservada: este nome non está permitido.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Lóxica',
        LANG_LOGIC_OPERATION_AND: 'e',
        LANG_LOGIC_OPERATION_OR: 'ou',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as dúas entradas son iguais.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as dúas entradas son iguais entre si.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primeira entrada é menor que a segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primeira entrada é menor ou igual que a segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primeira entrada é maior que a segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primeira entrada é maior ou igual que a segunda entrada.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara se ambas as entradas son verdadeiras.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara se algunha das entradas é verdadeira.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'non',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Devolve o contrario da entrada.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'verdadeiro',
        LANG_LOGIC_BOOLEAN_FALSE: 'falso',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devolve verdadeiro ou falso en función do seleccionado.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicación',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devolve os datos recibidos polo módulo Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar datos',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Os datos da entrada son enviados usando o módulo Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definición do módulo Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Porto Serie Dispoñible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comproba se o módulo Bluetooth está dispoñible ou non',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Porto Serie Dispoñible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comproba se o porto serie está dispoñible ou non',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Ler enteiro polo porto serie', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Devolve o primeiro número enteiro (longo) desde o porto serie', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimir polo porto serie',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os datos como texto ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir polo porto serie con salto de liña',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os datos como texto ASCII e con retorno de carro (RC).',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
        LANG_ADVANCED_SERIAL_READ: 'Ler o porto serie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Le os datos que se reciben polo porto serie como bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Ler cadea desde o porto serie',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Le os datos que se reciben polo porto serie como texto ASCII.',
        //sensor blocks :
        LANG_CATEGORY_Sensor: 'Sensores',
        LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Devolve a distancia medida polo sensor.',
        LANG_IR_READ: 'Reads from infrared receiver', //to translate
        LANG_IR_READ_PIN: 'connected to PIN#', //to translate
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD bloqs',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_DEF_CONNECTION: 'Connection type',  //to translate
        LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)',  //to translate
        LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)',  //to translate
        LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
        LANG_LCD_DEF_PIN_1: 'RS Pin',  //to translate
        LANG_LCD_DEF_PIN_2: 'Enable Pin',  //to translate
        LANG_LCD_DEF_PIN_3: 'Data4 Pin',  //to translate
        LANG_LCD_DEF_PIN_4: 'Data5 Pin',  //to translate
        LANG_LCD_DEF_PIN_5: 'Data6 Pin',  //to translate
        LANG_LCD_DEF_PIN_6: 'Data7 Pin',  //to translate
        LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avanzado',
        LANG_LCD_ADVANCED_ROWS: 'Filas',
        LANG_LCD_ADVANCED_COLUMNS: 'Columnas',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloque que define o LCD avanzado',
        LANG_LCD_SETBACKLIGHT: 'LCD: axustar a retroiluminación',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Axusta a retroiluminación da pantalla LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_TEXT: 'Text or value', //to translate
        LANG_LCD_PRINT_SPECIAL: 'Defined character', //to translate
        LANG_LCD_PRINT_ROW: 'Row', //to translate
        LANG_LCD_PRINT_COL: 'Col', //to translate
        LANG_LCD_PRINT_POSITION: 'Fixar posición do texto?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprime unha frase na pantalla LCD na posición específicada ou na seguinte dispoñible.',
        LANG_LCD_CLEAR: 'LCD borrar',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
        LANG_LCD_HOME: 'LCD Go home', //to translate
        LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
        LANG_LCD_DISPLAY: 'LCD Show content', //to translate
        LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
        LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
        LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
        LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
        LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
        LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
        LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
        LANG_LCD_CREATECHAR: 'LCD Create character in index', //to translate
        LANG_LCD_CREATECHAR_ROW1: 'Row 1', //to translate
        LANG_LCD_CREATECHAR_ROW2: 'Row 2', //to translate
        LANG_LCD_CREATECHAR_ROW3: 'Row 3', //to translate
        LANG_LCD_CREATECHAR_ROW4: 'Row 4', //to translate
        LANG_LCD_CREATECHAR_ROW5: 'Row 5', //to translate
        LANG_LCD_CREATECHAR_ROW6: 'Row 6', //to translate
        LANG_LCD_CREATECHAR_ROW7: 'Row 7', //to translate
        LANG_LCD_CREATECHAR_ROW8: 'Row 8', //to translate
        LANG_LCD_CREATECHAR_LENGTH: 'Each row must have five values, zero or one.', //to translate
        LANG_LCD_CREATECHAR_TOOLTIP: 'Creates a special char for LCD and stores it in the specified index.', //to translate
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Control',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Agardar [ms]',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Agarda o tempo especificado en milisegundos (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Tempo desde o arranque (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de milisegundos desde que se iniciou o programa (enteiro longo)',
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
        LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
        LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Facer',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mentres',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mentres a condición sexa verdadeira continúa executando as acións do bloque.',
        LANG_CONTROLS_EXECUTE: 'Executar',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executa código C/C++. Utilizar con preucación, xa que pode romper facilmente o programa e impedir a súa correcta compilación.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condición é verdadeira, executa as accións dentro do bloque.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condición é verdadeira, executa o primeiro bloque de comandos. Se non é, executa o segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primeiro bloque de comandos. Se non, se o segundo valor é verdadeiro, executa o segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primeiro bloque de comandos. Se non, se o segundo valor é verdadeiro, executa o segundo bloque de comandos. Se ningún dos valores é verdadeiro, executa o último bloque de comandos',
        LANG_CONTROLS_IF_MSG_IF: 'se',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'se non, se',
        LANG_CONTROLS_IF_MSG_ELSE: 'se non',
        LANG_CONTROLS_IF_MSG_THEN: 'executar',
        LANG_CONTROLS_IF_IF_Field_IF: 'se',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Engadir, eliminar ou reordenar seccións para reconfigurar este bloque "se".',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'se non, se',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Engade unha condición ao bloque "se".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'se non',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Engade unha condición final ao bloque "se" para capturar o resto de opcións.',
        LANG_CONTROLS_FOR_FROM_WARNING:'Non é posible asignar unha variable ao valor inicial do bucle',
        LANG_CONTROLS_FOR_TO_WARNING:'Non é posible asignar unha variable ao valor final do bucle',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'It is not possible to set a variable as the increment value of the for block', //to translate
        LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
        LANG_CONTROLS_FOR_INPUT_TO: 'ata',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
        LANG_CONTROLS_FOR_INPUT_DO: 'executar',
        LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio ata un número final. Cada vez que se incrementa a conta a variable toma ese valor e execútanse as accións.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentres',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'ata',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentres a condición sexa verdadeira, executar as instrucións.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentres a condición sexa falsa, executar as instrucións.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'executar as instrucións un número determinado de veces.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'o bucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromper',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar coa seguinte iteración',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interromper o bucle que contén esta instrución.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto de accións desta iteración e continuar coa seguinte iteración.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque só pode ser usado dentro dun bucle.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Inicio',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Repetir',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Os bloques en Inicio executaranse unha soa vez no arranque, mentres que os bloques en Repetir executaranse de forma repetida.',
        LANG_CONTROLS_SWITCH: 'se ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Executa as accións do caso que se cumpra.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Executa as accións do caso que se cumpra.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Executa as accións do caso que se cumpra.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Executa as accións do caso que se cumpra.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara un a un se se cumplen os distintos casos.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'O bloque "default" especifica a acción que se vai executar se no se cumpriron ningún dos casos anteriores.',
        LANG_CONTROLS_SWITCH_IS: 'é: ',
        LANG_CONTROLS_SWITCH_CASE: 'caso ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'noutro caso',
        LANG_CONTROLS_SWITCH_DO: 'executar',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matemáticas',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea a entrada desde un rango de valores iniciais a outro rango distinto.',
        LANG_MATH_NUMBER_TOOLTIP: 'Número enteiro',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteiros',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Devolve o valor dun elemento concreto do vector.',
        LANG_MATH_MODULO_TOOLTIP: 'Devolve o resto da división entre dúas entradas.',
        LANG_MATH_BASE_MAP: 'Mapear ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea a entrada desde o rango [0-1023] a outro rango de valores.',
        LANG_MATH_SINGLE_OP_ROOT: 'raíz cadrada',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devolve a raíz cadrada dun número.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devolve o valor absoluto dun número.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devolve o número cambiado de signo.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Devolve o logaritmo neperiano dun número.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devolve o logaritmo en base 10 dun número.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devolve o exponencial dun número.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devolve 10 elevado a unha potencia.',
        LANG_MATH_MIN: 'Minimum value between', //To translate
        LANG_MATH_MIN_PARAM2: 'and', //To translate
        LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
        LANG_MATH_MAX: 'Maximum value between', //To translate
        LANG_MATH_MAX_PARAM2: 'and', //To translate
        LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
        LANG_MATH_POW: 'Value of', //To translate
        LANG_MATH_POW_PARAM2: 'to the power of', //To translate
        LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
        //text blocks:
        LANG_CATEGORY_TEXT: 'Texto',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Unha letra, unha palabra ou unha liña de texto.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
        LANG_TEXT_JOIN_TOOLTIP: 'Crea texto xuntando calquera número de elementos.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Engadir, eliminar ou reordenar seccións para reconfigurar este bloque de texto.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Engadir un elemento ao texto.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'a',
        LANG_TEXT_APPEND_APPENDTEXT: 'Engadirlle texto',
        LANG_TEXT_APPEND_VARIABLE: 'elemento',
        LANG_TEXT_APPEND_TOOLTIP: 'Engadir texto á variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'lonxitude',
        LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluíndo os espazos) no texto introducido.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dous textos introducidos son iguais, independentemente de que teñan letras maiúsculas ou minúsculas.',
        LANG_TEXT_SUBSTRING: 'Recortar ',
        LANG_TEXT_SUBSTRING_FROM: 'desde',
        LANG_TEXT_SUBSTRING_TO: 'ata',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introducido que se atopen entre os dous índices e crea con eles un novo texto.',
        LANG_TEXT_CHARAT: 'Character of text', //To translate
        LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
        LANG_TEXT_SPECIAL: 'Caracteres especiais',
        LANG_TEXT_SPECIAL_TAB: 'Tabulador',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de liña',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Escribe caracteres especiais.',
        LANG_TEXT_COMMENT: 'Comment', //to translate
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funcións PIN',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Ler o pin analóxico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Le o valor dun pin analóxico específico.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir no PIN dixital',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'o valor analóxico',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 e 255 nun PIN analóxico específico.',
        LANG_ADVANCED_BUILTIN_LED: 'LED da PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ACESO',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado na placa que está internamente conectado ao PIN 13.',
        LANG_ADVANCED_INOUT_dixital_READ: 'Ler o pin dixital PIN#',
        LANG_ADVANCED_INOUT_dixital_READ_TOOLTIP: 'Le o valor desde un pin dixital específico.',
        LANG_ADVANCED_INOUT_dixital_WRITE: 'Escribir no pin dixital',
        LANG_ADVANCED_INOUT_dixital_WRITE_GET_VAR: 'o valor',
        LANG_ADVANCED_INOUT_dixital_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_dixital_WRITE_STATE: 'estado',
        LANG_ADVANCED_INOUT_dixital_WRITE_HIGH: 'ALTO',
        LANG_ADVANCED_INOUT_dixital_WRITE_LOW: 'BAIXO',
        LANG_ADVANCED_INOUT_dixital_WRITE_TOOLTIP: 'Escribe un valor nun pin dixital específico.',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" oU "BAIXO" en función do seleccionado.',
        LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número ao chou entre os dous límites introducidos.',
        LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
        LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funcións',
        LANG_PROCEDURES_RETURN: 'Devolve',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Devolve un valor',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada a unha función non definida previamente.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'función_sen_retorno',
        LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se executa sen devolver nada.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'función_con_retorno',
        LANG_PROCEDURES_DEFRETURN_DO: 'executar',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función ten parámetros duplicados.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'función_sen_retorno',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Executa esta función.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'función_con_retorno',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa esta función que ten valor de retorno.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Destaca a función',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se a condición é verdadeira, a función devolverá este valor.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque só pode ser usado dentro dunha función que teña valor de retorno.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variable non está declarada.',
        LANG_VARIABLES_GLOBAL: 'Declarar variable GLOBAL',
        LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara e define unha variable GLOBAL de tipo enteiro (int) ou texto (String).',
        LANG_VARIABLES_LOCAL: 'Declarar variable',
        LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara e define unha variable LOCAL de tipo enteiro (int) ou texto (String).',
        LANG_VARIABLES_DEFINE: 'Definir variable ',
        LANG_VARIABLES_DEFINE_AS: 'como',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir o valor dunha variable.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Cambia o valor dunha variable.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Devolve o valor dunha variable',
        LANG_VARIABLES_PIN_ANALOG: 'Pin analóxico',
        LANG_VARIABLES_PIN_dixital: 'Pin dixital',
        LANG_VARIABLES_PIN_dixital0: 'COIDADO: o pin dixital 0 (pin Rx) é usado para a comunicación da placa desde o ordenador. Usarlo para conectar componentes pode dar problemas ao programala.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona o PIN desexado.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte',
        LANG_VARIABLES_TYPE_FLOAT: 'Decimal',
        LANG_VARIABLES_TYPE_INTEGER: 'enteiro',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'enteiro longo',
        LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
        LANG_VARIABLES_TYPE_STRING: 'Texto',
        LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
        LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',  // To translate
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Sonidos',
        LANG_ZUM_PIEZO_BUZZER: 'Zumbador',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TON',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duración [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
        LANG_ZUM_PIEZO_BUZZERAV: 'Zumbador avanzado',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TON',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador piezoeléctrico avanzado.',
        LANG_ZUM_DHT11_VALUE: 'Get', //to translate
        LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
        LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
        LANG_ZUM_DHT11_PIN: 'PIN', //to translate
        LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Servo de rotación continua',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'XIRAR NO SENTIDO HORARIO',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'XIRAR NO SENTIDO ANTIHORARIO',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'DETER',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa [ms]',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
        LANG_MOTOR_SERVO_MOVE: 'Servo',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graos (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa [ms]',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 grados.',
        LANG_MOTOR_SERVO_WARNING:'Non é posible definir o pin do servo utilizando unha variable',
        LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
        LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
        LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
        LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
        LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
        LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
        LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
        LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
        LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
        LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
        LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
        LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
        LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
        LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
        LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
        LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
        LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
        LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
        LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
        //interrupt blocks :
        LANG_CATEGORY_INTERRUPTS: 'Interrupts',  // To translate
        LANG_INTERRUPTS_STATE: 'Set interrupts state to ',  // To translate
        LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED',  // To translate
        LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED',  // To translate
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.',  // To translate
        LANG_INTERRUPTS_ATTACH: 'Attach procedure ',  // To translate
        LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ',  // To translate
        LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin',  // To translate
        LANG_INTERRUPTS_ATTACH_LOW: 'LOW',  // To translate
        LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE',  // To translate
        LANG_INTERRUPTS_ATTACH_RISING: 'RISING',  // To translate
        LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING',  // To translate
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return',  // To translate
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.',  // To translate
        LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin',  // To translate
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.',  // To translate
        LANG_WIFI_CONNECT: 'Wifi:', //To translate
        LANG_WIFI_CONNECT_STATION: 'connect', //To translate
        LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
        LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
        LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
        LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
        LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
        LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
        LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
        LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
        LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
        LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
        LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
        LANG_WIFI_CLIENT_IP: 'IP address', //To translate
        LANG_WIFI_CLIENT_PORT: 'Port', //To translate
        LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
        LANG_WIFI_SERVER: 'Wifi:start server', //To translate
        LANG_WIFI_SERVER_PORT: 'Port', //To translate
        LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
        LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
        LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
        LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
        LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
        LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
        LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
        LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
        LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
        LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
        LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
        LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
        LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
        LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
        LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
        LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
        LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
        LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
        LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('es', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('gl-ES', language);
    }
}());
