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
        LANG_ADVANCED_SERIAL_READ: 'Llegeix des del port sèrie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Llegeix text des del port sèrie',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a text ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Caràcters especials',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorn de carro',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salt de línia',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escriu caràcters especials.',
        //bq blocks :
        LANG_CATEGORY_BQ: 'Blocs Octopus',
        LANG_BQ_BAT: 'BAT - Sensor d\'ultrasons',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Retorna la distància mesurada pel sensor.',
        LANG_BQ_BUTTON: 'Botó',
        LANG_BQ_BUTTON_PIN: 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP: 'Botó',
        LANG_BQ_BUTTONS: 'Botonera',
        LANG_BQ_BUTTONS_PIN: 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A: 'Botó #A',
        LANG_BQ_BUTTONS_BUTTON_B: 'Botó #B',
        LANG_BQ_BUTTONS_BUTTON_C: 'Botó #C',
        LANG_BQ_BUTTONS_BUTTON_D: 'Botó #D',
        LANG_BQ_BUTTONS_BUTTON_E: 'Botó #E',
        LANG_BQ_BUTTONS_TOOLTIP: 'Botonera',
        LANG_BQ_INFRARED: 'Sensor infraroig',
        LANG_BQ_INFRARED_PIN: 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP: 'Retorna el valor digital mesurat pel sensor infraroig',
        LANG_BQ_JOYSTICK: 'Palanca de control',
        LANG_BQ_JOYSTICK_PIN_X: 'Eix X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Eix Y PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Posició de la palanca de control',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Polsador PIN#',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Palanca de control',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN#',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'ENCÉN',
        LANG_BQ_LED_OFF: 'APAGA',
        LANG_BQ_LED_TOOLTIP: 'LED',
        LANG_BQ_PHOTORESISTOR: 'Sensor de llum',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic mesurat per la fotorresistència.',
        LANG_BQ_PIEZO_BUZZER: 'Brunzidor',
        LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE: 'TO',
        LANG_BQ_PIEZO_BUZZER_DO: 'DO',
        LANG_BQ_PIEZO_BUZZER_RE: 'RE',
        LANG_BQ_PIEZO_BUZZER_MI: 'MI',
        LANG_BQ_PIEZO_BUZZER_FA: 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA: 'LA',
        LANG_BQ_PIEZO_BUZZER_SI: 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Durada',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Brunzidor Piezoelèctric',
        LANG_BQ_PIEZO_BUZZERAV: 'Brunzidor avançat',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'TO',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Durada',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Brunzidor avançat',
        LANG_BQ_POTENTIOMETER: 'Potenciòmetre',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Retorna el valor analògic mesurat pel potenciòmetre',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'Blocs de la LCD',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'Pins de la LCD',
        LANG_LCD_DEF_TOOLTIP: 'Defineix la LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avançada',
        LANG_LCD_ADVANCED_ROWS: 'Files',
        LANG_LCD_ADVANCED_COLUMNS: 'Columnes',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc que defineix la LCD avançada',
        LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminació',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminació de la LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_POSITION: 'Vols fifxar la posició del text?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprimeix una cadena a la LCD en la posició especificada o en la següent disponible.',
        LANG_LCD_CLEAR: 'Esborra la LCD',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Esborra',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Control',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Espera (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el temps especificat en mil·lisegons (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Temps des de l\'inici (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de mil·lisegons des que el programa s\'ha iniciat (enter llarg)',
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
        LANG_CONTROLS_FOR_INPUT_WITH: 'compta amb',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'des de',
        LANG_CONTROLS_FOR_INPUT_TO: 'fins',
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
        //text blocks:
        LANG_CATEGORY_TEXT: 'Text',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Una lletra, una paraula o una línia de text.',
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
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALT',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAIX',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escriu "ALT" o "BAIX" en funció del seleccionat.',
        LANG_ADVANCED_MATH_RANDOM: 'Aleatori entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' I ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un nombre aleatori entre els dos límits introduïts.',
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
        LANG_VARIABLES_TYPE_STRING: 'Cadena',
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declara una variable GLOBAL VOLÀTIL ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'del tipus ',
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'igual ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declara i defineix una variable GLOBAL VOLÀTIL de tipus enter o cadena utilitzada en una funció ISR.',  // To translate
        //zum blocks :
        LANG_CATEGORY_ZUM: 'Blocs Zum',
        LANG_ZUM_BUTTON: 'Botó',
        LANG_ZUM_BUTTON_PIN: 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Botó zum',
        LANG_ZUM_FOLLOWER: 'Sensor infraroig',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN ESQUERRA#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DRETA#',
        LANG_ZUM_FOLLOWER_LEFT: 'Esquerra',
        LANG_ZUM_FOLLOWER_RIGHT: 'Dreta',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
        LANG_ZUM_INFRARED: 'Sensor infraroig',
        LANG_ZUM_INFRARED_PIN: 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'PIN#',
        LANG_ZUM_LED_ON: 'ENCÉN',
        LANG_ZUM_LED_OFF: 'APAGA',
        LANG_ZUM_LED_TOOLTIP: 'LED zum',
        LANG_ZUM_PHOTORESISTOR: 'Sensor de llum',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic del sensor de llum (fotorresistència).',
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
        LANG_ZUM_POTENTIOMETER: 'Potenciòmetre',
        LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciòmetre zum.',
        //servo blocks :
        LANG_CATEGORY_SERVO: 'Servo',
        LANG_SERVO_CONT: 'Servo de rotació contínua',
        LANG_SERVO_CONT_PIN: 'PIN#',
        LANG_SERVO_CONT_ROT: 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRA EN SENTIT HORARI',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA EN SENTIT ANTIHORARI',
        LANG_SERVO_CONT_STOPPED: 'ATURA',
        LANG_SERVO_CONT_DELAY: 'Pausa [ms]',
        LANG_SERVO_CONT_TOOLTIP: 'Servo de rotació contínua.',
        LANG_SERVO_MOVE: 'Servo',
        LANG_SERVO_MOVE_PIN: 'PIN#',
        LANG_SERVO_MOVE_DEGREES: 'Graus (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Pausa [ms]',
        LANG_SERVO_MOVE_TOOLTIP: 'Mou el servo entre 0 i 180 graus.',
        LANG_SERVO_WARNING: 'No es possible establir el pin del servo utilitzant una variable',
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
        		LANG_CATEGORY_EVOLUTION: 'Evolució',
		LANG_EVOLUTION_HOME: 'Inici',
		LANG_EVOLUTION_HOME_TOOLTIP: 'Posa variables de Evolució a zero',
		LANG_EVOLUTION_STOP: 'Detenir',
    	LANG_EVOLUTION_STOP_TOOLTIP: 'Atura el robot Evolució',				
		LANG_EVOLUTION_TURNHEAD: 'Mira cap a',
		LANG_EVOLUTION_TURNHEAD_ROT: 'ROT', // Realment funciona igual que ROT
		LANG_EVOLUTION_TURNHEAD_TOOLTIP: 'Mou el cap cap al costat que indiques',
		LANG_EVOLUTION_MOVE: 'Moure cap a ',				
		LANG_EVOLUTION_FORDWARD: 'Moure cap a endavant',
		LANG_EVOLUTION_FORDWARD_SPEED:'Velocitat',
		LANG_EVOLUTION_RIGHT:    'DRETA',
		LANG_EVOLUTION_RIGHT_SPEED: 'Velocitat',
		LANG_EVOLUTION_RIGHT_TOOLTIP: 'Gira cap a la dreta amb aquesta velocitat',				
		LANG_EVOLUTION_LEFT:     'ESQUERRA',
		LANG_EVOLUTION_LEFT_SPEED: 'Velocitat',
		LANG_EVOLUTION_LEFT_TOOLTIP: 'Gira cap a l\'esquerra amb aquesta velocitat',
		LANG_EVOLUTION_FRONT:'ENDAVANT',
		LANG_EVOLUTION_BACK:'ARRERE',				
		LANG_EVOLUTION_DELAY:'Durant (ms):',				
		LANG_EVOLUTION_GET_DISTANCE: 'Distància',
		LANG_EVOLUTION_GET_DISTANCE_TOOLTIP: 'Obté la distància a l\'obstacle',
		LANG_EVOLUTION_GET_LINE: 'Hi ha línia',
		LANG_EVOLUTION_GET_LINE_SIDE: 'Costat',
		LANG_EVOLUTION_GET_LINE_TOOLTIP: 'Indica si hi ha Indica si hi ha línia en el costat indicat en el costat indicat',
		LANG_EVOLUTION_GET_LINE_COLOR:'de color',
		LANG_EVOLUTION_COLOR_WHITE:'BLANC',
		LANG_EVOLUTION_COLOR_BLACK:'NEGRE',
		LANG_EVOLUTION_GET_LIGHT: 'Hi ha llum',
		LANG_EVOLUTION_GET_LIGHT_INTENSITY:'amb intensitat',
		LANG_EVOLUTION_GET_LIGHT_SIDE: 'Costat',
		LANG_EVOLUTION_GET_LIGHT_TOOLTIP: 'Indica si hi ha llum en el costat especificat',
		LANG_EVOLUTION_GET_LIGHT_HIGH:'MOLTA',
		LANG_EVOLUTION_GET_LIGHT_MEDIUM:'MITJA',
		LANG_EVOLUTION_GET_LIGHT_LOW:'POCA',				
        LANG_EVOLUTION_SPEED:'amb velocitat',
        LANG_EVOLUTION_SPEED_FAST:'RÀPIDA',
        LANG_EVOLUTION_SPEED_MEDIUM:'MITJA',
        LANG_EVOLUTION_SPEED_LOW:'LENTA',
        LANG_EVOLUTION_HEAD_RIGHT:'DRETA',
        LANG_EVOLUTION_HEAD_LEFT:'ESQUERRA',
        LANG_EVOLUTION_HEAD_CENTER:'CENTRE',
        LANG_EVOLUTION_HEAD_STATE:'Mou el cap cap a	:',
        LANG_EVOLUTION_BUZZER_DURATION: 'Duració [ms]',
        LANG_EVOLUTION_BUZZER_SILENCE: 'Silenci [ms]',
		
		//escornabot blocks
		LANG_CATEGORY_ESCORNABOT: 'Escornabot',
		LANG_ESCORNABOT_SPEED:'Velocitat',
		LANG_ESCORNABOT_TURNS:'Voltes',
		LANG_ESCORNABOT_TURNS_LEFT:'Gira esquerra',
		LANG_ESCORNABOT_TURNS_RIGHT:'Gira dreta',
		LANG_ESCORNABOT_DRIVE_FORD:'Avanza',
		LANG_ESCORNABOT_DRIVE_BACK:'Retrocedeix',
		LANG_ESCORNABOT_DRIVE_TOOLTIP:'Mou l\'Escornabot avant o arrere',
		LANG_ESCORNABOT_HOME: 'Inici',
		LANG_ESCORNABOT_HOME_TOOLTIP:'Inicia l\'Escornabot',
		LANG_ESCORNABOT_STOP:'Aturar',
		LANG_ESCORNABOT_STOP_TOOLTIP:'Atura l\'Escornabot',
		LANG_ESCORNABOT_TURN_TOOLTIP:'Gira l\'Escornabot a dreta o esquerra',
		LANG_ESCORNABOT_LED_ON:'Encén el led',
		LANG_ESCORNABOT_LED_OFF:'Apaga el led',
		LANG_ESCORNABOT_LED_TOOLTIP:'Encén o apaga el led indicat',
		LANG_ESCORNABOT_BUZZER_OFF: 'Silenci',
		LANG_ESCORNABOT_BUZZER_ON: 'Xiular',
		
        LANG_CATEGORY_MFS:'Multi-function Shield',
        LANG_MFS_GET_POTENTIOMETER:'Potenciometro',
        LANG_MFS_GET_POTENTIOMETER_TOOLTIP:'Lee el valor del potenciometro',
        LANG_MFS_HOME:'Iniciar',
        LANG_MFS_HOME_TOOLTIP: 'Inicia la Multi-function Shield',
        LANG_MFS_WRITELED:'LED',
        LANG_MFS_ACTION:'Acción',
        LANG_MFS_WRITELED_TOOLTIP:'Enciende o apaga el led indicado',
        LANG_MFS_ON:'ENCENDIDO',
        LANG_MFS_OFF:'APAGADO',
        LANG_MFS_BLINKLED:'Parpadear',
        LANG_MFS_BLINKLED_TOOLTIP:'Hace que parpadee el led seleccionado',
        LANG_MFS_LED_ALL:'TODOS',
        LANG_MFS_WRITE:'Escribir LCD',
        LANG_MFS_TEXT:'',
        LANG_MFS_WRITE_TOOLTIP:'Escribe el texto en el digito led',
        LANG_MFS_BEEP: 'Zumbador',
        LANG_MFS_BEEP_DURATION: 'Duración [ms]',
        LANG_MFS_BEEP_SILENCE: 'Silencio [ms]',
        LANG_MFS_BEEP_REPEAT: 'Repetir lo anterior [ms]',
        LANG_MFS_BEEP_LOOP: 'Repetir todo [ms]',
        LANG_MFS_BEEP_WAIT: 'Silencio entre repeticiones [ms]',
        LANG_MFS_BEEP_TOOLTIP: 'Emite un pitido',
        LANG_MFS_BUTTONS: 'Botonera',
        LANG_MFS_BUTTON: 'Boton',
        LANG_MFS_BUTTONS_BUTTON: 'Acciones',
        LANG_MFS_BUTTONS_BUTTON_DO: 'haz',
        LANG_MFS_BUTTONS_TOOLTIP: 'Botonera',
        LANG_MFS_IF_BUTTONS:'Si',
        LANG_MFS_BUTTONS_DO:'haz',
        LANG_MFS_BUTTONS_IS:'esta',
        LANG_MFS_BUTTON1:'boton S1',
        LANG_MFS_BUTTON2:'boton S2',
        LANG_MFS_BUTTON3:'boton S3',
        LANG_MFS_PRESS: 'PULSADO',
        LANG_MFS_RELEASE: 'SOLTADO',
        LANG_MFS_LPRESS: 'PULSADO LARGO',
        LANG_MFS_LRELEASE: 'SOLTADO LARGO',
        LANG_MFS_SONAR: 'HC SR04 Sonar',
        LANG_MFS_RADAR_STRONG:'Filtro fuerte',
        LANG_MFS_RADAR_MODERATE:'Filto moderado',
        LANG_MFS_RADAR_NONE:'Sin filtro',
        LANG_MFS_RADAR_MODE:'Modo',
        LANG_MFS_RADAR_TOOLTIP:'Mide la distancia con el sensor de ultrasonidos',
        LANG_MFS_TEMP:'Temperatura',
        LANG_MFS_TEMP_TOOLTIP:'Mide la temperatura',
        LANG_MFS_PULSECOUNTER:'Contador',
        LANG_MFS_PULSECOUNTER_TRIGGER:'Flanco',
        LANG_MFS_PULSE_UP:'Subida',
        LANG_MFS_PULSE_DOWN:'Bajada',
        LANG_MFS_PULSECOUNTER_WAIT:'Espera [ms]',


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
