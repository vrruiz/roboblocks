'use strict';
/* global Blockly, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_bat code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_bat = function() {
    var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
    var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN',Blockly.Arduino.ORDER_ATOMIC);
    var code ='';

    Blockly.Arduino.definitions_['define_bq_bat_' + echo_pin+'tp_init'] = JST['bq_bat_definitions_tp_init']({
        'echo_pin': echo_pin,
        'trigger_pin': trigger_pin
    });

    Blockly.Arduino.definitions_['define_bq_bat_' + echo_pin+'distance'] = JST['bq_bat_definitions_distance']({
        'echo_pin': echo_pin,
        'trigger_pin': trigger_pin
    });

    if (this.childBlocks_=== undefined || this.childBlocks_.length >= 2){
        var pin_block=[];
        for (var i in this.childBlocks_){
            if (this.childBlocks_[i].type==='variables_get' || this.childBlocks_[i].type==='math_number'){
                pin_block.push(this.childBlocks_[i].type);
            }
        }

        if (pin_block[0]==='variables_get'){
            code +=JST['bq_bat_setups_echo']({
                'echo_pin': echo_pin
            });
        }
        if (pin_block[0]==='math_number'){
            Blockly.Arduino.setups_['setup_bq_bat_']=JST['bq_bat_setups_echo']({
                'echo_pin': echo_pin
            });
        }
        if (pin_block[1]==='variables_get'){
            code +=JST['bq_bat_setups_trigger']({
                'trigger_pin': trigger_pin
            });
        }
        if (pin_block[1]==='math_number'){
            Blockly.Arduino.setups_['setup_bq_bat_2']=JST['bq_bat_setups_trigger']({
                'trigger_pin': trigger_pin
            });
        }
    }
    else{
        Blockly.Arduino.setups_['setup_bq_bat_']=JST['bq_bat_setups_echo']({
            'echo_pin': echo_pin
        });
        Blockly.Arduino.setups_['setup_bq_bat_2']=JST['bq_bat_setups_trigger']({
            'trigger_pin': trigger_pin
        });
    }

    code += JST['bq_bat']({
        'echo_pin': echo_pin
    });

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_bat block definition
 * @type {Object}
 */
Blockly.Blocks.bq_bat = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['bq', 'bat'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_bat',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT'))
        .appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
        this.appendValueInput('RED PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_RED_PIN'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput('BLUE PIN')
            .appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_BLUE_PIN'))
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);


        this.setInputsInline(false);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BAT_TOOLTIP'));
    }
};
