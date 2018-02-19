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
        LANG_VARIABLES_SET_ITEM: 'elemento',
        LANG_RESERVED_WORDS: 'Palabra reservada: este nombre no está permitido.',
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Lógica',
        LANG_LOGIC_OPERATION_AND: 'y',
        LANG_LOGIC_OPERATION_OR: 'o',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si las dos entradas son iguales.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si las dos entradas no son iguales entre sí.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada es menor que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada es menor o igual que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada es mayor que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada es mayor o igual que la segunda entrada.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si ambas entradas son verdaderas.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de las entradas son verdaderas.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Devuelve lo contrario de la entrada.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'verdadero',
        LANG_LOGIC_BOOLEAN_FALSE: 'falso',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devuelve verdadero o falso en función de lo seleccionado.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicación',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devuelve los datos recibidos por el módulo Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar datos',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Toma los datos de la entrada y los envía usando el módulo Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nombre',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definición del módulo Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Puerto Serie Disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el módulo Bluetooth está disponible o no',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Puerto Serie Disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el puerto serie está disponible o no',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Leer entero por el puerto serie', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Devuelve el primer número entero (largo) desde el puerto serie', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimir por puerto serie',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime los datos como texto ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir por puerto serie con salto de línea',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime los datos como texto ASCII y con retorno de carro (RC).',
        LANG_ADVANCED_SERIAL_READ: 'Leer desde el puerto serie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Leer cadena desde el puerto serie',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiales',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de línea',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escribe caracteres especiales.',
        //bq blocks :
        LANG_CATEGORY_BQ: 'Octopus bloqs',
        LANG_BQ_BAT: 'BAT - Sensor de Ultrasonidos',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Devuelve la distancia medida por el sensor.',
        LANG_BQ_BUTTON: 'Botón',
        LANG_BQ_BUTTON_PIN: 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP: 'Botón',
        LANG_BQ_BUTTONS: 'Botonera',
        LANG_BQ_BUTTONS_PIN: 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A: 'Botón #A',
        LANG_BQ_BUTTONS_BUTTON_B: 'Botón #B',
        LANG_BQ_BUTTONS_BUTTON_C: 'Botón #C',
        LANG_BQ_BUTTONS_BUTTON_D: 'Botón #D',
        LANG_BQ_BUTTONS_BUTTON_E: 'Botón #E',
        LANG_BQ_BUTTONS_TOOLTIP: 'Botonera',
        LANG_BQ_INFRARED: 'Sensor infrarrojo',
        LANG_BQ_INFRARED_PIN: 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP: 'Devuelve el valor digital medido por el sensor infrarrojo',
        LANG_BQ_JOYSTICK: 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X: 'Eje X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Eje Y PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Posición Joystick',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Pulsador PIN#',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN#',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'ENCENDER',
        LANG_BQ_LED_OFF: 'APAGAR',
        LANG_BQ_LED_TOOLTIP: 'LED',
        LANG_BQ_PHOTORESISTOR: 'Sensor de Luz',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico medido por la fotorresistencia.',
        LANG_BQ_PIEZO_BUZZER: 'Zumbador',
        LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE: 'TONO',
        LANG_BQ_PIEZO_BUZZER_DO: 'DO',
        LANG_BQ_PIEZO_BUZZER_RE: 'RE',
        LANG_BQ_PIEZO_BUZZER_MI: 'MI',
        LANG_BQ_PIEZO_BUZZER_FA: 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA: 'LA',
        LANG_BQ_PIEZO_BUZZER_SI: 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Duración [ms]',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
        LANG_BQ_PIEZO_BUZZERAV: 'Zumbador avanzado',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONO',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador avanzado',
        LANG_BQ_POTENTIOMETER: 'Potenciómetro',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Devuelve el valor analógico medido por el potenciómetro',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD bloqs',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'Pines del LCD',
        LANG_LCD_DEF_TOOLTIP: 'Define el LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avanzado',
        LANG_LCD_ADVANCED_ROWS: 'Filas',
        LANG_LCD_ADVANCED_COLUMNS: 'Columnas',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloque que define el LCD avanzado',
        LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminación',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminación de la pantalla LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_POSITION: '¿Fijar posición del texto?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprime un string en la pantalla LCD en la posición específicada o en la siguiente disponible.',
        LANG_LCD_CLEAR: 'LCD borrar',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Control',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar [ms]',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el tiempo especificado en milisegundos (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Tiempo desde el arranque (ms)',
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de milisegundos desde que se inició el programa (entero largo)',
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Hacer',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mientras',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mientras la condición sea verdadera, continúa ejecutando las acciones del bloque.',
        LANG_CONTROLS_EXECUTE: 'Ejecutar',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Ejecuta código C/C++. Utilizar con preucación, ya que puede romper fácilmente el programa e impedir su correcta compilación.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condición es verdadera, ejecuta las acciones dentro del bloque.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condición es verdadera, se ejecuta el primer bloque de comandos. Si no lo es, se ejecuta el segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos. Si ninguno de los valores es verdadero, se ejecuta el último bloque de comandos',
        LANG_CONTROLS_IF_MSG_IF: 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'en cambio, si',
        LANG_CONTROLS_IF_MSG_ELSE: 'de lo contrario',
        LANG_CONTROLS_IF_MSG_THEN: 'ejecutar',
        LANG_CONTROLS_IF_IF_Field_IF: 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque "si".',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en cambio, si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Añade una condición al bloque "si".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'de lo contrario',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Añade una condición final al bloque "si" para capturar el resto de opciones.',
        LANG_CONTROLS_FOR_FROM_WARNING:'No puedes asignar una variable al valor inicial del for',
        LANG_CONTROLS_FOR_TO_WARNING:'No puedes asignar una variable al valor final del for',
        LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
        LANG_CONTROLS_FOR_INPUT_TO: 'hasta',
        LANG_CONTROLS_FOR_INPUT_DO: 'ejecutar',
        LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio hasta uno final. Cada vez que se incrementa en uno la cuenta, la variable toma ese valor y se ejecutan las acciones.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mientras',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'hasta',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mientras la condición sea verdadera, ejecutar las instrucciones.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mientras la condición sea falsa, ejecutar las instrucciones.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'ejecutar',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Ejecutar las instrucciones un número concreto de veces.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrumpir',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar con la siguiente iteración',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrumpir el bucle que contiene esta instrucción.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltarse el resto de acciones de esta iteración y continuar con la siguiente iteración.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de un bucle.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Inicio',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Repetir',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Los bloques en Inicio se ejecutarán una sola vez al arranque, mientras que los bloques en Repetir se ejecutarán de forma repetida.',
        LANG_CONTROLS_SWITCH: 'si ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Ejecuta las acciones del caso que se cumpla.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Ejecuta las acciones del caso que se cumpla.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Ejecuta las acciones del caso que se cumpla.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Ejecuta las acciones del caso que se cumpla.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara de uno en uno si se cumplen los distintos casos.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloque "default" especifica la acción que se va a ejecutar si no se han cumplido ninguno de los casos anteriores.',
        LANG_CONTROLS_SWITCH_IS: 'es: ',
        LANG_CONTROLS_SWITCH_CASE: 'caso ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'en otro caso',
        LANG_CONTROLS_SWITCH_DO: 'ejecutar',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matemáticas',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea la entrada desde un rango de valores iniciales a otro rango distinto.',
        LANG_MATH_NUMBER_TOOLTIP: 'Número entero',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteros',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Devuelve el valor de un elemento concreto del vector.',
        LANG_MATH_MODULO_TOOLTIP: 'Devuelve el resto de la división de las dos entradas.',
        LANG_MATH_BASE_MAP: 'Mapear ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea la entrada desde el rango [0-1023] a otro rango de valores.',
        LANG_MATH_SINGLE_OP_ROOT: 'raíz cuadrada',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devuelve la raíz cuadrada de un número.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devuelve el valor absoluto de un número.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devuelve el número cambiado de signo.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Devuelve el logaritmo neperiano de un número.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devuelve el logaritmo en base 10 de un número.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devuelve el exponencial de un número.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devuelve 10 elevado a una potencia.',
        //text blocks:
        LANG_CATEGORY_TEXT: 'Texto',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Una letra, una palabra o una línea de texto.',
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
        LANG_TEXT_JOIN_TOOLTIP: 'Crea texto juntando cualquier número de elementos.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque de texto.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Añadir un elemento al texto.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'a',
        LANG_TEXT_APPEND_APPENDTEXT: 'añadirle texto',
        LANG_TEXT_APPEND_VARIABLE: 'elemento',
        LANG_TEXT_APPEND_TOOLTIP: 'Añadir texto a la variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
        LANG_TEXT_LENGTH_TOOLTIP: 'Devuelve el número de letras (incluyendo los espacios) en el texto introducido.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si los dos textos introducidos son iguales, independientemente de que tengan letras mayúsculas o minúsculas.',
        LANG_TEXT_SUBSTRING: 'Recortar ',
        LANG_TEXT_SUBSTRING_FROM: 'desde',
        LANG_TEXT_SUBSTRING_TO: 'hasta',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta los caracteres del texto introducido que se encuentren entre los dos índices y crea con ellos un nuevo texto.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funciones PIN',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
        LANG_ADVANCED_CONVERSION_VALUE: 'valor',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base de un número.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Leer el pin analógico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lee el valor de un pin analógico específico.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir en PIN digital',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'el valor analógico',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 y 255 en un PIN analógico específico.',
        LANG_ADVANCED_BUILTIN_LED: 'LED EN LA PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ENCENDIDO',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado en la placa que está internamente conectado al PIN 13.',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Leer el pin digital PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lee el valor desde un pin digital específico.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escribir en el pin digital',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'el valor',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAJO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escribe un valor en el pin digital específico.',
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAJO',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',
        LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' y ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número aleatorio entre los dos límites introducidos.',
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funciones',
        LANG_PROCEDURES_RETURN: 'devuelve',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Devuelve un valor',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Llamada a una función sin definición previa.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sin_retorno',
        LANG_PROCEDURES_DEFNORETURN_DO: 'ejecutar',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se ejecutará sin devolver nada.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_con_retorno',
        LANG_PROCEDURES_DEFRETURN_DO: 'ejecutar',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'devuelve',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función tiene parámetros duplicados.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'ejecutar',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sin_retorno',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Ejecuta esta función.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'ejecutar',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_con_retorno',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Ejecuta esta función que tiene valor de retorno.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subraya la función',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condición es verdadera, la función devolverá este valor.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de una función que tenga valor de retorno.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variable no está declarada.',
        LANG_VARIABLES_GLOBAL: 'Declarar variable GLOBAL',
        LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara y define una variable GLOBAL de tipo entero (int) o texto (String).',
        LANG_VARIABLES_LOCAL: 'Declarar variable',
        LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara y define una variable LOCAL de tipo entero (int) o texto (String).',
        LANG_VARIABLES_DEFINE: 'Definir variable ',
        LANG_VARIABLES_DEFINE_AS: 'como',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor de una variable.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Cambia el valor de una variable.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Devuelve el valor de una variable',
        LANG_VARIABLES_PIN_ANALOG: 'Pin analógico',
        LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
        LANG_VARIABLES_PIN_DIGITAL0: 'CUIDADO: el pin digital 0 (pin Rx) es usado para escribir un programa en la placa desde el ordenador. Usarlo para conectar componentes puede dar problemas al programarla.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN deseado.',
        LANG_VARIABLES_TYPE_BYTE: 'Octeto',
        LANG_VARIABLES_TYPE_FLOAT: 'Decimal',
        LANG_VARIABLES_TYPE_INTEGER: 'Entero',
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Entero largo',
        LANG_VARIABLES_TYPE_STRING: 'Texto',
        LANG_VARIABLES_VOLATILE_GLOBAL: 'Declarar variable VOLATIL GLOBAL ',
        LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'de tipo ',
        LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declara y define una variable VOLATIL GLOBAL de tipo entero (int) o texto (String) usada en funciones de manejo de interrupciones.',
        //zum blocks :
        LANG_CATEGORY_ZUM: 'Zum bloqs',
        LANG_ZUM_BUTTON: 'Botón',
        LANG_ZUM_BUTTON_PIN: 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Botón zum',
        LANG_ZUM_FOLLOWER: 'Sensor infrarrojo',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DERECHA#',
        LANG_ZUM_FOLLOWER_LEFT: 'Izquierda',
        LANG_ZUM_FOLLOWER_RIGHT: 'Derecha',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',
        LANG_ZUM_INFRARED: 'Sensor infrarrojo',
        LANG_ZUM_INFRARED_PIN: 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'PIN#',
        LANG_ZUM_LED_ON: 'ENCENDER',
        LANG_ZUM_LED_OFF: 'APAGAR',
        LANG_ZUM_LED_TOOLTIP: 'LED zum',
        LANG_ZUM_PHOTORESISTOR: 'Sensor de Luz',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico del sensor de luz (fotorresistencia).',
        LANG_ZUM_PIEZO_BUZZER: 'Zumbador',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TONO',
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
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador piezoeléctrico avanzado.',
        LANG_ZUM_POTENTIOMETER: 'Potenciómetro',
        LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciómetro zum.',
        //servo blocks :
        LANG_CATEGORY_SERVO: 'Servo',
        LANG_SERVO_CONT: 'Servo rotación continua',
        LANG_SERVO_CONT_PIN: 'PIN#',
        LANG_SERVO_CONT_ROT: 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIDO HORARIO',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIDO ANTIHORARIO',
        LANG_SERVO_CONT_STOPPED: 'DETENER',
        LANG_SERVO_CONT_DELAY: 'Pausa [ms]',
        LANG_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
        LANG_SERVO_MOVE: 'Servo',
        LANG_SERVO_MOVE_PIN: 'PIN#',
        LANG_SERVO_MOVE_DEGREES: 'Grados (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Pausa [ms]',
        LANG_SERVO_MOVE_TOOLTIP: 'Mover el servo entre 0 y 180 grados.',
        LANG_SERVO_WARNING:'No puedes asignar una variable al pin del servo',
        				// Evolution bloqs :
		LANG_CATEGORY_EVOLUTION: 'Evolution',
		LANG_EVOLUTION_HOME: 'Inicio',
		LANG_EVOLUTION_HOME_TOOLTIP: 'Pone variables de Evolution a cero',
		LANG_EVOLUTION_STOP: 'Detener',
    	LANG_EVOLUTION_STOP_TOOLTIP: 'Para al robot Evolution',				
		LANG_EVOLUTION_TURNHEAD: 'Mira hacia',
		LANG_EVOLUTION_TURNHEAD_ROT: 'ROT', // Realmente funciona igual que ROT
		LANG_EVOLUTION_TURNHEAD_TOOLTIP: 'Mueve la cabeza hacia el lado que indiques',
		LANG_EVOLUTION_MOVE: 'Mover hacia ',				
		LANG_EVOLUTION_FORDWARD: 'Mover hacia adelante',
		LANG_EVOLUTION_FORDWARD_SPEED:'Velocidad',
		LANG_EVOLUTION_RIGHT:    'DERECHA',
		LANG_EVOLUTION_RIGHT_SPEED: 'Velocidad',
		LANG_EVOLUTION_RIGHT_TOOLTIP: 'Gira hacia la derecha con esta velocidad',				
		LANG_EVOLUTION_LEFT:     'IZQUIERDA',
		LANG_EVOLUTION_LEFT_SPEED: 'Velocidad',
		LANG_EVOLUTION_LEFT_TOOLTIP: 'Gira hacia la izquierda con esta velocidad',
		LANG_EVOLUTION_FRONT:'ALANTE',
		LANG_EVOLUTION_BACK:'ATRÁS',				
		LANG_EVOLUTION_DELAY:'Durante (ms):',				
		LANG_EVOLUTION_GET_DISTANCE: 'Distancia',
		LANG_EVOLUTION_GET_DISTANCE_TOOLTIP: 'Obtiene la distancia al obstaculo',
		LANG_EVOLUTION_GET_LINE: 'Hay linea',
		LANG_EVOLUTION_GET_LINE_SIDE: 'Lado',
		LANG_EVOLUTION_GET_LINE_TOOLTIP: 'Indica si hay linea en el lado indicado',
		LANG_EVOLUTION_GET_LINE_COLOR:'de color',
		LANG_EVOLUTION_COLOR_WHITE:'BLANCO',
		LANG_EVOLUTION_COLOR_BLACK:'NEGRO',
		LANG_EVOLUTION_GET_LIGHT: 'Hay luz',
		LANG_EVOLUTION_GET_LIGHT_INTENSITY:'con intensidad',
		LANG_EVOLUTION_GET_LIGHT_SIDE: 'Lado',
		LANG_EVOLUTION_GET_LIGHT_TOOLTIP: 'Indica si hay luz en el lado especificado',
		LANG_EVOLUTION_GET_LIGHT_HIGH:'MUCHA',
		LANG_EVOLUTION_GET_LIGHT_MEDIUM:'MEDIA',
		LANG_EVOLUTION_GET_LIGHT_LOW:'POCA',				
        LANG_EVOLUTION_SPEED:'con velocidad',
        LANG_EVOLUTION_SPEED_FAST:'RAPIDA',
        LANG_EVOLUTION_SPEED_MEDIUM:'MEDIA',
        LANG_EVOLUTION_SPEED_LOW:'LENTA',
        LANG_EVOLUTION_HEAD_RIGHT:'DERECHA',
        LANG_EVOLUTION_HEAD_LEFT:'IZQUIERDA',
        LANG_EVOLUTION_HEAD_CENTER:'CENTRO',
        LANG_EVOLUTION_HEAD_STATE:'Mueve la cabeza hacia:',
		
		//escornabot blocks
		LANG_CATEGORY_ESCORNABOT: 'Escornabot',
		LANG_ESCORNABOT_SPEED:'Velocidad',
		LANG_ESCORNABOT_TURNS:'Vueltas',
		LANG_ESCORNABOT_TURNS_LEFT:'Gira izquierda',
		LANG_ESCORNABOT_TURNS_RIGHT:'Gira derecha',
		LANG_ESCORNABOT_DRIVE_FORD:'Avanza',
		LANG_ESCORNABOT_DRIVE_BACK:'Retrocede',
		LANG_ESCORNABOT_DRIVE_TOOLTIP:'Mueve el escornabot adelante o atrás',
		LANG_ESCORNABOT_HOME: 'Inicio',
		LANG_ESCORNABOT_HOME_TOOLTIP:'Inicia el Escornabot',
		LANG_ESCORNABOT_STOP:'Parar',
		LANG_ESCORNABOT_STOP_TOOLTIP:'Para el Escornabot',
		LANG_ESCORNABOT_TURN_TOOLTIP:'Gira el escornabot a derecha o izquierda',
		LANG_ESCORNABOT_LED_ON:'Enciende el led',
		LANG_ESCORNABOT_LED_OFF:'Apaga el led',
		LANG_ESCORNABOT_LED_TOOLTIP:'Enciende o apaga el led indicado',
		LANG_ESCORNABOT_BUZZER_OFF: 'Silencio',
		LANG_ESCORNABOT_BUZZER_ON: 'Pitar',
		
        //interrupt blocks :
        LANG_CATEGORY_INTERRUPTS: 'Interrupciones',
        LANG_INTERRUPTS_STATE: 'Establece estado de las interrupciones a ',
        LANG_INTERRUPTS_STATE_ENABLED: 'HABILITADO',
        LANG_INTERRUPTS_STATE_DISABLED: 'DESHABILITADO',
        LANG_INTERRUPTS_STATE_TOOLTIP: 'Habilita o deshabilita las interrupciones. Algunas funciones no podrán usarse mientras que las interrupciones estén deshabilitadas. Utilizar solo para secciones críticas del programa.',
        LANG_INTERRUPTS_ATTACH: 'Asociar la función ',
        LANG_INTERRUPTS_ATTACH_PARAM2: 'en el modo ',
        LANG_INTERRUPTS_ATTACH_PARAM3: 'con la interrupción del pin digital',
        LANG_INTERRUPTS_ATTACH_LOW: 'BAJO',
        LANG_INTERRUPTS_ATTACH_CHANGE: 'CAMBIO',
        LANG_INTERRUPTS_ATTACH_RISING: 'SUBIENDO',
        LANG_INTERRUPTS_ATTACH_FALLING: 'BAJANDO',
        LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_sin_retorno',
        LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Especifica la función que se va a ejecutar cuando se produzca la interrupción en el pin especificado.',
        LANG_INTERRUPTS_DETACH: 'Desasociar la interrupción del pin digital',
        LANG_INTERRUPTS_DETACH_TOOLTIP: 'Desactiva la asociación de la interrupción especificada en el pin. Cuando se active ese pin, ya no se ejecutará la función asociada.',
        
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('es', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('es-ES', language);
    }
}());
