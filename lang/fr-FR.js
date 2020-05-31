'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Dupliquer',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Effacer le commentaire',
        BLOCKLY_MSG_ADD_COMMENT: 'Ajouter un commentaire',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Données externes',
        BLOCKLY_MSG_INLINE_INPUTS: 'Données internes',
        BLOCKLY_MSG_DELETE_BLOCK: 'Supprimer le bloc',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Supprimer %1 blocs',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Comprimer le bloc',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Étendre le bloc',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Désactiver le bloc',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Activer le bloc',
        BLOCKLY_MSG_HELP: 'Aide',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Comprimer les blocs',
        BLOCKLY_MSG_EXPAND_ALL: 'Étendre les blocs',
        LANG_VARIABLES_SET_ITEM: 'élément',
        LANG_RESERVED_WORDS: 'mot réservé : ce nom n’est pas autorisé.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Logique',
        LANG_LOGIC_OPERATION_AND: 'et',
        LANG_LOGIC_OPERATION_OR: 'ou',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Vérifie si les deux données correspondent.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Vérifie si les deux données sont différentes.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Vérifie si la première donnée est inférieure à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Vérifie si la première donnée est inférieure ou égale à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Vérifie si la première donnée est supérieure à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Vérifie si la première donnée est supérieure ou égale à la seconde.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Vérifie si les deux données sont vraies.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Vérifie si l’une ou l’autre donnée est vraie.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'pas',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Renvoie l’opposé de la donnée.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'vrai',
        LANG_LOGIC_BOOLEAN_FALSE: 'faux',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Renvoie la valeur vrai ou faux.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Communication',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth : recevoir',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Renvoie les données reçues par le module Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth : envoyer',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Envoyer',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Envoie les données via le module Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Définition du Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Débit (bauds)',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'CodePin',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recevoir',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Envoyer',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Définition du module Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Port série Bluetooth disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le module Bluetooth est disponible ou non.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Port série disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le port série est disponible ou non',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Entier série lu',
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'D abord valider le nombre entier(long) du tampon série',
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimer via le port série',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime les données en caractères ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimer via le port série avec retour chariot',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime les données en caractères ASCII et finit par un retour chariot (RC).',
        LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
        LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
        LANG_ADVANCED_SERIAL_READ: 'Lire via le port série',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lit les données reçues via le port série comme des octets.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Lire chaîne via le port série',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lit les données reçues via le port série comme des caractères ASCII.',
        //sensor blocks :
        LANG_CATEGORY_SENSOR: 'Capteurs',
        LANG_BQ_BAT: 'BAT – Capteur à ultrasons',
        LANG_BQ_BAT_RED_PIN: 'BROCHE ECHO#',
        LANG_BQ_BAT_BLUE_PIN: 'BROCHE TRIGGER#',
        LANG_BQ_BAT_TOOLTIP: 'Renvoie la distance mesurée par le capteur à ultrasons.',
        LANG_IR_READ: 'Reads from infrared receiver', //to translate
        LANG_IR_READ_PIN: 'connected to PIN#', //to translate
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
        //LCD blocks:
        LANG_CATEGORY_LCD: 'Blocs LCD',
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
        LANG_LCD_DEF_TOOLTIP: 'Bloc qui définit l’écran LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avancé',
        LANG_LCD_ADVANCED_ROWS: 'Rangées',
        LANG_LCD_ADVANCED_COLUMNS: 'Colonnes',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc définissant le LCD avancé',
        LANG_LCD_SETBACKLIGHT: 'LCD: définir le rétroéclairage(',
        LANG_LCD_SETBACKLIGHT_CLOSE: ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Définit le rétroéclairage de l’écran LCD.',
        LANG_LCD_PRINT: 'LCD : imprimer ',
        LANG_LCD_PRINT_TEXT: 'Text or value', //to translate
        LANG_LCD_PRINT_SPECIAL: 'Defined character', //to translate
        LANG_LCD_PRINT_ROW: 'Row', //to translate
        LANG_LCD_PRINT_COL: 'Col', //to translate
        LANG_LCD_PRINT_POSITION: 'Définir la position du texte ?',
        LANG_LCD_PRINT_TOOLTIP: 'Affiche une chaîne de caractères sur l’écran LCD à l’endroit défini ou au prochain endroit disponible.',
        LANG_LCD_CLEAR: 'LCD : effacer',
        LANG_LCD_CLEAR_TOOLTIP: 'Effacer l’écran LCD',
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
        LANG_CATEGORY_CONTROLS: 'Contrôle',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Attendre (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Attend le temps défini en millisecondes (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Temps à partir du début (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Nombre de millisecondes depuis le démarrage du programme (entier long)',
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
        LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
        LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
        LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
        LANG_CONTROLS_EXECUTE: 'Execute',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Exécutes du code C/C++. A utiliser avec parcimonie, car il peut casser facilement le programme et l empêcher de compiler.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condition est vraie, exécute les instructions.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condition est vraie, exécuter le premier bloc d’instruction. Sinon, exécuter le second bloc d’instruction.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instruction.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le deuxième bloc d’instruction. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’instruction.',
        LANG_CONTROLS_IF_MSG_IF: 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'ou bien si',
        LANG_CONTROLS_IF_MSG_ELSE: 'sinon',
        LANG_CONTROLS_IF_MSG_THEN: 'exécuter',
        LANG_CONTROLS_IF_IF_Field_IF: 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc “si”.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'ou bien si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Ajouter une condition au bloc “si”.',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'sinon',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Ajouter une condition finale, globale, au bloc “si”.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Il n’est pas possible de définir une variable comme valeur initiale d’un bloc “compter”.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Il n’est pas possible de définir une variable comme valeur finale d’un bloc “compter”.',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'It is not possible to set a variable as the increment value of the for block', //to translate
        LANG_CONTROLS_FOR_INPUT_WITH: 'compter avec',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'de',
        LANG_CONTROLS_FOR_INPUT_TO: 'à',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
        LANG_CONTROLS_FOR_INPUT_DO: 'exécuter',
        LANG_CONTROLS_FOR_TOOLTIP: 'Compter en partant d’un nombre donné jusqu’à un nombre donné. Chaque fois que le compte augmente de un, la variable prend cette valeur puis exécute les instructions.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'tant que',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'jusqu’à',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Tant que la condition est vraie, exécuter les instructions.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Tant que la condition est fausse, exécuter les instructions.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Répéter',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'fois',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'exécuter',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Répéter les instructions un certain nombre de fois',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'la boucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompre',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuer avec l’itération suivante',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrompre la boucle contenant ces instructions.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Passer le reste de cette boucle et continuer avec la prochaine itération.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attention : Ce bloc ne peut être utilisé que dans une boucle.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'si ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Exécute les instructions du cas.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'L’expression qui apparaît dans le bloc “si” est évaluée une seule fois',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'La mention “si autre cas”, spécifie le code à exécuter si aucun cas ne correspond',
        LANG_CONTROLS_SWITCH_IS: 'cas : ',
        LANG_CONTROLS_SWITCH_CASE: 'cas',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'si autre cas',
        LANG_CONTROLS_SWITCH_DO: 'exécuter',
        //math blocks :
        LANG_CATEGORY_MATH: 'Mathématiques',
        LANG_MATH_ADVANCED_MAP_MAP: 'Échelonner',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'à [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Rééchelonne les données d’un certain intervalle à un autre.',
        LANG_MATH_NUMBER_TOOLTIP: 'Chiffre',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Tableau',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Renvoie la valeur d’un élément donné du tableau.',
        LANG_MATH_MODULO_TOOLTIP: 'Renvoie le reste de la division des deux chiffres.',
        LANG_MATH_BASE_MAP: 'Échelonner ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valeur de [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Rééchelonner les données entre [0-1023] sur un autre intervalle.',
        LANG_MATH_SINGLE_OP_ROOT: 'racine carrée',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valeur absolue',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Renvoie la racine carrée d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Renvoie la valeur absolue d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Renvoie la négation d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Renvoie le logarithme népérien d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Renvoie le logarithme décimal d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Renvoie e à la puissance d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Renvoie 10 à la puissance d’un chiffre.',
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
        LANG_CATEGORY_TEXT: 'Texte',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Une lettre, un mot ou une chaîne de caractères.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'créer texte avec',
        LANG_TEXT_JOIN_TOOLTIP: 'Créer un texte en associant n’importe quel nombre d’éléments.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'associer',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc texte.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'élément',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Ajouter un élément au texte.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'associer',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'élément',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'à',
        LANG_TEXT_APPEND_APPENDTEXT: 'ajouter texte',
        LANG_TEXT_APPEND_VARIABLE: 'élément',
        LANG_TEXT_APPEND_TOOLTIP: 'Ajouter un texte à la variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longueur',
        LANG_TEXT_LENGTH_TOOLTIP: 'Renvoie le nombre de caractères (espaces inclus) dans le texte donné.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Vérifie si les deux chaînes de caractères sont identiques, sans tenir compte de la casse. ',
        LANG_TEXT_SUBSTRING: 'Citer ',
        LANG_TEXT_SUBSTRING_FROM: 'de',
        LANG_TEXT_SUBSTRING_TO: 'à',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Extraire une sous-chaîne de caractères d’une chaîne donnée à partir de l’intervalle défini par les deux valeurs.',
        LANG_TEXT_CHARAT: 'Character of text', //To translate
        LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
        LANG_TEXT_SPECIAL: 'Caractères spéciaux',
        LANG_TEXT_SPECIAL_TAB: 'Tabulation',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retour chariot',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Saut de ligne',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Utilise des caractères spéciaux.',
        LANG_TEXT_COMMENT: 'Comment', //to translate
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Fonctions broche',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Lire broche analogique#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lit la valeur provenant d’une broche analogique donnée',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Écrire dans la broche analogique#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valeur',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Écrire une valeur comprise entre 0 et 255 pour une broche de sortie analogique donnée.',
        LANG_ADVANCED_BUILTIN_LED: 'LED de la carte',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'état',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED de la carte qui est connectée de manière interne à la broche 13',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Lire la broche numérique#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lit la valeur provenant d’une broche numérique donnée.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Écrire dans la broche numérique',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'la valeur',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: '#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'état',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ÉLEVÉ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAS',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Écrire une valeur dans une broche numérique donnée',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ÉLEVÉ',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAS',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'ÉLEVÉ OU BAS',
        LANG_ADVANCED_MATH_RANDOM: 'Aléatoire comprise entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' et ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Renvoie un chiffre aléatoire compris dans l’intervalle défini.',
        LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
        LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Fonctions',
        LANG_PROCEDURES_RETURN: 'retourner',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Retourner une valeur',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Appel de fonction sans définition préalable de cette fonction',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'fonction_sans_renvoi',
        LANG_PROCEDURES_DEFNORETURN_DO: 'exécuter',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Une fonction sans renvoi de valeur.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'fonction_avec_renvoi',
        LANG_PROCEDURES_DEFRETURN_DO: 'exécuter',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'renvoie',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Une fonction avec renvoi de valeur.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attention : cette fonction a des paramètres dupliqués.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'exécuter',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'fonction_sans_renvoi',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Appelle une fonction sans renvoi de valeur.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'exécuter',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'fonction_avec_renvoi',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Appelle une fonction avec renvoi de valeur.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paramètres',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable :',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Surligner la fonction',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condition est vraie, renvoie cette valeur.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Attention : Ce bloc doit être utilisé uniquement dans une fonction avec renvoi de valeur.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Cette variable n’est pas déclarée.',
        LANG_VARIABLES_GLOBAL: 'Déclarer variable GLOBALE',
        LANG_VARIABLES_GLOBAL_TYPE: 'de type ',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Déclare et définit une variable GLOBALE de type entier (int) ou texte (string).',
        LANG_VARIABLES_LOCAL: 'Déclarer variable ',
        LANG_VARIABLES_LOCAL_TYPE: 'de type ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Déclarer et définir une variable LOCALE de type entier (int) ou texte (string).',
        LANG_VARIABLES_DEFINE: 'Définir variable ',
        LANG_VARIABLES_DEFINE_AS: 'comme',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Définir la valeur d’une variable.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Détermine la valeur d’une variable.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Renvoie la valeur d’une variable.',
        LANG_VARIABLES_PIN_ANALOG: 'Broche analogique',
        LANG_VARIABLES_PIN_DIGITAL: 'Broche numérique',
        LANG_VARIABLES_PIN_DIGITAL0: 'ATTENTION : la broche numérique 0 (broche RX) sert à charger les programmes. Si elle est utilisée pour connecter des composants électroniques, des problèmes peuvent survenir lors du chargement d’un nouveau programme.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Sélectionner la BROCHE.',
        LANG_VARIABLES_TYPE_BYTE: 'Octet',
        LANG_VARIABLES_TYPE_FLOAT: 'Virgule flotante',
        LANG_VARIABLES_TYPE_INTEGER: 'Entier',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Entier long',
        LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
        LANG_VARIABLES_TYPE_STRING: 'Chaine',
        LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
        LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Variable Globale volatile déclarée',
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'de type',
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Déclare et défini une variable GLOBALE VOLATILE de type int ou chaine utilisé dans une fonction ISR.',
        //sound blocks (zum):
        LANG_CATEGORY_ZUM: 'Sons',
        LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'BROCHE#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TONALITÉ',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RÉ',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Temps [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV: ' Buzzer avancé',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'BROCHE#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONALITÉ',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Temps [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avancé',
        LANG_ZUM_DHT11_VALUE: 'Get', //to translate
        LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
        LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
        LANG_ZUM_DHT11_PIN: 'PIN', //to translate
        LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Servo',
        LANG_MOTOR_SERVO_CONT_PIN: 'BROCHE#',
        LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'TOURNER DANS LE SENS DES AIGUILLES D’UNE MONTRE',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TOURNER DANS LE SENS INVERSE DES AIGUILLES D’UNE MONTRE ',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'ARRETE',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Attendre [ms]',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo à rotation continue.',
        LANG_MOTOR_SERVO_MOVE: 'Servo',
        LANG_MOTOR_SERVO_MOVE_PIN: 'BROCHE#',
        LANG_MOTOR_SERVO_MOVE_DEGREES: 'Degrés (0~180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Attendre [ms]',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Bouger le servo entre 0 et 180 degrés',
        LANG_MOTOR_SERVO_WARNING: 'Il n’est pas possible de déterminer la broche du servo à l’aide d’une variable',
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
        LANG_CATEGORY_INTERRUPTS: 'Interruption',
        LANG_INTERRUPTS_STATE: 'Configurer les interruptions à l état de',
        LANG_INTERRUPTS_STATE_ENABLED: 'MARCHE',
        LANG_INTERRUPTS_STATE_DISABLED: 'ARRET',
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Valider ou invalider les interruptions. Certaines fonctions ne fonctionnerons pas tant que les interruptions sont invalidées. A n utiliser qu en cas de sections de code critique',
        LANG_INTERRUPTS_ATTACH: 'Procédure jointe ',
        LANG_INTERRUPTS_ATTACH_PARAM2: 'en mode ',
        LANG_INTERRUPTS_ATTACH_PARAM3: 'Avec interruption de la broche digitale',
        LANG_INTERRUPTS_ATTACH_LOW: 'BAS',
        LANG_INTERRUPTS_ATTACH_CHANGE: 'MODIFIE',
        LANG_INTERRUPTS_ATTACH_RISING: 'MONTER',
        LANG_INTERRUPTS_ATTACH_FALLING: 'TOMBER',
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'fonction_sans_retour',
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Régler la procédure qui doit être exécutée quand une interruption apparait dans la broche spécifiée.',
        LANG_INTERRUPTS_DETACH: 'Détacher l interruption sur la broche digitale',
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Annuler l interruption sur la broche. Quand la broche est activée, la procédure associée n est plus exécuter.',
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
        RoboBlocks.locales.add('fr-FR', language);
    }
}());
