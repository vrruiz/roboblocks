'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Bikoiztu',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Iruzkina Ezabatu',
        BLOCKLY_MSG_ADD_COMMENT: 'Iruzkina Gehitu',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Kanpoko Sarrerak',
        BLOCKLY_MSG_INLINE_INPUTS: 'Barruko Sarrerak',
        BLOCKLY_MSG_DELETE_BLOCK: 'Blokea Ezabatu',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Ezabatu %1 bloke',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Blokea Tolestu',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Blokea Zabaldu',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Ezgaitu Blokea',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Gaitu Blokea',
        BLOCKLY_MSG_HELP: 'Laguntza',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Blokeak Tolestu',
        BLOCKLY_MSG_EXPAND_ALL: 'Blokeak Zabaldu',
        LANG_VARIABLES_SET_ITEM: 'elementu',
        LANG_RESERVED_WORDS: 'Erreserbatutako hitza: izen hau ez dago baimenduta..',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Logika',
        LANG_LOGIC_OPERATION_AND: 'eta',
        LANG_LOGIC_OPERATION_OR: 'edo',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Bi sarrerak berdinak diren alderatzen du.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Bi sarrera elkaren artean desberdinak diren alderatzen du.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Lehenengo sarrera bigarrena baino txikiagoa den alderatzen du.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Lehenengo sarrera bigarrena baino txikiagoa edo berdina den alderatzen du.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Lehenengo sarrera bigarrena baino handiagoa den alderatzen du.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Lehenengo sarrera bigarrena baino handiagoa edo berdina den alderatzen du.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Bi sarrerak egiazkoak diren alderatzen du.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Sarreretako baten bat egiazkoa den alderatzen du.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'ez',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Sarreraren kontrakoa bueltatzen du.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'Egiazkoa',
        LANG_LOGIC_BOOLEAN_FALSE: 'faltsua',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Egiazkoa edo faltsua bueltatzen du aukeratutakoaren arabera.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Komunikazioa',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: Jaso ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Bluetooth moduluak jasotako datuak bueltatzen ditu.',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Bidali',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Datuak bidali',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Sarreratik datuak hartu eta bluetooth modulua erabiliz bidaltzen ditu',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baudio-tasa',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Izena',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PIN kodea',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Jaso',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Bidali',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Bluetooth moduluaren definizioa',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Serieko Ataka erabilgarri',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Bluetooth modulua erabilgarri dagoen edo ez egiaztatu',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Serieko Ataka Erabilgarri',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Serieko Ataka erabilgarri dagoen edo ez egiaztatu',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Serieko Atakatik inprimatu',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Datuak ASCII testu bezala inprimatu.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Serieko Atakatik inprimatu lerro-jauziarekin',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Serieko Atakatik inprimatu lerro-jauziarekin eta orga-itzulerarekin.',
        LANG_ADVANCED_SERIAL_READ: 'Serieko Atakatik irakurri',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Serieko Atakatik jasotzen diren datuak ASCII testu bezala irakurtzen ditu.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Serieko Atakatik irakurri',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Serieko Atakatik jasotzen diren datuak ASCII testu bezala irakurtzen ditu.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Karaktere bereziak',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabuladorea',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Orga-itzulera',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Lerro-jauzia',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Karaktere bereziak idatzi.',
        //Sensor blocks:
        LANG_CATEGORY_SENSOR: 'Sentsore',
        LANG_BQ_BAT: 'BAT - Ultrasoinuen sentsorea',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Sentsoreak neurtutako distantzia bueltatzen du.',
        LANG_IR_READ: 'Reads from infrared receiver', //to translate
        LANG_IR_READ_PIN: 'connected to PIN#', //to translate
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD blokeak',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'LCD Pins',
        LANG_LCD_DEF_TOOLTIP: 'LCDa definitu',
        LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
        LANG_LCD_ADVANCED_ROWS: 'Rows',
        LANG_LCD_ADVANCED_COLUMNS: 'Columns',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
        LANG_LCD_SETBACKLIGHT: 'LCD: atzeko iluminazioa doitu',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'LCD pantailaren atzeko iluminazioa doitu',
        LANG_LCD_PRINT: 'LCD: Inprimatu ',
        LANG_LCD_PRINT_POSITION: 'Testuaren posizioa finkatu?',
        LANG_LCD_PRINT_TOOLTIP: 'String bat zehaztutako posizioan edo erabilgarri dagoen hurrengoan inprimatzen du LCD pantailan.',
        LANG_LCD_CLEAR: 'LCD ezabatu',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Ezabatu',
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
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Kontrola',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Itxaron [ms]',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Milisgundotan (ms) zehaztutako denbora itxaroten du',
        LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
        LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
        LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
        LANG_CONTROLS_EXECUTE: 'Execute',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Baldintza egiazkoa bada, bloke barruan dauden ekintzak exekutatzen ditu.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Baldintza egiazkoa bada, komandoen lehenengo blokea exekutatzen da. Bestela, bigarren komando blokea exekutatzen da.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Lehenengo balioa egiazkoa bada, lehenengo komando blokea exekutatzen da. Bestela, bigarren balioa egizkoa bada, bigarren komando blokea exekutatzen da.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Lehenengo balioa egiazkoa bada, lehenengo komando blokea exekutatzen da. Bestela, bigarren balioa egizkoa bada, bigarren komando blokea exekutatzen da. Bietatik bat ere ez bada egiazkoa, komandoen azkeneko blokea exekutatzen da.',
        LANG_CONTROLS_IF_MSG_IF: 'Baldin',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'aldiz, baldin',
        LANG_CONTROLS_IF_MSG_ELSE: 'bestela',
        LANG_CONTROLS_IF_MSG_THEN: 'exekutatu',
        LANG_CONTROLS_IF_IF_Field_IF: 'baldin',
        LANG_CONTROLS_IF_IF_TOOLTIP: '"baldin" bloke hau berrezartzeko atalak gehitu, ezabatu edo berrantolatu.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'aldiz, baldin',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: '"baldin" blokeari baldintza bat gehitu.',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'bestela',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Gehitu azken baldintza bat "baldin" blokeari gainontzeko aukerak atzitzeko.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'Zenbatu honekin:',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'hemendik',
        LANG_CONTROLS_FOR_INPUT_TO: 'honaino',
        LANG_CONTROLS_FOR_INPUT_DO: 'exekutatu',
        LANG_CONTROLS_FOR_TOOLTIP: 'Hasierako zenbaki batetik amaierako zenbaki baterarte zenbatu. Kontua batean handitzen den bakoitzean, aldagaiak balio hori hartu eta akzioak exekutatzen dira.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'bitartean',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'honaino',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Baldintza egiazkoa den bitartean, aginduak exekutatu.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Baldintza faltsua den bitartean, aginduak exekutatu.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Errepikatu',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'aldiz',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'exekutatu',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Aginduak exekutatu aldi kopuru jakin bat.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'buklea',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'eten',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'hurrengo iterazioarekin jarraitu',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Agindu hau duen buklea eten.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Iterazio honetako aginduak saltatu eta hurrengo iterazioarekin jarraitu.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Adi: bloke hau bukle baten barruan soilik erabil daiteke.',
        LANG_CONTROLS_SWITCH: 'Aldatu ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Betetzen den kasuaren ekintzak exekutatu.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Betetzen den kasuaren ekintzak exekutatu.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Betetzen den kasuaren ekintzak exekutatu.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Betetzen den kasuaren ekintzak exekutatu.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Kasu desberdinak betetzen diren banan-bana alderatzen ditu bloke honek.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'kasu ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: '"default" blokeak aurreko kasuetatik bat ere ez bada bete exekutatu behar den ekintza zehazten du.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH_IS: 'kasua: ',
        LANG_CONTROLS_SWITCH_CASE: 'kasua ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'default',
        LANG_CONTROLS_SWITCH_DO: 'exekutatu',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matematika',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapeatu ',
        LANG_MATH_ADVANCED_MAP_FROM: 'Hemendik [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'honaino [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Hasierako balio tarte batetik tarte desberdin baterainoko sarrerak mapeatu ',
        LANG_MATH_NUMBER_TOOLTIP: 'Zenbaki osoa',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Hiru zenbaki osoko bektorea',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Bektorearen elementu jakin baten balioa bueltatzen du.',
        LANG_MATH_MODULO_TOOLTIP: 'Bi sarreren zatiduraren hondarra bueltatzen du.',
        LANG_MATH_BASE_MAP: 'Mapeatu ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Hauen arteko balioa [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: '[0-1023] tartetik beste balio tarte batera mapeatzen du sarrera.',
        LANG_MATH_SINGLE_OP_ROOT: 'erro karratua',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'balio absolutua',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Zenbaki baten erodura karratuaren balioa bueltatzen du.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Zenbaki baten balio absolutua bueltatzen du.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Zeinuz aldatutako zenbakia bueltatzen du.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Zenbaki baten logaritmo nepertarra bueltatzen du.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Zenbaki baten 10eko oinarriko logaritmoa bueltatzen du. ',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Zenbaki baten berredura bueltatzen du.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: '10eko berredura bueltatzen du.',
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
        LANG_CATEGORY_TEXT: 'Testua',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Hizki bat, hitz bat edo testu lerro bat.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'testua sortu honekin:',
        LANG_TEXT_JOIN_TOOLTIP: 'Sortu testua edozein elementu kopuru elkartuz.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'elkartu',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Testu bloke hau berrezartzeko atalak gehitu, ezabatu edo berrantolatu.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elementu',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Testuari elementu bat gehitu.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'elkartu',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elementu',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'honi',
        LANG_TEXT_APPEND_APPENDTEXT: 'testua gehitu',
        LANG_TEXT_APPEND_VARIABLE: 'elementu',
        LANG_TEXT_APPEND_TOOLTIP: '%1 aldagaiari testua gehitu.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'luzera',
        LANG_TEXT_LENGTH_TOOLTIP: 'Txertatutako testuan hizki kopurua (hutsuneak barne) bueltatzen ditu.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Txertatutako testu biak berdinak diren alderatzen du, hizki larriak edo xeheak diren kontutan hartu gabe.',
        LANG_TEXT_SUBSTRING: 'Moztu ',
        LANG_TEXT_SUBSTRING_FROM: 'hemendik',
        LANG_TEXT_SUBSTRING_TO: 'honaino',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Bi indizeen artean agertzen diren testu karaktereak mozten ditu eta testu berri bat sortzen du beraiekin.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'PIN Funtzioak',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Bihurtu',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Hamartarra',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hamaseitarra',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Zortzitarra',
        LANG_ADVANCED_CONVERSION_BINARY: 'Bitarra',
        LANG_ADVANCED_CONVERSION_VALUE: 'balioa',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Zenbaki baten oinarria bihurtu.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'PIN# pin analogikoa irakurri',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Dagokion pin analogiko baten balioa irakurtzen du.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'PIN digitalean idatzi',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'balio analogikoa',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: '0 y 255 bitarteko balio bat idatzi dagokion PIN analogikoan.',
        LANG_ADVANCED_BUILTIN_LED: 'LED PLAKAN',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'egoera',
        LANG_ADVANCED_BUILTIN_LED_ON: 'PIZTUTA',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'ITZALITA',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'PIN 13ari barrutik konektaturik dagoen plakako LEDa.',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'PIN# digitala irakurri',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Dagokion pin digitalaren balioa irakurtzen du.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Pin digitalean idatzi',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'balioa',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'egoera',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTUA',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAXUA',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Dagokion pin digitalean balio bat idatzi.',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALTUA',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAXUA',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Hautatutakoaren arabera idatzi "ALTUA" o "BAXUA".',
        LANG_ADVANCED_MATH_RANDOM: 'Ausaz hauen artean',
        LANG_ADVANCED_MATH_RANDOM_AND: ' eta ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Zehaztutako bi mugen artean ausazko zenbaki bat sortzen du.',
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funtzioak',
        LANG_PROCEDURES_RETURN: 'itzuli',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Balio bat itzultzen du',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Aurretik zehaztu gabeko funtzio bati deia.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'itzulerarik_gabeko_funtzioa',
        LANG_PROCEDURES_DEFNORETURN_DO: 'exekutatu',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Ezer ez egin gabe exekutatuko den funtzioa.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'itzulera_duen_funtzioa',
        LANG_PROCEDURES_DEFRETURN_DO: 'exekutatu',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'bueltatu',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Itzulera balioa duen funtzioa.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Adi: funtzio honek bikoiztutako parametroak ditu.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'exekutatu',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'itzulerarik_gabeko_funtzioa',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Funtzio hau exekutatu.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'exekutatu',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'itzulera_duen_funtzioa',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Itzulera balioa duen funtzio hau exekutatu.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametroak',
        LANG_PROCEDURES_MUTATORARG_Field: 'aldagaia:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Funtzioa azpimarratu',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Funtzioa egiazkoa bada, funtzioak balio hau bueltatuko du.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Adi: bloke hau itzulera balioa duen funtzio baten barruan soilik erabil daiteke.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Aldagaiak',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'aitortu gabeko aldagaia.',
        LANG_VARIABLES_GLOBAL: 'Aldagai GLOBALA aitortu',
        LANG_VARIABLES_GLOBAL_TYPE: 'motatakoa ',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Testu (String) edo osoa (int) motako aldagai GLOBALA definitu eta aitortu.',
        LANG_VARIABLES_LOCAL: 'Aldagaia aitortu',
        LANG_VARIABLES_LOCAL_TYPE: 'motatakoa ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Testu (String) edo osoa (int) motako aldagai LOKALA definitu eta aitortu.',
        LANG_VARIABLES_DEFINE: 'Aldagaia definitu ',
        LANG_VARIABLES_DEFINE_AS: 'honela',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Aldagai baten balioa definitu.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Aldagai baten balioa aldatu.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Aldagai baten balioa bueltatu',
        LANG_VARIABLES_PIN_ANALOG: 'Pin analogikoa',
        LANG_VARIABLES_PIN_DIGITAL: 'Pin digitala',
        LANG_VARIABLES_PIN_TOOLTIP: 'PINa aukeratu.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
        LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
        LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
        LANG_VARIABLES_TYPE_STRING: 'String', // To translate
        LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',  // To translate
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Soinuak',
        LANG_ZUM_PIEZO_BUZZER: 'Burrunbagailua',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TONUA',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Iraupena [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Burrunbagailu piezoelektrikoa',
        LANG_ZUM_PIEZO_BUZZERAV: 'Burrunbagailu aurreratua',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONUA',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Iraupena [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Burrunbagailu piezoelektriko aurreratua.',
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Errotazio jarraiko serboa',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'ERLOJU-ORRATZEN ARABERA BIRATU',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'ERLOJU-ORRATZEN AURKA BIRATU',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'GELDITU',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Etena [ms]',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Errotazio jarraiko serboa.',
        LANG_MOTOR_SERVO_MOVE: 'Serboa',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graduak (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Etena [ms]',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Serboa 0 eta 180 gradu artean biratu.',
        LANG_MOTOR_SERVO_WARNING: 'Serboaren pinari ezin diozu aldagai bat esleitu',
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
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.'  // To translate
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('es', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('eu-ES', language);
    }
}());
