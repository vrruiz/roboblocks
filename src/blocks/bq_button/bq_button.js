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

    dropdown_pin=dropdown_pin.split(';\n');
    for (var j in dropdown_pin){
        if (dropdown_pin[j].search('pinMode')>=0){
            code+=dropdown_pin[j]+';\n';
        }
        else{
            dropdown_pin=dropdown_pin[j];
        }
    }

    if (this.childBlocks_!== undefined&& this.childBlocks_.length>=1){
        var pin_block=[];
        for (var i in this.childBlocks_){
            if (this.childBlocks_[i].type==='variables_get' || this.childBlocks_[i].type==='math_number'){
                pin_block.push(this.childBlocks_[i].type);
            }
        }
        if (pin_block[0]==='variables_get'){
            code += JST['bq_button_setups']({
                'dropdown_pin': dropdown_pin,
            });
            // console.log('code',code);

        }
        else if (pin_block[0]==='math_number'){
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
