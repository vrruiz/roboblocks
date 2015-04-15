'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
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
        LANG_VARIABLES_SET_ITEM: 'element',
        LANG_RESERVED_WORDS: 'Paraula reservada: aquest nom no està permès.',
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Lògica',
        LANG_LOGIC_OPERATION_AND: 'i',
        LANG_LOGIC_OPERATION_OR: 'o',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si les dues entrades són iguals.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si les dues entrades no són iguals entre si.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada és menor que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada és menor o igual que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada és més gran que la segona entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada és més gran o igual que la segona entrada.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si les dues entrades són verdaderes.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de les entrades són verdaderes.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Retorna el contrari de l\'entrada.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'verdader',
        LANG_LOGIC_BOOLEAN_FALSE: 'fals',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Retorna verdader o fals en funció del que hem seleccionat.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicació',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: rebre ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Retorna les dades rebudes pel mòdul Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar dades',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Pren les dades de l\'entrada i les envia usant el mòdul Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Taxa de bauds',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codi PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Rebre',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definició del mòdul Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Port Sèrie Disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el mòdul Bluetooth està disponible o no',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Port Sèrie Disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el port sèrie està disponible o no',
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimir per port sèrie',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprimeix les dades com text ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir per port sèrie amb salt de línia',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprimeix les dades com text ASCII i amb retorn de carro (RC).',
        LANG_ADVANCED_SERIAL_READ: 'Llegir des del port sèrie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Llegir text des del port sèrie',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a text ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Caràcters especials',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorn de carro',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salt de línia',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escriu caràcters especials.',
        //bq blocks :
        LANG_CATEGORY_BQ: 'Octopus bloqs',
        LANG_BQ_BAT: 'BAT - Sensor d\'Ultrasons',
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
        LANG_BQ_JOYSTICK: 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X: 'Eix X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Eix Y PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Posició Joystick',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Polsador PIN#',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN#',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'ENCENDRE',
        LANG_BQ_LED_OFF: 'APAGAR',
        LANG_BQ_LED_TOOLTIP: 'LED',
        LANG_BQ_PHOTORESISTOR: 'Sensor de Llum',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic mesurat per la fotorresistencia.',
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
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'TON',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Durada',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Brunzidor avançat',
        LANG_BQ_POTENTIOMETER: 'Potenciòmetre',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Retorna el valor analògic mesurat pel potenciòmetre',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD bloqs',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'Connecta el pin SCL al pin A5 i el pin SDA al pin A4',
        LANG_LCD_DEF_TOOLTIP: 'Defineix el LCD',
        LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
        LANG_LCD_ADVANCED_ROWS: 'Rows',
        LANG_LCD_ADVANCED_COLUMNS: 'Columns',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
        LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminació',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminació de la pantalla LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_POSITION: 'Fixar posició del text?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprimeix un string a la pantalla LCD en la posició especificada o en la següent disponible.',
        LANG_LCD_CLEAR: 'LCD esborrar',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Esborrar',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Control',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el temps especificat en mil·lisegons (ms)',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condició és verdadera, executa les accions dins del bloc.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condició és verdadera, s\'executa el primer bloc d\'ordres. Si no ho és, s\'executa el segon bloc d\'ordres.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor és verdader, s\'executa el primer bloc d\'ordres. Sinó, si el segon valor és verdader, s\'executa el segon bloc d\'ordres.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor és verdader, s\'executa el primer bloc d\'ordres. Sinó, si el segon valor és verdader, s\'executa el segon bloc d\'ordres. Si cap dels valors és verdader, s\'executa l\'últim bloc d\'ordres',
        LANG_CONTROLS_IF_MSG_IF: 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'en canvi, si',
        LANG_CONTROLS_IF_MSG_ELSE: 'en cas contrari',
        LANG_CONTROLS_IF_MSG_THEN: 'executar',
        LANG_CONTROLS_IF_IF_Field_IF: 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Afegir, eliminar o reordenar seccions per reconfigurar aquest bloc "si".',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en canvi, si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Afegeix a condició del bloc "si".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'en cas contrari',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Afegeix una condició final al bloc "si" per a capturar la resta d\'opcions.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
        LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'comptar amb',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'des de',
        LANG_CONTROLS_FOR_INPUT_TO: 'fins',
        LANG_CONTROLS_FOR_INPUT_DO: 'executar',
        LANG_CONTROLS_FOR_TOOLTIP: 'Comptar des d\'un nombre d\'inici fins un de final. Cada vegada que s\'incrementa en un el compte, la variable pren aquest valor i s\'executen les accions.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'fins',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentre la condició sigui verdadera, executar les instruccions.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentre la condició sigui falsa, executar les instruccions.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vegades',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Executar les instruccions un nombre concret de vegades.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompre',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar amb la següent iteració',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrompre el bucle que conté aquesta instrucció.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar-se la resta d\'accions d\'aquesta iteració i continuar amb la següent iteració.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenció: Aquest bloc només pot ser usat dins d\'un bucle.',
        LANG_CONTROLS_SWITCH: 'si ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Executa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Executa les accions del cas que es compleixi.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Executa les accions del cas que es compleixi',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Executa les accions del cas que es compleixi',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Aquest bloc compara d\'un en un si es compleixen els diferents casos.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloc "default" especifica l\'acció que es va a executar si no s\'han complert cap dels casos anteriors.',
        LANG_CONTROLS_SWITCH_IS: 'és: ',
        LANG_CONTROLS_SWITCH_CASE: 'cas ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'en un altre cas',
        LANG_CONTROLS_SWITCH_DO: 'executar',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matemàtiques',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapejar ',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeja l\'entrada des d\'un rang de valors inicials a un altre rang diferent.',
        LANG_MATH_NUMBER_TOOLTIP: 'Nombre sencer',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enters',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Retorna el valor d\'un element concret del vector.',
        LANG_MATH_MODULO_TOOLTIP: 'Retorna la resta de la divisió de les dues entrades.',
        LANG_MATH_BASE_MAP: 'Mapejar ',
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
        LANG_TEXT_JOIN_Field_CREATEWITH: 'crear text amb',
        LANG_TEXT_JOIN_TOOLTIP: 'Crea text ajuntant qualsevol nombre d\'elements.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Afegir, eliminar o reordenar seccions per a reconfigurar aquest bloc de text.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Afegir un element al text.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'a',
        LANG_TEXT_APPEND_APPENDTEXT: 'afegir-hi text',
        LANG_TEXT_APPEND_VARIABLE: 'element',
        LANG_TEXT_APPEND_TOOLTIP: 'Afegir text a la variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
        LANG_TEXT_LENGTH_TOOLTIP: 'Retorna el nombre de lletres (incloent-hi els espais) en el text introduït.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si els dos textos introduïts són iguals, independentment que tinguin lletres majúscules o minúscules.',
        LANG_TEXT_SUBSTRING: 'Retallar ',
        LANG_TEXT_SUBSTRING_FROM: 'des de',
        LANG_TEXT_SUBSTRING_TO: 'fins',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Retalla els caràcters del text introduït que es trobin entre els dos índexs i crea amb ells un nou text.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funcions PIN',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY: 'Binari',
        LANG_ADVANCED_CONVERSION_VALUE: 'valor',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base d\'un nombre.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Llegir el pin analògic PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Llegeix el valor d\'un pin analògic específic.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escriure en el pin analògic PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escriu un valor entre 0 i 255 en un PIN analògic específic.',
        LANG_ADVANCED_BUILTIN_LED: 'LED A LA PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'estat',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ENCÈS',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGAT',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrat a la placa que està internament connectat al PIN 13.',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Llegir el pin digital PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Llegeix el valor des d\'un pin digital específic.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escriure en el pin digital',
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
        LANG_PROCEDURES_RETURN: 'return',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Returns a value',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Crida a una funció sense definició prèvia.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sin_retorno',
        LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Funció que s\'executarà sense retornar res.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_con_retorno',
        LANG_PROCEDURES_DEFRETURN_DO: 'executar',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'retorna',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funció amb valor de retorn.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenció: Aquesta funció té paràmetres duplicats.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sin_retorno',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Executa aquesta funció.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_con_retorno',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa aquesta funció que té valor de retorn.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paràmetres',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subratlla la funció',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condició és verdadera, la funció retornarà aquest valor.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Atenció: Aquest bloc només pot ser usat dins d\'una funció que tingui valor de retorn.',
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
        LANG_VARIABLES_DEFINE: 'Definir variable ',
        LANG_VARIABLES_DEFINE_AS: 'com',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor d\'una variable.',
        LANG_VARIABLES_SET: 'Var ',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Canvia el valor d\'una variable.',
        LANG_VARIABLES_GET: 'Var ',
        LANG_VARIABLES_GET_TOOLTIP: 'Retorna el valor d\'una variable',
        LANG_VARIABLES_PIN_ANALOG: 'Pin analògic',
        LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
        LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN desitjat.',
        //zum blocks :
        LANG_CATEGORY_ZUM: 'Zum bloqs',
        LANG_ZUM_BUTTON: 'Botó',
        LANG_ZUM_BUTTON_PIN: 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Botó zum',
        LANG_ZUM_FOLLOWER: 'Sensor infraroig',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DERECHA#',
        LANG_ZUM_FOLLOWER_LEFT: 'Esquerra',
        LANG_ZUM_FOLLOWER_RIGHT: 'Dreta',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
        LANG_ZUM_INFRARED: 'Sensor infraroig',
        LANG_ZUM_INFRARED_PIN: 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'PIN#',
        LANG_ZUM_LED_ON: 'ENCENDRE',
        LANG_ZUM_LED_OFF: 'APAGAR',
        LANG_ZUM_LED_TOOLTIP: 'LED zum',
        LANG_ZUM_PHOTORESISTOR: 'Sensor de LLum',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic del sensor de llum fotorresistència).',
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
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIT HORARIO',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIT ANTIHORARI',
        LANG_SERVO_CONT_STOPPED: 'ATURAR',
        LANG_SERVO_CONT_DELAY: 'Pausa',
        LANG_SERVO_CONT_TOOLTIP: 'Servo de rotació contínua.',
        LANG_SERVO_MOVE: 'Servo',
        LANG_SERVO_MOVE_PIN: 'PIN#',
        LANG_SERVO_MOVE_DEGREES: 'Graus (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Pausa',
        LANG_SERVO_MOVE_TOOLTIP: 'Moure el servo entre 0 i 180 graus.',
        LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'
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
