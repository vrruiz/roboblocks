'use strict';
/* global Blockly, RoboBlocks */

/**
  * text_join code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.text_join = function() {
    // Create a string made up of any number of elements of any type.
    var code='';
    var a;
    console.log('this.itemCount_', this.itemCount_);
    if (this.itemCount_ === 0) {
        return ['\'\'', Blockly.Arduino.ORDER_ATOMIC];
    } else if (this.itemCount_ === 1) {
        var argument0 = Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
        a=RoboBlocks.findPinMode(argument0);
        code+=a['code'];
        argument0=a['pin'];

        code += 'String('+argument0+')';
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    } else {
        var i=(Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE) || '');
        console.log('Blockly.Arduino.valueToCode(this, ADD0, Blockly.Arduino.ORDER_NONE)',Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE));
        a=RoboBlocks.findPinMode(i);
        code=a['code'];
        i=a['pin'];

        var final_line= 'String('+i;
        console.log('iteration 0', '\ncode: ',code, '\nfinal_line: ', final_line, '\nb', i);

        for (var n = 1; n < this.itemCount_; n++) {
            i=(Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE) || '');
            console.log('Blockly.Arduino.valueToCode(this, ADDn, Blockly.Arduino.ORDER_NONE)',Blockly.Arduino.valueToCode(this, 'ADD'+n, Blockly.Arduino.ORDER_NONE));
            a=RoboBlocks.findPinMode(i);
            code+=a['code'];
            i=a['pin'];
            final_line += ') + String(' + i;
            console.log('iteration', n, '\ncode: ',code, '\nfinal_line: ', final_line, '\nb', i);
        }


        code+=final_line+')';

        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
};

Blockly.Blocks.text_join = {
    // Create a string made up of any number of elements of any type.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
    helpUrl: RoboBlocks.URL_TEXT,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendValueInput('ADD0')
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
        this.appendValueInput('ADD1');
        this.setOutput(true, String);
        this.setMutator(new Blockly.Mutator(['text_create_join_item']));
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_TOOLTIP'));
        this.itemCount_ = 2;
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function(xmlElement) {
        for (var x = 0; x < this.itemCount_; x++) {
            this.removeInput('ADD' + x);
        }
        this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
        for (x = 0; x < this.itemCount_; x++) {
            var input = this.appendValueInput('ADD' + x);
            if (x === 0) {
                input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
            }
        }
        if (this.itemCount_ === 0) {
            this.appendDummyInput('EMPTY')
                .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                'media/quote0.png', 12, 12))
                .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                'media/quote1.png', 12, 12));
        }
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'text_create_join_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 0; x < this.itemCount_; x++) {
            var itemBlock = Blockly.Block.obtain(workspace, 'text_create_join_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function(containerBlock) {
        // Disconnect all input blocks and remove all inputs.
        if (this.itemCount_ === 0) {
            this.removeInput('EMPTY');
        } else {
            for (var x = this.itemCount_ - 1; x >= 0; x--) {
                this.removeInput('ADD' + x);
            }
        }
        this.itemCount_ = 0;
        // Rebuild the block's inputs.
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        while (itemBlock) {
            var input = this.appendValueInput('ADD' + this.itemCount_);
            if (this.itemCount_ === 0) {
                input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
            }
            // Reconnect any child blocks.
            if (itemBlock.valueConnection_) {
                input.connection.connect(itemBlock.valueConnection_);
            }
            this.itemCount_++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        if (this.itemCount_ === 0) {
            this.appendDummyInput('EMPTY')
                .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                'media/quote0.png', 12, 12))
                .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                'media/quote1.png', 12, 12));
        }
    },
    saveConnections: function(containerBlock) {
        // Store a pointer to any connected child blocks.
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + x);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            x++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
    }
};



Blockly.Blocks.text_create_join_container = {
    // Container.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_Field_JOIN'));
        this.appendStatementInput('STACK');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
        this.contextMenu = false;
    }
};

Blockly.Blocks.text_create_join_item = {
    // Add items.
    init: function() {
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
        this.contextMenu = false;
    }
};


Blockly.Blocks.text_create_join_container = {
    // Container.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TITLE_JOIN'));
        this.appendStatementInput('STACK');
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
        this.contextMenu = false;
    }
};

Blockly.Blocks.text_create_join_item = {
    // Add items.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
        this.contextMenu = false;
    }
};


