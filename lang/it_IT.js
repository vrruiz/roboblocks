'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplica',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Rimuovi commento',
        BLOCKLY_MSG_ADD_COMMENT: 'Aggiungi commento',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Input esterni',
        BLOCKLY_MSG_INLINE_INPUTS: 'Input in linea',
        BLOCKLY_MSG_DELETE_BLOCK: 'Cancella blocco',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Cancella %1 blocchi',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Comprimi',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Espandi blocco',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Disattiva blocco',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Attiva blocco',
        BLOCKLY_MSG_HELP: 'Aiuto',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Comprimi blocchi',
        BLOCKLY_MSG_EXPAND_ALL: 'Espandi blocchi',
        LANG_VARIABLES_SET_ITEM: 'Oggetto',
        LANG_RESERVED_WORDS: 'Parola riservata: questo nome non è permesso.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Logica',
        LANG_LOGIC_OPERATION_AND: 'e',
        LANG_LOGIC_OPERATION_OR: 'o',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Controlla che entrambi i valori siano uguali .',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Controlla che i valori siano differenti.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Controlla che il primo valore sia più piccolo del secondo.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Controlla che il primo valore sia più piccolo o uguale al secondo.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Controlla che il primo valore sia più grande del secondo.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Controlla che il primo valore sia più grande o uguale al secondo.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Controlla che entrambi i valori siano Veri.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Controlla che almeno uno dei due valori sia Vero.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'non è',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Restituisce il valore opposto.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'Vero',
        LANG_LOGIC_BOOLEAN_FALSE: 'Falso',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Restituisce il valore vero o falso della funzione selezionata.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicazione',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Ricezione dati da Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Restituisce i dati ricevuti dal modulo Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Invio dati a Bluetooth',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Invia',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Invia dati usando il modulo Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Definizione Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Velocità di trasmissione',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codice pin',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Ricevi',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Invia',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definizione del modulo Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Porta seriale Bluetooth disponibile',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se il Bluetooth è disponibile o meno.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Porta seriale disponibile',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se la porta seriale è disponibile o meno.',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Invio dati porta seriale',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Scrive i dati come testo ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Invio dati porta seriale (+accapo)',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Visualizza i dati come testo ASCII aggiungendo l\'accapo (CR).',
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
        LANG_ADVANCED_SERIAL_READ: 'Ricezione dati porta seriale',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Riceve come byte i dati dalla porta seriale.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Ricezione stringa porta seriale',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Riceve come testo ASCII i dati dalla porta seriale.',
        //sensor blocks :
        LANG_CATEGORY_SENSOR: 'Sensori',
        LANG_BQ_BAT: 'BAT - Sensore ad ultrasuoni',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Restituisce la distanza misurata dal sensore ad ultrasuoni.',
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
        LANG_LCD_DEF_TOOLTIP: 'Questo blocco definisce l\'LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avanzato',
        LANG_LCD_ADVANCED_ROWS: 'Righe',
        LANG_LCD_ADVANCED_COLUMNS: 'Colonne',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Blocco che definisce il display LCD avanzato',
        LANG_LCD_SETBACKLIGHT: 'LCD: imposta retroilluminazione(',
        LANG_LCD_SETBACKLIGHT_CLOSE: ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Imposta la retroilluminazione del display LCD.',
        LANG_LCD_PRINT: 'LCD: Stampa ',
        LANG_LCD_PRINT_POSITION: 'Imposta posizione del testo',
        LANG_LCD_PRINT_TOOLTIP: 'Visualizza una stringa sul display LCD ad una determinata posizione o alla successiva disponibile.',
        LANG_LCD_CLEAR: 'Pulisci LCD',
        LANG_LCD_CLEAR_TOOLTIP: 'Pulisce l\'LCD',
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
        LANG_CATEGORY_CONTROLS: 'Controllo',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Attendi (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Attende un determinato tempo in millisecondi (ms)',
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
        LANG_CONTROLS_IF_TOOLTIP_1: 'Se la condizione è vera, esegue il blocco.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Se la condizione è vera, esegue il primo blocco, altrimenti esegue il secondo blocco.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Se la prima condizione è vera si esegue il primo blocco di codice. Altrimenti, se il secondo valore è Vero, viene eseguito il secondo blocco di codice.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Se la prima condizione è vera, si esegue il primo blocco. Altrimenti, se il secondo valore è Vero, viene eseguito il secondo blocco.',
        LANG_CONTROLS_IF_MSG_IF: 'se',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'altrimenti se',
        LANG_CONTROLS_IF_MSG_ELSE: 'altrimenti',
        LANG_CONTROLS_IF_MSG_THEN: 'esegui',
        LANG_CONTROLS_IF_IF_Field_IF: 'se',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Aggiunge, rimuove o riordina la sezione per riconfigurare il blocco SE.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'altrimenti se',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Aggiunge una condizione al blocco ALTRIMENTI SE.',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'altrimenti',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Aggiunge una seconda condizione, prende tutte le altre condizioni del blocco SE.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Impossibile impostare una variabile per il valore iniziale del blocco.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Impossibile impostare una variabile per il valore finale del blocco.',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'It is not possible to set a variable as the increment value of the for block', //to translate
        LANG_CONTROLS_FOR_INPUT_WITH: 'Conta con',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'da',
        LANG_CONTROLS_FOR_INPUT_TO: 'a',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
        LANG_CONTROLS_FOR_INPUT_DO: 'esegui',
        LANG_CONTROLS_FOR_TOOLTIP: 'Conta dal numero iniziale al numero finale. La variabile corrispondente viene incrementata ad ogni ciclo.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'finchè',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Finché la condizione è vera, esegue il blocco.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Finché la condizione è falsa, esegue il blocco.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Ripetizione',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'Volte',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'esegui',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Ripeti il blocco per un determinato numero di volte',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'del ciclo',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompi',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'Continua con la prossima interazione',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Condizione d\'uscita dal ciclo.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltare il resto del ciclo e continuare con la prossima interazione.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attenzione: questo blocco può essere usato solo insieme ad un CICLO.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'commuta ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Esegue il codice in un determinato caso.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'L’espressione che viene valutata una sola volta',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'La parola chiave di default da restituire nel caso non sia stata riscontrata uguaglianza',
        LANG_CONTROLS_SWITCH_IS: 'caso: ',
        LANG_CONTROLS_SWITCH_CASE: 'caso',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'default',
        LANG_CONTROLS_SWITCH_DO: 'esegui',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matematica',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mappa ',
        LANG_MATH_ADVANCED_MAP_FROM: 'da [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Cambia l\'input da un determinato range di valori ad un altro.',
        LANG_MATH_NUMBER_TOOLTIP: 'Numero',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Insieme',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Restituisce il valore di uno specifico elemento di un insieme.',
        LANG_MATH_MODULO_TOOLTIP: 'Restituisce la differenza di una divisione tra due numeri.',
        LANG_MATH_BASE_MAP: 'Mappa ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valore da [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Cambia l\'input da [0-1023] ad altro.',
        LANG_MATH_SINGLE_OP_ROOT: 'radice quadrata',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'assoluto',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Restituisce la radice quadrata di un numero.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Restituisce il valore assoluto di un numero.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Restituisce il valore negativo di un numero.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Restituisce il logaritmo naturale di un numero.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Restituisce il logaritmo a base 10 di un numero.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Restituisce la potenza di un numero',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Restituisce la potenza di 10 di un numero.',
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
        LANG_CATEGORY_TEXT: 'Testo',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'A lettera, parola o linea di testo.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'Crea un testo con',
        LANG_TEXT_JOIN_TOOLTIP: 'Crea una porzione di testo unendo un numero qualsiasi di oggetti.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'Unisci',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Aggiunge, rimuove o riordina la selezione per riconfigurare il blocco di testo.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'Oggetto',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Aggiunge un oggetto al testo.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'Unisci',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'a',
        LANG_TEXT_APPEND_APPENDTEXT: 'Accoda testo',
        LANG_TEXT_APPEND_VARIABLE: 'oggetto',
        LANG_TEXT_APPEND_TOOLTIP: 'Accoda del testo alla variabile %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'lunghezza',
        LANG_TEXT_LENGTH_TOOLTIP: 'Restituisce il numero di lettere (inclusi gli spazi) presenti nel testo.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Controlla se entrambe le stringhe siano uguali, a seconda della regola.',
        LANG_TEXT_SUBSTRING: 'Taglia ',
        LANG_TEXT_SUBSTRING_FROM: 'da',
        LANG_TEXT_SUBSTRING_TO: 'a',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Ottiene una sotto-stringa del valore d\'ingresso con i caratteri tra i due estremi inseriti.',
        LANG_TEXT_CHARAT: 'Character of text', //To translate
        LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
        LANG_TEXT_SPECIAL: 'Caratteri Speciali',
        LANG_TEXT_SPECIAL_TAB: 'Tab',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Ritorno a capo',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Avanzamento riga',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Scrive caratt. speciali',
        LANG_TEXT_COMMENT: 'Comment', //to translate
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funzioni Pin',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Lettura Analogica PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Legge il valore di uno specifico pin analogico',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Scrittura Analogica PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valore',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Scrive un valore da 0 a 255 in uscita ad un pin analogico',
        LANG_ADVANCED_BUILTIN_LED: 'LED integrato',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'Stato',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ACCESO',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'SPENTO',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Il LED integrato è collegato al PIN 13',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Lettura Digitale PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Legge il valore di uno specifico Pin Digitale',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Scrittura Digitale',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'il valore',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'stato',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ACCESO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'SPENTO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Scrive lo stato specifico ad un Pin Digitale',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ACCESO',
        LANG_ADVANCED_HIGHLOW_LOW: 'SPENTO',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'ACCESO o SPENTO',
        LANG_ADVANCED_MATH_RANDOM: 'Numero casuale tra',
        LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Restituisce un valore casuale tra i due estremi.',
        LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
        LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funzioni',
        LANG_PROCEDURES_RETURN: 'return',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Ritorna un valore',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'La funzione è richiamata senza definizioni corrispondenti',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'Funzione Normale',
        LANG_PROCEDURES_DEFNORETURN_DO: 'esegui',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'La funzione non restituisce alcun valore in uscita.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'Funzione con Ritorno',
        LANG_PROCEDURES_DEFRETURN_DO: 'esegui',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'uscita',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'La funzione restituisce un valore in uscita.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attenzione: questa funzione presenta un parametro duplicato.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'esegui',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Funzione Normale',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Richiama una funzione senza valore in uscita.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'esegui',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'Funzione con Ritorno',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Richiama una funzione con valore in uscita.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametri',
        LANG_PROCEDURES_MUTATORARG_Field: 'variabili:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Evidenzia Funzione',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se la condizione è vera, restituisce il valore.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Attenzione: questo blocco può essere usato solo con una funzione che restituisce un valore.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variabli',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Questa variabile non è dichiarata.',
        LANG_VARIABLES_GLOBAL: 'Variabile ',
        LANG_VARIABLES_GLOBAL_TYPE: 'tipo di ',
        LANG_VARIABLES_GLOBAL_EQUALS: 'uguale',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Dichiara e definisce una Variabile Globale di tipo intero o stringa.',
        LANG_VARIABLES_LOCAL: 'Variabile locale ',
        LANG_VARIABLES_LOCAL_TYPE: 'tipo di ',
        LANG_VARIABLES_LOCAL_EQUALS: 'uguale',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Dichiara e definisce una variabile Locale di tipo intero o stringa.',
        LANG_VARIABLES_DEFINE: 'Definizione variabile ',
        LANG_VARIABLES_DEFINE_AS: 'come',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definisce il valore della variabile.',
        LANG_VARIABLES_SET: 'Variabile ',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Definisce il valore della variabile.',
        LANG_VARIABLES_GET: 'Variabile ',
        LANG_VARIABLES_GET_TOOLTIP: 'Restituisce il valore della variabile.',
        LANG_VARIABLES_PIN_ANALOG: 'PIN analogico',
        LANG_VARIABLES_PIN_DIGITAL: 'PIN digitale',
        LANG_VARIABLES_PIN_DIGITAL0: 'ATTENZIONE: il pin digitale 0 (RX pin) viene utilizzato durante il caricamento di una programma. Non collegare componenti elettronici altrimenti sarà impossibile caricare un nuova programma.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Seleziona il PIN.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
        LANG_VARIABLES_TYPE_FLOAT: 'Float',  // To translate
        LANG_VARIABLES_TYPE_INTEGER: 'Integer',  // To translate
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer',  // To translate
        LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
        LANG_VARIABLES_TYPE_STRING: 'String',  // To translate
        LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
        LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',  // To translate
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',  // To translate
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Suoni',
        LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TONO',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Durata',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV: 'Buzzer avanzato',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durata',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avanzato',
        LANG_ZUM_DHT11_VALUE: 'Get', //to translate
        LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
        LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
        LANG_ZUM_DHT11_PIN: 'PIN', //to translate
        LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Servomotore a rotazione continua',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROTAZIONE',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRA IN SENSO ORARIO',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA IN SENSO ANTI-ORARIO',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'FERMA',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servomotore a rotazione continua.',
        LANG_MOTOR_SERVO_MOVE: 'Servo',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Gradi (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Sposta di 0~180 gradi',
        LANG_MOTOR_SERVO_WARNING: 'Impossibile impostare il pin del servo motore utilizzando una variabile',
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
    //     this.RoboBlocks.locales.add('en', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('it-IT', language);
    }
}());
