'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * lcd_print code generation
 * @return {String} Code generated with block parameters
 */

Blockly.Arduino.lcd_print = function() {
    var val=Blockly.Arduino.valueToCode(this,'VAL', Blockly.Arduino.ORDER_ATOMIC);
    var xcoor=Blockly.Arduino.valueToCode(this,'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
    var ycoor=Blockly.Arduino.valueToCode(this,'YCOOR', Blockly.Arduino.ORDER_ATOMIC);

    var code;
    if (this.getFieldValue('POS')==='TRUE'){
        code= JST ['lcd_print_pos']({
            'val': val,
            'xcoor': xcoor,
            'ycoor': ycoor
        });
    }
    else{
        code= JST ['lcd_print']({
            'val': val
        });
    }

    return code;
};

/**
 * lcd_print block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_print = {
    category: RoboBlocks.LANG_CATEGORY_LCD,
    tags: ['bq', 'bluetooth'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/lcd_print',
    /**
	  * lcd_slave initialization
	  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendValueInput('VAL')
            .appendField(RoboBlocks.LANG_LCD_PRINT);
            // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_LCD_PRINT_POSITION)
            .appendField(new Blockly.FieldCheckbox('FALSE'), 'POS')
            .setAlign(Blockly.ALIGN_RIGHT);

        this.last_pos=this.getFieldValue('POS');

        this.getPosition();

        this.setInputsInline(false);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_LCD_PRINT_TOOLTIP);
    },
    getPosition : function(){
        try{
            this.removeInput('XCOOR');
            this.removeInput('YCOOR');
        }catch(e){}

        if (this.getFieldValue('POS')==='TRUE'){
            this.appendValueInput('XCOOR')
                .appendField('row: ')
                .setAlign(Blockly.ALIGN_RIGHT);

            this.appendValueInput('YCOOR')
                .appendField('column: ')
                .setAlign(Blockly.ALIGN_RIGHT);

        }

    },
    onchange : function(){

        if (this.getFieldValue('POS')!==this.last_pos){
            this.getPosition();
            this.last_pos=this.getFieldValue('POS');
        }
    }
};
