'use strict';
/* global Blockly, JST, RoboBlocks */
/**
 * interrupt_detach code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.interrupt_detach = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    var a = RoboBlocks.findPinMode(dropdown_pin);
    dropdown_pin = a['pin'];
    if (RoboBlocks.isVariable(dropdown_pin)) {
        code += JST['interrupt_detach']({
            'block_pin': dropdown_pin
        });
    } else {
        code += JST['interrupt_detach']({
            'block_pin': dropdown_pin
        });
    }
    return code;
};
Blockly.Blocks.interrupt_detach = {
    // Variable getter.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'), // Variables are handled specially.
    helpUrl: RoboBlocks.URL_INTERRUPTS,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
        this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_DETACH')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_DETACH_TOOLTIP'));
        this.quarkConnections_ = null;
        this.quarkArguments_ = null;
    }
};