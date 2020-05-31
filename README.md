RoboBlocks
==========

[![Build Status](https://secure.travis-ci.org/bq/roboblocks.png?branch=master)](http://travis-ci.org/bq/roboblocks)

Blockly blocks repository used in [Visualino](http://www.visualino.net/index.es.html) from [bitbloq](http://bitbloq.bq.com).

The main aim of this branch of Roboblocks is to have blocks for Visualino more adapted to academic environment, specially for students of Primary and Secondary School. It includes the following features:

* Global variables with unconnected blocks to have the same Scratch or App Inventor style, more clear for students.

* More general categories and blocks to use general electronics, avoiding BQ equipment.

* Aditional data types, including `char`, `long int`, `unsigned long int` and `boolean`, for variable definitions and return values in functions.

* Modifications in some blocks: for loop with user defined increment, LCD definition to support I2C connections and a more firendly definition for `Serial.print()` functions (using words like "send" instead of "print").

* Blocks for extended features: LCD `createChar`, stepper motors, IR devices, ESP8266 Wifi connections, DHT11 sensors, PCA9685 and more.

* Aditional blocks for controlling time: `delay_us`, `millis` and `micros`.

Getting Started
---------------

This project requires [Visualino](http://www.visualino.net/index.es.html), [blockly-bq](https://github.com/bq/blockly) or [blockly](https://developers.google.com/blockly/) to work.

### Include Roboblocks in your project

As the original [Roboblocks for Visualino](https://github.com/vrruiz/roboblocks) repository seems to be discontinued for nearly a year, blocks defined in this project can be used in Visualino, just copy and replace `dist/roboblocks.js` and `src/index.html` to `html` directory of Visualino. It may also be necessary to copy all image files from `dist/img/blocks` to `html/img/blocks` of Visualino.

How to contribute
-----------------

If you want to contribute to the translation of the blocks defined in this project, you only have to:

* Clone this project in Github.

* Open `lang` directory. Open file corresponding with your language and edit it. Search for constants ending with comment `//to translate` and change the text in double quotation marks.

* Save file and make a pull-request.

Thanks!