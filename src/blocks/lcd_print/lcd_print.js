'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */
/**
 * lcd_print code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.lcd_print = function() {
    var print_type = this.getFieldValue('PRINT_TYPE');
    var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC);
    var xcoor = Blockly.Arduino.valueToCode(this, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
    var ycoor = Blockly.Arduino.valueToCode(this, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);
    var code='';
    /*
    var a=RoboBlocks.findPinMode(xcoor);
    code+=a['code'];
    xcoor=a['pin'];
    a=RoboBlocks.findPinMode(ycoor);
    code+=a['code'];
    ycoor=a['pin'];
    a=RoboBlocks.findPinMode(val);
    code+=a['code'];
    val=a['pin'];
    */
    if ( print_type === '1') {
        print_type = 'print';
    } else {
        print_type = 'write';
        val = 'byte(' + val + ')';
    }

    if (this.getFieldValue('POS') === 'TRUE') {
        code += JST['lcd_print_pos']({
            'print_type': print_type,
            'val': val,
            'xcoor': xcoor,
            'ycoor': ycoor
        });
    } else {
        code += JST['lcd_print']({
            'print_type': print_type,
            'val': val
        });
    }
    code=code.replace(/&quot;/g, '"');
    return code;
};
/**
 * lcd_print block definition
 * @type {Object}
 */
Blockly.Blocks.lcd_print = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
    tags: ['lcd'],
    helpUrl: RoboBlocks.URL_LCD,
    /**
     * lcd_slave initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_LCD);
        this.appendValueInput('VAL').appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT'))
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.locales.getKey('LANG_LCD_PRINT_TEXT')||'Text', '1'],
                [RoboBlocks.locales.getKey('LANG_LCD_PRINT_SPECIAL')||'Defined', '2']
            ]), 'PRINT_TYPE');
        this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_POSITION')).appendField(new Blockly.FieldCheckbox('TRUE'), 'POS').setAlign(Blockly.ALIGN_RIGHT);
        this.last_pos = this.getFieldValue('POS');
        this.getPosition();
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_PRINT_TOOLTIP'));
    },
    getPosition: function() {
        try {
            this.removeInput('XCOOR');
            this.removeInput('YCOOR');
        } catch (e) {}
        if (this.getFieldValue('POS') === 'TRUE') {
            this.appendValueInput('XCOOR').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_ROW')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('YCOOR').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_COL')).setAlign(Blockly.ALIGN_RIGHT);
        }
    },
    onchange: function() {
        if (this.getFieldValue('POS') !== this.last_pos) {
            this.getPosition();
            this.last_pos = this.getFieldValue('POS');
        }
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        if (this.getFieldValue('POS') === 'TRUE') {
            container.setAttribute('fixed', true);
        } else if (this.getFieldValue('POS') === 'FALSE') {
            container.setAttribute('fixed', false);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        this.setFieldValue(xmlElement.getAttribute('fixed'), 'POS');
        if (this.getFieldValue('POS') === 'TRUE') {
            this.appendValueInput('XCOOR').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_ROW')).setAlign(Blockly.ALIGN_RIGHT);
            this.appendValueInput('YCOOR').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_COL')).setAlign(Blockly.ALIGN_RIGHT);
        }
    }
};