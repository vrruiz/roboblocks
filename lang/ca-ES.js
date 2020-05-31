'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplica',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Elimina el comentari',
        BLOCKLY_MSG_ADD_COMMENT: 'Afegeix un comentari',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entrades externes',
        BLOCKLY_MSG_INLINE_INPUTS: 'Entrades en línia',
        BLOCKLY_MSG_DELETE_BLOCK: 'Elimina el bloc',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Elimina %1 blocs',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Replega el bloc',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Desplega el bloc',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Desactiva els blocs',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Activa el bloc',
        BLOCKLY_MSG_HELP: 'Ajuda',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Replega els blocs',
        BLOCKLY_MSG_EXPAND_ALL: 'Desplega els blocs',
        LANG_VARIABLES_SET_ITEM: 'element',
        LANG_RESERVED_WORDS: 'Paraula reservada: aquest nom no està permès.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Lògica',
        LANG_LOGIC_OPERATION_AND: 'i',
        LANG_LOGIC_OPERATION_OR: 'o',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si les dues entrades són iguals.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si les dues entrades són diferents.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada és menor que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada és menor o igual que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada és més gran que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada és més gran o igual que la segona entrada.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si les dues entrades són veritables.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de les entrades són veritables.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Retorna el contrari de l\'entrada.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'veritable',
        LANG_LOGIC_BOOLEAN_FALSE: 'fals',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Retorna veritable o fals en funció del que s\'ha seleccionat.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicació',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Rep dades per Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Retorna les dades rebudes pel mòdul Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Envia dades per Bluetooth',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Envia dades',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Pren les dades de l\'entrada i les envia utilitzant el mòdul Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Taxa de bauds',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codi PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Rep',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Envia',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definició del mòdul Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: port sèrie disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el mòdul Bluetooth està disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Port sèrie disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el port sèrie està disponible',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Llegeix l\'enter del port sèrie',
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Retorna el primer número enter (llarg) des del port sèrie',
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimeix pel port sèrie',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprimeix les dades com a text ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimeix pel port sèrie amb salt de línia',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprimeix les dades com a text ASCII i amb retorn de carro (RC).',
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
        LANG_ADVANCED_SERIAL_READ: 'Llegeix des del port sèrie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Llegeix text des del port sèrie',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a text ASCII.',
        //Sensor blocks:
        LANG_CATEGORY_SENSOR: 'Sensors',
        LANG_BQ_BAT: 'BAT - Sensor d\'ultrasons',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Retorna la distància mesurada pel sensor.',
        LANG_IR_READ: 'Reads from infrared receiver', //to translate
        LANG_IR_READ_PIN: 'connected to PIN#', //to translate
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
        //LCD blocks:
        LANG_CATEGORY_LCD: 'Blocs de la LCD',
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
        LANG_LCD_DEF_TOOLTIP: 'Defineix la LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avançada',
        LANG_LCD_ADVANCED_ROWS: 'Files',
        LANG_LCD_ADVANCED_COLUMNS: 'Columnes',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc que defineix la LCD avançada',
        LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminació',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminació de la LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_TEXT: 'Text or value', //to translate
        LANG_LCD_PRINT_SPECIAL: 'Defined character', //to translate
        LANG_LCD_PRINT_ROW: 'Row', //to translate
        LANG_LCD_PRINT_COL: 'Col', //to translate
        LANG_LCD_PRINT_POSITION: 'Vols fifxar la posició del text?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprimeix una cadena a la LCD en la posició especificada o en la següent disponible.',
        LANG_LCD_CLEAR: 'Esborra la LCD',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Esborra',
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
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Espera (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el temps especificat en mil·lisegons (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Temps des de l\'inici (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de mil·lisegons des que el programa s\'ha iniciat (enter llarg)',
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
        LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
        LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Fes',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mentre',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mentre la condició es compleix, continua fent les accions.',
        LANG_CONTROLS_EXECUTE: 'Fes',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executa codic C/C++. Utilitza-ho amb cura, perquè pot trencar fàcilment el programa i evitar que es compili.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condició es compleix, fa les accions dins del bloc.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condició es compleix, fa el primer bloc d\'ordres. Si no, fa el segon bloc d\'ordres.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es compleix, fa el primer bloc d\'ordres. Si no, si el segon valor es compleix, fa el segon bloc d\'ordres.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es compleix, fa el primer bloc d\'ordres. Si no, si el segon valor es compleix, fa el segon bloc d\'ordres. Si cap dels valors es compleix, fa l\'últim bloc d\'ordres',
        LANG_CONTROLS_IF_MSG_IF: 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'en canvi, si',
        LANG_CONTROLS_IF_MSG_ELSE: 'en cas contrari',
        LANG_CONTROLS_IF_MSG_THEN: 'fes',
        LANG_CONTROLS_IF_IF_Field_IF: 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Afegeix, elimina o reordena seccions per reconfigurar aquest bloc «si».',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en canvi, si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Afegeix a condició del bloc «si».',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'en cas contrari',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Afegeix una condició final al bloc "si" per capturar la resta d\'opcions.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'No és possible establir una variable com a valor inicial pel bloc «per».',
        LANG_CONTROLS_FOR_TO_WARNING: 'No és possible establir una variable com a valor final pel bloc «per».',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'No puedes asignar una variable al valor de incremento del for', //to translate
        LANG_CONTROLS_FOR_INPUT_WITH: 'compta amb',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'des de',
        LANG_CONTROLS_FOR_INPUT_TO: 'fins',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
        LANG_CONTROLS_FOR_INPUT_DO: 'fes',
        LANG_CONTROLS_FOR_TOOLTIP: 'Compta des d\'un nombre d\'inici fins un de final. Cada vegada que s\'incrementa en un el compte, la variable pren aquest valor i s\'executen les accions.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'fins',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentre la condició es compleixi, fa les instruccions.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentre la condició no es compleixi, fa les instruccions.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repeteix',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vegades',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'fes',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Executa les instruccions un nombre concret de vegades.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromp',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continua amb la següent iteració',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interromp el bucle que conté aquesta instrucció.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Se salta la resta d\'accions d\'aquesta iteració i continua amb la següent iteració.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenció: Aquest bloc només es pot utilitzar dins d\'un bucle.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Els blocs dins de «setup» els fa a l\'inici, i els blocs dins de «loop» es repetiran contínuament.',
        LANG_CONTROLS_SWITCH: 'si ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Fa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Fa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Fa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Fa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Aquest bloc compara d\'un en un si es compleixen els diferents casos.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloc «default» especifica l\'acció que es farà si no s\'ha complert cap dels casos anteriors.',
        LANG_CONTROLS_SWITCH_IS: 'és: ',
        LANG_CONTROLS_SWITCH_CASE: 'cas ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'en un altre cas',
        LANG_CONTROLS_SWITCH_DO: 'fes',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matemàtiques',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapeja ',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeja l\'entrada des d\'un rang de valors inicials a un altre rang diferent.',
        LANG_MATH_NUMBER_TOOLTIP: 'Nombre enter',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enters',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Retorna el valor d\'un element concret del vector.',
        LANG_MATH_MODULO_TOOLTIP: 'Retorna la resta de la divisió de les dues entrades.',
        LANG_MATH_BASE_MAP: 'Mapeja ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Mapeja l\'entrada des del rang [0-1023] a un altre rang de valors.',
        LANG_MATH_SINGLE_OP_ROOT: 'arrel quadrada',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absolut',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Retorna l\'arrel quadrada d\'un nombre.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Retorna el valor absolut d\'un nombre.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Retorna el nombre canviat de signe.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Retorna el logaritme neperià d\'un nombre.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Retorna el logaritme en base 10 d\'un nombre.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Retorna el exponencial d\'un nombre.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Retorna 10 elevat a una potència.',
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
        LANG_CATEGORY_TEXT: 'Text',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Una lletra, una paraula o una línia de text.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'crea text amb',
        LANG_TEXT_JOIN_TOOLTIP: 'Crea text ajuntant qualsevol nombre d\'elements.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'uneix',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Afegeix, elimina o reordena seccions per reconfigurar aquest bloc de text.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Afegeix un element al text.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'uneix',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'a',
        LANG_TEXT_APPEND_APPENDTEXT: 'afegeix-hi text',
        LANG_TEXT_APPEND_VARIABLE: 'element',
        LANG_TEXT_APPEND_TOOLTIP: 'Afegeix text a la variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
        LANG_TEXT_LENGTH_TOOLTIP: 'Retorna el nombre de lletres (incloent-hi els espais) en el text introduït.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si els dos textos introduïts són iguals, independentment que tinguin lletres majúscules o minúscules.',
        LANG_TEXT_SUBSTRING: 'Retalla ',
        LANG_TEXT_SUBSTRING_FROM: 'des de',
        LANG_TEXT_SUBSTRING_TO: 'fins',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Retalla els caràcters del text introduït que es trobin entre els dos índexs i crea amb ells un nou text.',
        LANG_TEXT_CHARAT: 'Character of text', //To translate
        LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
        LANG_TEXT_SPECIAL: 'Caràcters especials',
        LANG_TEXT_SPECIAL_TAB: 'Tabulador',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorn de carro',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Salt de línia',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Escriu caràcters especials.',
        LANG_TEXT_COMMENT: 'Comment', //to translate
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funcions PIN',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Converteix',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY: 'Binari',
        LANG_ADVANCED_CONVERSION_VALUE: 'valor',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Converteix la base d\'un nombre.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Llegeix el pin analògic PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Llegeix el valor d\'un pin analògic específic.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escriu en el pin analògic PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escriu un valor entre 0 i 255 en un PIN analògic específic.',
        LANG_ADVANCED_BUILTIN_LED: 'LED A LA PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'estat',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ENCÈS',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGAT',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrat a la placa que està internament connectat al PIN 13.',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Llegeix el pin digital PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Llegeix el valor des d\'un pin digital específic.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'el valor',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escriu en el pin digital',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estat',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALT',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIX',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escriu un valor al pin digital específic.',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALT',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAIX',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escriu "ALT" o "BAIX" en funció del seleccionat.',
        LANG_ADVANCED_MATH_RANDOM: 'Aleatori entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' I ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un nombre aleatori entre els dos límits introduïts.',
        LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
        LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funcions',
        LANG_PROCEDURES_RETURN: 'retorna',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Retorna un valor',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Crida a una funció sense definició prèvia.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sense_retorn',
        LANG_PROCEDURES_DEFNORETURN_DO: 'fes',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Funció que s\'executarà sense retornar res.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_amb_retorn',
        LANG_PROCEDURES_DEFRETURN_DO: 'fes',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'retorna',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funció amb valor de retorn.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenció: Aquesta funció té paràmetres duplicats.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'fes',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sense_retorn',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Fa aquesta funció.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'fes',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_amb_retorn',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa aquesta funció que té valor de retorn.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paràmetres',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subratlla la funció',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condició es compleix, la funció retornarà aquest valor.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Atenció: Aquest bloc només es pot utilitzar dins d\'una funció que tingui valor de retorn.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Aquesta variable no està declarada.',
        LANG_VARIABLES_GLOBAL: 'Variable',
        LANG_VARIABLES_GLOBAL_TYPE: 'de tipus',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara i defineix una variable GLOBAL de tipus enter (int) o text (String).',
        LANG_VARIABLES_LOCAL: 'Variable LOCAL',
        LANG_VARIABLES_LOCAL_TYPE: 'de tipus ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara i defineix una variable LOCAL de tipus enter (int) o text (String).',
        LANG_VARIABLES_DEFINE: 'Defineix variable ',
        LANG_VARIABLES_DEFINE_AS: 'com',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Defineix el valor d\'una variable.',
        LANG_VARIABLES_SET: 'Var ',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Canvia el valor d\'una variable.',
        LANG_VARIABLES_GET: 'Var ',
        LANG_VARIABLES_GET_TOOLTIP: 'Retorna el valor d\'una variable',
        LANG_VARIABLES_PIN_ANALOG: 'Pin analògic',
        LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
        LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: el pin digital 0 (pin RX) s\'utilitza quan es carrega un programa. Si s\'utilitza per connectar components electrònics pot causar problemes quan es carregui un nou programa.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN desitjat.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte',
        LANG_VARIABLES_TYPE_FLOAT: 'Coma flotant',
        LANG_VARIABLES_TYPE_INTEGER: 'Enter',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Enter llarg',
        LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
        LANG_VARIABLES_TYPE_STRING: 'Cadena',
        LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
        LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declara una variable GLOBAL VOLÀTIL ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'del tipus ',
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'igual ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declara i defineix una variable GLOBAL VOLÀTIL de tipus enter o cadena utilitzada en una funció ISR.',  // To translate
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Sons',
        LANG_ZUM_PIEZO_BUZZER: 'Brunzidor',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TO',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Durada',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Brunzidor piezoelèctric',
        LANG_ZUM_PIEZO_BUZZERAV: 'Brunzidor avançat',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TO',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durada',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Brunzidor piezoelèctric avançat.',
        LANG_ZUM_DHT11_VALUE: 'Get', //to translate
        LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
        LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
        LANG_ZUM_DHT11_PIN: 'PIN', //to translate
        LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Servo de rotació contínua',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRA EN SENTIT HORARI',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA EN SENTIT ANTIHORARI',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'ATURA',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa [ms]',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotació contínua.',
        LANG_MOTOR_SERVO_MOVE: 'Servo',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graus (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa [ms]',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mou el servo entre 0 i 180 graus.',
        LANG_MOTOR_SERVO_WARNING: 'No es possible establir el pin del servo utilitzant una variable',
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
        LANG_CATEGORY_INTERRUPTS: 'Interrupcions',
        LANG_INTERRUPTS_STATE: 'Estableix l\'estat de les interrupcions a ',
        LANG_INTERRUPTS_STATE_ENABLED: 'ACTIVADES',
        LANG_INTERRUPTS_STATE_DISABLED: 'DESACTIVADES',
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Activa o desactivar les interrupcions. Algunes funcions no funcionaran mentre les interrupcions estiguin desactivades. Utilitza-ho només per seccions del codi particularment crítiques.',
        LANG_INTERRUPTS_ATTACH: 'Associa la funció ',
        LANG_INTERRUPTS_ATTACH_PARAM2: 'en el mode ',
        LANG_INTERRUPTS_ATTACH_PARAM3: 'amb interrupció del pin digital',
        LANG_INTERRUPTS_ATTACH_LOW: 'BAIX',
        LANG_INTERRUPTS_ATTACH_CHANGE: 'CANVI',
        LANG_INTERRUPTS_ATTACH_RISING: 'PUJANT',
        LANG_INTERRUPTS_ATTACH_FALLING: 'BAIXANT',
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_sense_retorn',
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Estableix la funció que s\'executarà quan es produeix la interrupció en el pin especificat.',
        LANG_INTERRUPTS_DETACH: 'Desassocia la interrupció al pin digital',
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Desactiva la interrupció en el pin. Quan s\'activa el pin, la funció associada no s\'executarà més.',
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
        RoboBlocks.locales.add('ca-ES', language);
    }
}());
