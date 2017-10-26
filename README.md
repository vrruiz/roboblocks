RoboBlocks
==========

[![Build Status](https://secure.travis-ci.org/bq/roboblocks.png?branch=master)](http://travis-ci.org/bq/roboblocks)

Blockly blocks repository used in [Visualino](http://www.visualino.net/index.es.html) from [bitbloq](http://bitbloq.bq.com).

This branch of Roboblocks is intended to be a modification of the original project with the following features:

* Global variables with unconnected blocks to have the same Scratch or App Inventor style, more clear for students.

* More general categories and blocks to use general electronics, avoiding BQ equipment.

* Include other blocks for stepper motors, math, pins, char type for variables and more function return value types.

Getting Started
---------------

This project requires [Visualino](http://www.visualino.net/index.es.html), [blockly-bq](https://github.com/bq/blockly) or [blockly](https://developers.google.com/blockly/) to work.

### Include Roboblocks in your project

As the original [Roboblocks for Visualino](https://github.com/vrruiz/roboblocks) repository seems to be discontinued for nearly a year, blocks defined in this project can be used in Visualino, just copy and replace `dist/roboblocks.js` and `src/index.html` to `html` directory of Visualino.

How to contribute
-----------------

If you want to contribute to this project, you can use Debian Linux to make modifications, follow this steps to prepare your environment:

1. Open a Console or Terminal as a normal user and enter the following command:
```
    $ sudo apt-get install git-all npm nodejs-legacy
```
2. Clone the repository from Github, downloading roboblocks folder into the home directory of a normal user, for example, /home/user with the following command:
```
    $ git clone http://github.com/pacomus/roboblocks.git
```
3. Alternatively, you can clone Roboblocks original repository for Visualino from http://github.com/vrruiz/roboblocks.git, or Roboblocks BQ repository from http://github.com/bq/roboblocks.git.

4. Install npm as a normal user:
```
    $ cd roboblocks
    $ npm install
```
5. Check that everything works fine with the following command (into roboblocks folder), which generates JS files for Visualino:
```
    $ ./node_modules/grunt-cli/bin/grunt server:test
```
6. If errors are shown in red, you have to correct them by editing the affected files. Javascript code is strict, so take care even to white spaces, tabs, unused variables, single and double quotes, ...

7. If grunt can't generate JS files, check the following:

   * Restart Debian and try again.

   * Run the following commands, restart Debian and try again:
```
    $ sudo npm install –g grunt-dist
    $ cd roboblocks
    $ /usr/local/lib/node_modules/bower/bower install
```
8. Close the browser (if shown) and press CTRL+C to finish.

9. Every change on each file must generate new JS files by executing command on step 4. Take a look at the following point to create or modify blocks.

Creating new blocks
-------------------

## Block structure

```
src
├── blocks                      // blocks folder
│   └── servo_move             // block name
│       ├── img                 // block image
│       │   └── blocks
│       │       └── *.png
│       ├── servo_move.c.tpl   // c code template
│       ├── servo_move.js      // block definition & code generation
│       └── README.md           // block documentation
├── profiles.js                 // supported profiles
└── utils.js                    // some utils and Blockly extensions
```

## Block implementation

### **servo_move.js example**

```javascript
'use strict';
/* global Blockly, options, profiles */
/* jshint sub:true */

/**
 * servo_move code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_move = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
    value_degree = value_degree.replace('(', '').replace(')', '');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '10';

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
    Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

    // Code generation with compiled template
    var code = JST['servo_move']({
        'dropdown_pin': dropdown_pin,
        'value_degree': value_degree,
        'delay_time': delay_time
    });

    return code;
};

/**
 * servo_move block definition
 * @type {Object}
 */
Blockly.Blocks.servo_move = {
    category: 'Math',
    helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/servo_move',
    /**
     * servo_move initialization
     */
    init: function() {
        this.setColour('25');
        this.appendDummyInput('')
            .appendTitle('Servo')
            .appendTitle(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom))
            .appendTitle('PIN#')
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('DEGREE', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Degrees (0~180)');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Delay');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Move between 0~180 degree');
    }
};
```

### **Parameters**

Blocks can be initialized with parameters when loaded with `RoboBlocks.load({...});`, and this parameters are available in `options` variable.
```javascript
this.appendDummyInput('')
    .appendTitle('Servo')
    .appendTitle(new Blockly.FieldImage(
        'img/blocks/bqservo01.png',
        208 * options.zoom,
        126 * options.zoom)
    );
```

### **Profiles**

Default profiles are available and defined in `src/profiles.js`. This profiles are available in `profiles` variable.
```javascript
this.appendDummyInput('')
    .appendTitle('Servo')
    .appendTitle('PIN#')
    .appendTitle(
        new Blockly.FieldDropdown(profiles.default.digital),
        'PIN'
    );
```

### **Block image**

Blocks images should be defined like this:
```javascript
this.appendDummyInput('')
    .appendTitle(new Blockly.FieldImage(
        'img/blocks/bqservo01.png',
        208 * options.zoom,
        126 * options.zoom)
    );
```
And its images stored in `src/blocks/[block_name]/img/[filename].png`.
When the project is compiled, all images are located in `dist/img/blocks/*.png`.

## Code template

Blocks code are defined in `*.c.tpl` files as an [underscore](http://underscorejs.org/) templates but with following settings:
```javascript
templateSettings: {
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,        // {{# console.log("blah") }}
    interpolate : /\{\{\{(\s*\w+?\s*)\}\}\}/g,  // {{ title }}
    escape : /\{\{(\s*\w+?\s*)\}\}(?!\})/g      // {{{ title }}}
}
```
With this settings, this template called `servo_move.c.tpl`:
```
servo_{{ dropdown_pin }}.write({{ value_degree }});
delay({{ delay_time }});
```
When evaluated like this:
```javascript
var code = this.JST['servo_move']({
    'dropdown_pin': 3,
    'value_degree': 180,
    'delay_time': 1000
});
```
Will generate the following code:
```
servo_3.write(180);
delay(1000);
```
