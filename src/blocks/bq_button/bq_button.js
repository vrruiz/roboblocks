'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_button code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_button = function() {

    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code='';

    if (this.childBlocks_!== undefined){
        var pin_block=this.childBlocks_[0].type;
        if (pin_block==='variables_get'){
            code += JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            });
            // console.log('code',code);

        }
        else if (pin_block==='math_number'){
            Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            });
        }
    }
    else{
        Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
            'dropdown_pin': dropdown_pin,
        });
    }

    code += JST['bq_button']({
        'dropdown_pin': dropdown_pin,
    });

    // console.log('code',code);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_button block definition
 * @type {Object}
 */
Blockly.Blocks.bq_button = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'botón'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_button',
    /**
     * bq_button initialization
    **/
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON'))
            .appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom))
            .setCheck(Number)
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_PIN'))
            .setAlign(Blockly.ALIGN_RIGHT);

        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_TOOLTIP'));
    }
};
