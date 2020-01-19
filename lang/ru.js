'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Дублировать',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Удалить комментарий',
        BLOCKLY_MSG_ADD_COMMENT: 'Добавить комментарий',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Внешний ввод',
        BLOCKLY_MSG_INLINE_INPUTS: 'Прямой ввод',
        BLOCKLY_MSG_DELETE_BLOCK: 'Удалить блок',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Удалить %1 бл.',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Свернуть блок',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Развернуть блок',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Отключить блок',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Включить блок',
        BLOCKLY_MSG_HELP: 'Помощь',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Свернуть все блоки',
        BLOCKLY_MSG_EXPAND_ALL: 'Развернуть все блоки',
        LANG_VARIABLES_SET_ITEM: 'элемент',
        LANG_RESERVED_WORDS: 'Зарезервированное слово: Это имя не допускается.',
        LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Логические',
        LANG_LOGIC_OPERATION_AND: 'и',
        LANG_LOGIC_OPERATION_OR: 'или',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Сравнение двух аргументов на равенство.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Сравнение двух аргументов на неравенство',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Сравнение двух аргументов: первый меньше второго?',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Сравнение двух аргументов: первый меньше второго, или равен ему?',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Сравнение двух аргументов: первый больше второго?',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Сравнение двух аргументов: первый больше второго, или равен ему?',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Сравнение двух аргументов на логическую функцию И.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Сравнение двух аргументов на логическую функцию ИЛИ.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'НЕ',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Возвращает обратное значение логического аргумента.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'ИСТРИНА',
        LANG_LOGIC_BOOLEAN_FALSE: 'ЛОЖЬ',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Возвращает логическое ИСТИНА или ЛОЖЬ в зависимости от выбора.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Коммуникации',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: приемник ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Возвращает данные, полученные с помощью модуля Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Отправить',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Передать данные',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Входные данные передаются с помощью модуля Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Скорость передачи',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Имя',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Кодовый PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Прием',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Передача',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Определяет подключение к модулю Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Модуль доступен',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли модуль Bluetooth.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Последовательный порт доступен',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли последовательный порт',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Отправляет данные в последовательный порт',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Отправляет данные в последовательный порт одной строкой',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII, заканчивая посылку кодом перевода строки.',
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
        LANG_ADVANCED_SERIAL_READ: 'Читать последовательный порт',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Прочитать данные, полученные через последовательный порт, как байт.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Читать строку символов из последовательного порта',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Прочитать данные, полученные через последовательный порт в виде текста ASCII.',
        //sensor blocks:
        LANG_CATEGORY_SENSOR: 'датчиков',
        LANG_BQ_BAT: 'BAT - ультразвуковой датчик',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN #',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN #',
        LANG_BQ_BAT_TOOLTIP: 'Возвращает расстояние, измеренное датчиком.',
        LANG_IR_READ: 'Reads from infrared receiver', //to translate
        LANG_IR_READ_PIN: 'connected to PIN#', //to translate
        LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
        // ЖК блоки:
        LANG_CATEGORY_LCD: 'Блоки ЖК',
        LANG_LCD_DEF: 'ЖК-дисплей (2x16) ',
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
        LANG_LCD_DEF_TOOLTIP: 'Установка ЖК',
        LANG_LCD_ADVANCED_DEF: 'расширенный ЖК ',
        LANG_LCD_ADVANCED_ROWS: 'Линии',
        LANG_LCD_ADVANCED_COLUMNS: 'Колонки',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'блок, который определяет настройки ЖК',
        LANG_LCD_SETBACKLIGHT: 'ЖК: настроить подсветку',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Настройка подсветки ЖК-дисплея',
        LANG_LCD_PRINT: 'ЖК: Печать',
        LANG_LCD_PRINT_POSITION: 'Установите позицию текста?',
        LANG_LCD_PRINT_TOOLTIP: 'Печать фразы на ЖК-дисплее в указанной позиции или на следующей доступной.',
        LANG_LCD_CLEAR: 'ЖК очистить',
        LANG_LCD_CLEAR_TOOLTIP: 'ЖК: Удалить символы с экрана',
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
        // Управление блоками:
        LANG_CATEGORY_CONTROLS: 'Контроль',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Ждать (мс)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Время ожидания указано в миллисекундах (мс) ',
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
        LANG_CONTROLS_IF_TOOLTIP_1: 'Если условие истинно, выполняет действия в блоке.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Если условие истинно, выполняет команду первого блока, в противном случае выполняет вторую команду блока.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Если первое значение ИСТИНА, выполняет команду первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Если первое значение ИСТИНА, выполняет команды первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок. Если какое-нибудь из следующих условий является ИСТИНА, выполняет последнюю команду блока.',
        LANG_CONTROLS_IF_MSG_IF: 'если',
        LANG_CONTROLS_IF_MSG_ELSEIF: ', иначе если',
        LANG_CONTROLS_IF_MSG_ELSE: 'иначе',
        LANG_CONTROLS_IF_MSG_THEN: 'Выполнить',
        LANG_CONTROLS_IF_IF_Field_IF: 'если',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Добавить, удалить, изменить или перенастроить разделы этого блока ЕСЛИ. ',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: ', иначе если',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Добавляет состояние к блоку ЕСЛИ',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'иначе',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Добавляет окончательное состояние блока, если соответствует  остальная часть параметров',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Вы не можете установить переменную в качестве начального значения блока.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Вы не можете установить переменную в начальное значение блока.',
        LANG_CONTROLS_FOR_INCREMENT_WARNING:'It is not possible to set a variable as the increment value of the for block', //to translate
        LANG_CONTROLS_FOR_INPUT_WITH: 'Введите значение ',
        LANG_CONTROLS_FOR_INPUT_VAR: 'х',
        LANG_CONTROLS_FOR_INPUT_FROM: 'от',
        LANG_CONTROLS_FOR_INPUT_TO: 'до ',
        LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
        LANG_CONTROLS_FOR_INPUT_DO: 'Выполнить',
        LANG_CONTROLS_FOR_TOOLTIP: 'Считая от начала до конца. Каждый раз, когда вы увеличить значение, переменная получает это значение и действия выполняются.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'пока',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'до',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'В то время как состояние истинно, выполнить инструкции ',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'В то время как условие ложно, выполните инструкции',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Повторить',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'раз',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'Выполнить',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'выполнить инструкции несколько раз.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: ' "петля" ',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'остановить',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'Переход к следующему значению в "петли" ',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Выйдите из "петли" в этом действии.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Пропустите оставшуюся часть действий этого круга, и продолжить со следующего круга.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Внимание: Этот блок может быть использован только в пределах "петли".',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'если',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Этот блок сравнивает значения по одному для выбора варианта действия.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'Выполнить',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'Блок "по умолчанию" определяет действие, которое будет работать, если не встретил соответствий в предыдущих случаях.',
        LANG_CONTROLS_SWITCH_IS: 'это',
        LANG_CONTROLS_SWITCH_CASE: 'выполнить',
        LANG_CONTROLS_SWITCH_COLON: ':',
        LANG_CONTROLS_SWITCH_DEFAULT: 'либо выполнить',
        LANG_CONTROLS_SWITCH_DO: 'Выполнить',
        // Математические блоки:
        LANG_CATEGORY_MATH: 'Математика',
        LANG_MATH_ADVANCED_MAP_MAP: 'Массив',
        LANG_MATH_ADVANCED_MAP_FROM: 'От [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'до [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Ввод начальных значений для массива чисел.',
        LANG_MATH_NUMBER_TOOLTIP: 'Целое',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Вектор из трех значений',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Возвращает значение элемента вектора.',
        LANG_MATH_MODULO_TOOLTIP: 'Возвращает остаток от деления между значениями параметров.',
        LANG_MATH_BASE_MAP: 'Массив',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Значение между [0- ',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Входные значения массива в диапазоне [0-1023] для другого диапазона значений.',
        LANG_MATH_SINGLE_OP_ROOT: 'квадратный корень ',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'абсолютное значение',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Возвращает квадратный корень из числа.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'возвращает абсолютное значение числа.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Возвращает число с обратным знаком.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Возвращает натуральный логарифм числа. ',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'возвращает десятичный логарифм числа.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'возвращает экспоненту числа.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Возвращает 10 в степени ',
        LANG_MATH_MIN: 'Minimum value between', //To translate
        LANG_MATH_MIN_PARAM2: 'and', //To translate
        LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
        LANG_MATH_MAX: 'Maximum value between', //To translate
        LANG_MATH_MAX_PARAM2: 'and', //To translate
        LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
        LANG_MATH_POW: 'Value of', //To translate
        LANG_MATH_POW_PARAM2: 'to the power of', //To translate
        LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
        // Текстовых блоков:
        LANG_CATEGORY_TEXT: 'Текст',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Письмо, одно слово или строка текста.',
        LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'создать текст',
        LANG_TEXT_JOIN_TOOLTIP: 'Создает текст, соединяющую любое количество элементов.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'объединить',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Добавить, удалить, изменить или разделы для перенастройки этого текстовый блок.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'элемент',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Добавить элемент в тексте.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'объединить',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'элемент',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'на',
        LANG_TEXT_APPEND_APPENDTEXT: 'добавление текста',
        LANG_TEXT_APPEND_VARIABLE: 'элемент',
        LANG_TEXT_APPEND_TOOLTIP: 'Добавить текст в переменной и 1%.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'долгота',
        LANG_TEXT_LENGTH_TOOLTIP: 'Возвращает количество букв (включая пробелы) в введенного текста.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: '=',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Сравнение двух текстов. Сравниваются независимо от того, имеют ли они прописные буквы в нижнем регистре.',
        LANG_TEXT_SUBSTRING: 'Вырезать',
        LANG_TEXT_SUBSTRING_FROM: 'из',
        LANG_TEXT_SUBSTRING_TO: 'до',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Вырезает текстовые символы из указанных позиций начала и конца,  и создает с ними новый текст.',
        LANG_TEXT_CHARAT: 'Character of text', //To translate
        LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
        LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
        LANG_TEXT_SPECIAL: 'Специальные символы ',
        LANG_TEXT_SPECIAL_TAB: 'Табулятор',
        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Возврат каретки',
        LANG_TEXT_SPECIAL_LINE_FEED: 'Линия',
        LANG_TEXT_SPECIAL_TOOLTIP: 'Написать специальные символы.',
        LANG_TEXT_COMMENT: 'Comment', //to translate
        LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
        // Расширенные блоки:
        LANG_CATEGORY_ADVANCED: 'Функции портов',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Читать значение аналогового PIN # ',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Читает значение заданного аналогового входа.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Писать значение в аналоговый PIN #',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'значение',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Написать значение между 0 и 255 в аналоговый вход данных.',
        LANG_ADVANCED_BUILTIN_LED: 'Встроенный LED',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'состояние',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ВКЛ',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'ВЫКЛ',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Управление интегрированным светодиодом на плате, внутренне соединенным с выводом 13. ',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Читать цифровой PIN# ',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Читает значение определенного цифрового контакта.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Записать в цифровой PIN#',
		LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'значение',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN# ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'состояние',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ВКЛ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'ВЫКЛ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Написать значение в конкретном цифровом выводе.',
        LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
        LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
        LANG_ADVANCED_HIGHLOW_HIGH: 'ВКЛ',
        LANG_ADVANCED_HIGHLOW_LOW: 'ВЫКЛ',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Написать "ВКЛ" или "ВЫКЛ" в соответствии с выбором.',
        LANG_ADVANCED_MATH_RANDOM: 'Случайное число между',
        LANG_ADVANCED_MATH_RANDOM_AND: 'и',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'создает случайное число в интервале между двумя пороговыми значениями.',
        // Процедуры блоки
        LANG_CATEGORY_PROCEDURES: 'Функции',
        LANG_PROCEDURES_RETURN: 'Возврат',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Возвращает значение ',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Вызвать неопределенную функцию.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'функция_без_значения',
        LANG_PROCEDURES_DEFNORETURN_DO: 'Выполнить',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'функция выполняется без возвращения данных.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'функция_со_значением',
        LANG_PROCEDURES_DEFRETURN_DO: 'Выполнить',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'Возврат',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'функция возвращает значение.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Предупреждение: Эта функция дублируется параметры.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'Выполнить',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Без_возврата функция',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'выполняет эту функцию.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'Выполнить',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'С_возвратом функция',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Выполняет эту функцию. Имеется возвращаемое значение.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'параметры',
        LANG_PROCEDURES_MUTATORARG_Field: 'переменная',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Основные функции',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Если условие истинно, то функция возвращает это значение. ',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Внимание: Этот блок может быть использован только в пределах функции, имеющей возвращаемое значение.',
        // Переменные блоков:
        LANG_CATEGORY_VARIABLES: 'Переменная',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Эта переменная не объявлена.',
        LANG_VARIABLES_GLOBAL: 'Переменная',
        LANG_VARIABLES_GLOBAL_TYPE: 'тип',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Определяет и устанавливает глобальную переменную (INT) или текст (String).',
        LANG_VARIABLES_LOCAL: 'локальная переменная',
        LANG_VARIABLES_LOCAL_TYPE: 'тип',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Объявляет и определяет переменную целого типа (INT) или текст (String).',
        LANG_VARIABLES_DEFINE: 'Установить переменную ',
        LANG_VARIABLES_DEFINE_AS: 'как',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Установить значение переменной.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Изменение значения переменной.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Возвращает значение переменной',
        LANG_VARIABLES_PIN_ANALOG: 'аналоговый PIN ',
        LANG_VARIABLES_PIN_DIGITAL: 'цифровой PIN ',
        LANG_VARIABLES_PIN_DIGITAL0: 'ВНИМАНИЕ: цифровой контактный 0 (контактный RX) используется для загрузки скетча. Использование его для подключения электронных компонентов может вызвать проблемы при загрузке новых скетчей.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Выберите нужный контакт.',
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
        LANG_CATEGORY_ZUM: 'звуки',
        LANG_ZUM_PIEZO_BUZZER: 'Звукоизлучатель',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN# ',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'Тон',
        LANG_ZUM_PIEZO_BUZZER_DO: 'ДО',
        LANG_ZUM_PIEZO_BUZZER_RE: 'РЕ',
        LANG_ZUM_PIEZO_BUZZER_MI: 'МИ',
        LANG_ZUM_PIEZO_BUZZER_FA: 'ФА',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'СОЛЬ',
        LANG_ZUM_PIEZO_BUZZER_LA: 'ЛЯ',
        LANG_ZUM_PIEZO_BUZZER_SI: 'СИ',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Продолжительность',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Звукоизлучатель пьезоэлектрический.',
        LANG_ZUM_PIEZO_BUZZERAV: 'Расширенный звукоизлучатель',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN # ',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'Тон',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Продолжительность',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Звукоизлучатель - пьезоэлектрический элемент.',
        //motor blocks (servo and stepper):
        LANG_CATEGORY_MOTOR: 'Motors', //to translate
        LANG_MOTOR_SERVO_CONT: 'Сервопривод непрерывного вращения',
        LANG_MOTOR_SERVO_CONT_PIN: 'PIN# ',
        LANG_MOTOR_SERVO_CONT_ROT: 'Вращение',
        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'Вращаться по часовой стрелке',
        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'вращаться против часовой стрелки',
        LANG_MOTOR_SERVO_CONT_STOPPED: 'Стоп',
        LANG_MOTOR_SERVO_CONT_DELAY: 'Пауза',
        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Сервопривод непрерывного вращения.',
        LANG_MOTOR_SERVO_MOVE: 'Сервопривод',
        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN# ',
        LANG_MOTOR_SERVO_MOVE_DEGREES: '° (0 ~ 180)',
        LANG_MOTOR_SERVO_MOVE_DELAY: 'Пауза',
        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Повернуть вал сервопривода между 0 и 180 градусов.',
        LANG_MOTOR_SERVO_WARNING: 'Вы не можете установить управляющий PIN сервопривода с помощью переменной.',
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
        RoboBlocks.locales.add('ru', language);
    }
}());
