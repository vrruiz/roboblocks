'use strict';

(function () {
    var language = {
//random :
        LANG_VARIABLES_SET_ITEM : 'elemento',

        //logic blocks:
        LANG_CATEGORY_LOGIC : 'Lógica',

        LANG_LOGIC_OPERATION_AND : 'y',
        LANG_LOGIC_OPERATION_OR : 'o',

        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Devuelve verdadero si las dos entradas son iguales.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Devuelve verdadero si las dos entradas no son iguales entre sí.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Devuelve verdadero si la primera entrada es menor que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Devuelve verdadero si la primera entrada es menor o igual que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT :'Devuelve verdadero si la primera entrada es mayor que la segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE :'Devuelve verdadero si la primera entrada es mayor o igual que la segunda entrada.',

        LANG_LOGIC_OPERATION_TOOLTIP_AND : 'Devuelve verdadero si ambas entradas son verdaderas.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR : 'Devuelve verdadero si alguna de las entradas son verdaderas.',

        LANG_LOGIC_NEGATE_INPUT_NOT : 'no',
        LANG_LOGIC_NEGATE_TOOLTIP : 'Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.',
        LANG_LOGIC_NEGATE_HELPURL : '',

        LANG_LOGIC_BOOLEAN_TRUE : 'verdadero',
        LANG_LOGIC_BOOLEAN_FALSE : 'falso',
        LANG_LOGIC_BOOLEAN_TOOLTIP : 'Devuelve verdadero o falso en función de lo seleccionado.',

        LANG_LOGIC_NULL : 'null',
        LANG_LOGIC_NULL_TOOLTIP : 'Devuelve "null".',

        //communication blocks:
        LANG_CATEGORY_COMMUNICATION : 'Comunicación',

        LANG_BQ_BLUETOOTH_RECEIVE : 'Bluetooth: recibir ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH : 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP : 'Devuelve los datos recibidos por el módulo de Bluetooth',

        LANG_BQ_BLUETOOTH_SEND : 'Bluetooth: Enviar',
        LANG_BQ_BLUETOOTH_SEND_SEND : ' datos',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP : 'Toma los datos de la entrada y los envía usando el módulo de Bluetooth',

        LANG_BQ_BLUETOOTH_DEF : 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE : 'Baud rate',
        LANG_BQ_BLUETOOTH_DEF_PIN1 : 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2 : 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME : 'Nombre',
        LANG_BQ_BLUETOOTH_DEF_PINCODE : 'Código PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE : 'Recibir',
        LANG_BQ_BLUETOOTH_DEF_SEND : 'Enviar',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP : 'Definición del módulo Bluetooth',

        LANG_ADVANCED_BT_SERIAL_AVAILABLE : 'Bluetooth :Puerto Serie Disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP : 'Comprueba si el módulo Bluetooth está disponible o no',

        LANG_ADVANCED_SERIAL_AVAILABLE : 'Puerto Serie Disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP : 'Comprueba si el puerto serie está disponible o no',

        LANG_ADVANCED_SERIAL_PRINT : 'Imprimir por puerto serie',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP : 'Imprime los datos introducidos a la consola o al puerto serie como texto ASCII.',

        LANG_ADVANCED_SERIAL_PRINTLN : 'Imprimir por puerto serie (RC)',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP : 'Prints data to the console/serial port as human-readable ASCII text and add CR.',

        LANG_ADVANCED_SERIAL_READ : 'Leer desde el puerto serie',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP : 'Lee los datos que se reciben por el puerto serie como texto ASCII.',

        LANG_ADVANCED_SERIAL_SPECIAL : 'Caracteres especiales',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB : 'Tabulador',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN : 'Retorno de carro',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED : 'Salto de línea',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP : 'Escribe caracteres especiales.',

        //bq blocks :
        LANG_CATEGORY_BQ : 'Octopus',

        LANG_BQ_BAT : 'BAT',
        LANG_BQ_BAT_RED_PIN : 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN : 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP : 'Devuelve la distancia medida por el sensor.',

        LANG_BQ_BUTTON : 'Botón',
        LANG_BQ_BUTTON_PIN : 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP : 'Botón bq',

        LANG_BQ_BUTTONS : 'Botones',
        LANG_BQ_BUTTONS_PIN : 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A : 'Botón #A',
        LANG_BQ_BUTTONS_BUTTON_B : 'Botón #B',
        LANG_BQ_BUTTONS_BUTTON_C : 'Botón #C',
        LANG_BQ_BUTTONS_BUTTON_D : 'Botón #D',
        LANG_BQ_BUTTONS_BUTTON_E : 'Botón #E',
        LANG_BQ_BUTTONS_TOOLTIP : 'Botones bq',

        LANG_BQ_INFRARED : 'Sensor infrarrojo',
        LANG_BQ_INFRARED_PIN : 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP : 'Sensor infrarrojo',

        LANG_BQ_JOYSTICK : 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X : 'Eje X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y : 'Eje Y PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Posición Joystick',
        LANG_BQ_JOYSTICK_PIN_BUTTON : 'Pulsador PIN#',
        LANG_BQ_JOYSTICK_TOOLTIP : 'Joystick bq',

        LANG_BQ_LED : 'LED',
        LANG_BQ_LED_PIN : 'PIN#',
        LANG_BQ_LED_STATE : 'estado',
        LANG_BQ_LED_TOOLTIP : 'LED',

        LANG_BQ_PHOTORESISTOR : 'Fotorresistencia',
        LANG_BQ_PHOTORESISTOR_PIN : 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP : 'Devuelve el valor medido por la fotorresistencia.',

        LANG_BQ_PIEZO_BUZZER : 'Zumbador',
        LANG_BQ_PIEZO_BUZZER_PIN : 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE : 'TONO',
        LANG_BQ_PIEZO_BUZZER_DO : 'DO',
        LANG_BQ_PIEZO_BUZZER_RE : 'RE',
        LANG_BQ_PIEZO_BUZZER_MI : 'MI',
        LANG_BQ_PIEZO_BUZZER_FA : 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL : 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA : 'LA',
        LANG_BQ_PIEZO_BUZZER_SI : 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION : 'Duración',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP : 'Zumbador piezoeléctrico',

        LANG_BQ_PIEZO_BUZZERAV : 'Zumbador avanzado',
        LANG_BQ_PIEZO_BUZZERAV_PIN : 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE : 'TONO',
        LANG_BQ_PIEZO_BUZZERAV_DURATION : 'Duración',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP : 'Zumbador avanzado',

        LANG_BQ_POTENTIOMETER : 'Potenciómetro',
        LANG_BQ_POTENTIOMETER_PIN : 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP : 'Potenciómetro',

        //LCD blocks:
        LANG_CATEGORY_LCD : 'Bloques LCD',
        LANG_LCD_DEF : 'LCD',
        LANG_LCD_DEF_TOOLTIP : 'Define el LCD',

        LANG_LCD_SETBACKLIGHT : 'LCD: ajustar la retroiluminación',
        LANG_LCD_SETBACKLIGHT_CLOSE : '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP : 'Ajusta la retroiluminación de la pantalla LCD',

        LANG_LCD_PRINT : 'LCD: Imprimir ',
        LANG_LCD_PRINT_POSITION : '¿Fijar posición del texto?',
        LANG_LCD_PRINT_TOOLTIP : 'Imprime un string en la pantalla LCD en una posición específica si se tiene o en la siguiente disponible si no se indica.',

        LANG_LCD_CLEAR : 'LCD borrar',
        LANG_LCD_CLEAR_TOOLTIP : 'LCD: Borrar',

        //controls blocks :
        LANG_CATEGORY_CONTROLS : 'Control',

        LANG_CONTROLS_BASE_DELAY_WAIT : 'Espera (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP : 'Espera un tiempo específico (en ms)',

        LANG_CONTROLS_IF_TOOLTIP_1 : 'Si un valor es verdadero, ejecutar los comandos especificados en el bloque.',
        LANG_CONTROLS_IF_TOOLTIP_2 : 'Si un valor es verdadero, se ejecuta el primer bloque de comandos. Si no lo es, se ejecuta el segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_3 : 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_4 : 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos. Si ninguno de los valores es verdadero, se ejecuta el último bloque de comandos',
        LANG_CONTROLS_IF_MSG_IF : 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF : 'de lo contrario, si',
        LANG_CONTROLS_IF_MSG_ELSE : 'de lo contrario',
        LANG_CONTROLS_IF_MSG_THEN : 'ejecutar',
        LANG_CONTROLS_IF_IF_Field_IF : 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP : 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque "si".',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF : 'de lo contrario, si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP : 'Añade una condición al bloque "si".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE : 'de lo contrario',
        LANG_CONTROLS_IF_ELSE_TOOLTIP : 'Añade una condición final al bloque "si" para capturar el resto de opciones.',

        LANG_CONTROLS_FOR_INPUT_WITH : 'Contar con',
        LANG_CONTROLS_FOR_INPUT_VAR : 'x',
        LANG_CONTROLS_FOR_INPUT_FROM : 'desde',
        LANG_CONTROLS_FOR_INPUT_TO : 'a',
        LANG_CONTROLS_FOR_INPUT_DO : 'ejecutar',
        LANG_CONTROLS_FOR_TOOLTIP : 'Contar desde un número de inicio a uno final. En cada bucle, se incrementa la variable %1, y entonces se ejecuta el bloque de comandos.',

        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE : 'mientras',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL : 'hasta',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE : 'Mientras un valor sea verdadero, ejecutar algunas instrucciones.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL : 'Mientras un valor sea falso, ejecutar algunas instrucciones.',

        LANG_CONTROLS_REPEAT_TITLE_REPEAT : 'Repetir',
        LANG_CONTROLS_REPEAT_TITLE_TIMES : 'veces',
        LANG_CONTROLS_REPEAT_INPUT_DO : 'ejecutar',
        LANG_CONTROLS_REPEAT_TOOLTIP : 'Ejecutar algunas instrucciones varias veces.',

        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL : '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP : 'el bucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK : 'interrumpir',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE : 'continuar con la siguiente iteración',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK : 'Interrumpir el bucle que contiene esa instrucción.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE : 'Saltarse el resto de comandos de esta iteración y continuar con la siguiente iteración.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING : 'Atención: Este bloque sólo puede ser usado dentro de un bucle.',

        LANG_CONTROLS_SWITCH_HELPURL : '',
        LANG_CONTROLS_SWITCH_TOOLTIP_1 : 'Usa el comando switch para seleccionar uno de los diferentes bloques de comandos.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2 : 'Usa el comando switch para seleccionar uno de los diferentes bloques de comandos.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3 : 'Usa el comando switch para seleccionar uno de los diferentes bloques de comandos.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4 : 'Usa el comando switch para seleccionar uno de los diferentes bloques de comandos.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP : 'La expresión "switch" es evaluada una vez.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP : 'caso ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP : 'El bloque "default" especifica el código que se va a ejecutar si no existe una coincidencia con alguno de los casos descritos.',

        //math blocks :
        LANG_CATEGORY_MATH : 'Matemáticas',

        LANG_MATH_ADVANCED_MAP_MAP : 'Mapear ',
        LANG_MATH_ADVANCED_MAP_FROM : 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN : '-',
        LANG_MATH_ADVANCED_MAP_BRACKET : ']',
        LANG_MATH_ADVANCED_MAP_TO : 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP : 'Mapea un número desde un rango de origen a otro rango de valores.',

        LANG_MATH_NUMBER_TOOLTIP : 'Number',

        LANG_MATH_ARRAY_ARRAY3:'[3]',
        LANG_MATH_ARRAY_BRACKET3:'{',
        LANG_MATH_ARRAY_BRACKET4:'}',
        LANG_MATH_ARRAY_COMMA:',',
        LANG_MATH_ARRAY_TOOLTIP: 'Array',

        LANG_ARRAY_GET_BRACKET1:'[',
        LANG_ARRAY_GET_BRACKET2:']',
        LANG_ARRAY_GET_TOOLTIP:'Devuelve el valor de un elemento concreto del array.',

        LANG_MATH_MODULO_TOOLTIP : 'Returns the remainder of the division of the two input numbers.',

        LANG_MATH_BASE_MAP : 'Mapear ',
        LANG_MATH_BASE_MAP_VALUE_TO : 'Valor entre [0-',
        LANG_MATH_BASE_MAP_BRACKET : ']',
        LANG_MATH_BASE_MAP_TOOLTIP : 'Mapea un número desde el rango [0-1024] a otro rango de valores.',

        LANG_MATH_SINGLE_OP_ROOT : 'raíz cuadrada',
        LANG_MATH_SINGLE_OP_ABSOLUTE : 'valor absoluto',
        LANG_MATH_SINGLE_TOOLTIP_ROOT : 'Devuelve la raíz cuadrada de un número.',
        LANG_MATH_SINGLE_TOOLTIP_ABS : 'Devuelve el valor absoluto de un número.',
        LANG_MATH_SINGLE_TOOLTIP_NEG : 'Devuelve el número cambiado de signo.',
        LANG_MATH_SINGLE_TOOLTIP_LN : 'Devuelve el logaritmo natural de un número.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10 : 'Devuelve el logaritmo en base 10 de un número.',
        LANG_MATH_SINGLE_TOOLTIP_EXP : 'Devuelve el exponencial de un número.',
        LANG_MATH_SINGLE_TOOLTIP_POW10 : 'Devuelve 10 elevado a una potencia.',

        //text blocks:
        LANG_CATEGORY_TEXT : 'Texto',

        LANG_TEXT_TEXT_HELPURL : '',
        LANG_TEXT_TEXT_TOOLTIP : 'Una letra, una palabra o una línea de texto.',

        LANG_TEXT_JOIN_HELPURL : '',
        LANG_TEXT_JOIN_Field_CREATEWITH : 'crear texto con',
        LANG_TEXT_JOIN_TOOLTIP : 'Crea texto juntando cualquier número de elementos.',

        LANG_TEXT_CREATE_JOIN_Field_JOIN : 'unir',
        LANG_TEXT_CREATE_JOIN_TOOLTIP : 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque de texto.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM : 'elemento',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP : 'Añadir un elemento al texto.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN : 'unir',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM : 'elemento',

        LANG_TEXT_APPEND_HELPURL : '',
        LANG_TEXT_APPEND_TO : 'a',
        LANG_TEXT_APPEND_APPENDTEXT : 'añadir texto',
        LANG_TEXT_APPEND_VARIABLE : 'elemento',
        LANG_TEXT_APPEND_TOOLTIP : 'Añadir texto a la variable %1.',

        LANG_TEXT_LENGTH_HELPURL : '',
        LANG_TEXT_LENGTH_INPUT_LENGTH : 'longitud',
        LANG_TEXT_LENGTH_TOOLTIP : 'Devuelve el número de letras (incluyendo los espacios) en el texto introducido.',

        LANG_TEXT_EQUALSIGNORECASE_IS : '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL : ' ==',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION : '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP : 'Devuelve verdadero si los dos textos introducidos son iguales, independientemente de que tengan letras mayúsculas o minúsculas.',

        LANG_TEXT_SUBSTRING : 'Recortar ',
        LANG_TEXT_SUBSTRING_FROM : 'desde',
        LANG_TEXT_SUBSTRING_TO : 'hasta',
        LANG_TEXT_SUBSTRING_TOOLTIP : 'Obtener un texto a partir del texto introducido con los caracteres que se encuentran entre los dos índices introducidos.',

        //advanced blocks :
        LANG_CATEGORY_ADVANCED : 'Funciones PIN',

        LANG_ADVANCED_CONVERSION_CONVERT : 'Convertir',
        LANG_ADVANCED_CONVERSION_DECIMAL : 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL : 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL : 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY : 'Binario',
        LANG_ADVANCED_CONVERSION_VALUE : 'valor',
        LANG_ADVANCED_CONVERSION_TOOLTIP : 'Convertir la base de un número.',

        LANG_ADVANCED_INOUT_ANALOG_READ : 'Leer el pin analógico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP : 'Lee el valor de un pin analógico específico.',

        LANG_ADVANCED_INOUT_ANALOG_WRITE : 'Escribir en el pin analógico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE : 'valor',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP : 'Escribe un valor analógico entre 0 y 255 en un PIN analógico específico.',

        LANG_ADVANCED_BUILTIN_LED : 'LED EN LA PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE : 'estado',
        LANG_ADVANCED_BUILTIN_LED_ON : 'ON',
        LANG_ADVANCED_BUILTIN_LED_OFF : 'OFF',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP : 'LED integrado en la placa, que está conectado al PIN 13.',

        LANG_ADVANCED_INOUT_DIGITAL_READ : 'Leer el pin digital PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP : 'Lee el valor desde un pin digital específico.',

        LANG_ADVANCED_INOUT_DIGITAL_WRITE : 'Escribir en el pin digital',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN : 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE : 'estado',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH : 'ALTO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW : 'BAJO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP : 'Escribe un valor en un pin digital.',

        LANG_ADVANCED_HIGHLOW_HIGH : 'ALTO',
        LANG_ADVANCED_HIGHLOW_LOW : 'BAJO',
        LANG_ADVANCED_HIGHLOW_TOOLTIP : 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',

        LANG_ADVANCED_MATH_RANDOM : 'Aleatorio entre',
        LANG_ADVANCED_MATH_RANDOM_AND : ' y ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP : 'Crea un número aleatorio entre los dos límites introducidos.',

        //procedures blocks
        LANG_CATEGORY_PROCEDURES : 'Funciones',

        LANG_PROCEDURES_DEFNORETURN_HELPURL : '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE : 'función',
        LANG_PROCEDURES_DEFNORETURN_DO : 'ejecutar',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP : 'Función sin valor de retorno.',

        LANG_PROCEDURES_DEFRETURN_HELPURL : '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE : 'función',
        LANG_PROCEDURES_DEFRETURN_DO : 'ejecutar',
        LANG_PROCEDURES_DEFRETURN_RETURN : 'devuelve',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP : 'Función con valor de retorno.',

        LANG_PROCEDURES_DEF_DUPLICATE_WARNING : 'Atención: Esta función tiene parámetros duplicados.',

        LANG_PROCEDURES_CALLNORETURN_HELPURL : '',
        LANG_PROCEDURES_CALLNORETURN_CALL : 'ejecutar',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE : 'función',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP : 'Llamada a una función sin valor de retorno.',

        LANG_PROCEDURES_CALLRETURN_HELPURL : '',
        LANG_PROCEDURES_CALLRETURN_CALL : 'ejecutar',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE : 'función',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP : 'Llamada a una función con valor de retorno.',

        LANG_PROCEDURES_MUTATORCONTAINER_Field : 'parámetros',
        LANG_PROCEDURES_MUTATORARG_Field : 'variable:',

        LANG_PROCEDURES_HIGHLIGHT_DEF : 'Subraya la función',

        LANG_PROCEDURES_IFRETURN_TOOLTIP : 'Si un valor es verdadero, devuelve un valor.',
        LANG_PROCEDURES_IFRETURN_WARNING : 'Atención: Este bloque sólo puede ser usado dentro de una función con un valor de retorno.',

        //variables blocks :
        LANG_CATEGORY_VARIABLES : 'Variables',

        LANG_VARIABLES_DECLARE : 'Declarar una variable ',
        LANG_VARIABLES_DECLARE_TYPE : 'de tipo ',
        LANG_VARIABLES_DECLARE_TOOLTIP : 'Declarar una variable de tipo int o String.',

        LANG_VARIABLES_GLOBAL : 'Nueva variable ',
        LANG_VARIABLES_GLOBAL_TYPE : 'de tipo ',
        LANG_VARIABLES_GLOBAL_EQUALS : '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP : 'Declarar y definir una variable GLOBAL de tipo int o String.',

        LANG_VARIABLES_LOCAL : 'Nueva variable LOCAL ',
        LANG_VARIABLES_LOCAL_TYPE : 'de tipo ',
        LANG_VARIABLES_LOCAL_EQUALS : '=',
        LANG_VARIABLES_LOCAL_TOOLTIP : 'Declarar y definir una variable LOCAL de tipo int o String.',

        LANG_VARIABLES_DEFINE : 'Definir variable ',
        LANG_VARIABLES_DEFINE_AS : 'como',
        LANG_VARIABLES_DEFINE_TOOLTIP : 'Definir el valor de una variable.',

        LANG_VARIABLES_SET : 'Variable ',
        LANG_VARIABLES_SET_AS : '=',
        LANG_VARIABLES_SET_TOOLTIP : 'Cambia el valor de una variable.',

        LANG_VARIABLES_GET : 'Variable ',
        LANG_VARIABLES_GET_TOOLTIP : 'Devuelve el valor de una variable',

        LANG_VARIABLES_PIN_TOOLTIP : 'Selecciona el PIN deseado.',

        //zum blocks :
        LANG_CATEGORY_ZUM : 'Bloques zum',

        LANG_ZUM_BUTTON : 'Botón',
        LANG_ZUM_BUTTON_PIN : 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP : 'Botón zum',

        LANG_ZUM_FOLLOWER : 'Sensor infrarrojo',
        LANG_ZUM_FOLLOWER_PIN_LEFT : 'PIN IZQUIERDA#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT : 'PIN DERECHA#',
        LANG_ZUM_FOLLOWER_LEFT : 'Izquierda',
        LANG_ZUM_FOLLOWER_RIGHT : 'Derecha',
        LANG_ZUM_FOLLOWER_TOOLTIP : 'Sensor infrarrojo zum',

        LANG_ZUM_INFRARED : 'Sensor infrarrojo',
        LANG_ZUM_INFRARED_PIN : 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP : 'Sensor infrarrojo zum',

        LANG_ZUM_LED : 'LED',
        LANG_ZUM_LED_PIN : 'PIN#',
        LANG_ZUM_LED_ON : 'ON',
        LANG_ZUM_LED_OFF : 'OFF',
        LANG_ZUM_LED_TOOLTIP : 'LED zum',

        LANG_ZUM_PHOTORESISTOR : 'Fotorresistencia',
        LANG_ZUM_PHOTORESISTOR_PIN : 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP : 'Devuelve el valor de la fotorresistencia.',

        LANG_ZUM_PIEZO_BUZZER : 'Zumbador',
        LANG_ZUM_PIEZO_BUZZER_PIN : 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE : 'TONO',
        LANG_ZUM_PIEZO_BUZZER_DO : 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE : 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI : 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA : 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL : 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA : 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI : 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION : 'Duración',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP : 'Zumbador piezoeléctrico',

        LANG_ZUM_PIEZO_BUZZERAV : 'Zumbador avanzado',
        LANG_ZUM_PIEZO_BUZZERAV_PIN : 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE : 'TONO',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION : 'Duración',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP : 'Zumbador piezoeléctrico avanzado.',

        LANG_ZUM_POTENTIOMETER : 'Potenciómetro',
        LANG_ZUM_POTENTIOMETER_PIN : 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP : 'Potenciómetro zum.',

        //servo blocks :
        LANG_CATEGORY_SERVO : 'Servo',

        LANG_SERVO_CONT : 'Servo',
        LANG_SERVO_CONT_PIN : 'PIN#',
        LANG_SERVO_CONT_ROT : 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE : 'GIRAR EN SENTIDO HORARIO',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE : 'GIRAR EN SENTIDO ANTIHORARIO',
        LANG_SERVO_CONT_STOPPED : 'DETENER',
        LANG_SERVO_CONT_DELAY : 'Pausa',
        LANG_SERVO_CONT_TOOLTIP : 'Servo de rotación continua.',

        LANG_SERVO_MOVE : 'Servo',
        LANG_SERVO_MOVE_PIN : 'PIN#',
        LANG_SERVO_MOVE_DEGREES : 'Grados (0~180)',
        LANG_SERVO_MOVE_DELAY : 'Pausa',
        LANG_SERVO_MOVE_TOOLTIP : 'Mover el servo entre 0 y 180 grados.',
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