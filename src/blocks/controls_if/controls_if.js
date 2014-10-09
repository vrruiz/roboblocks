'use strict';
/* global Blockly, options, profiles, JST, RoboBlocks */
/* jshint sub:true */

  /**
  * controls_if code generation
  * @return {String} Code generated with block parameters
  */
Blockly.Arduino.controls_if = function() {
    var dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['controls_if_setups']({
        'dropdown_pin': dropdown_pin,
    });

    var code = JST['controls_if']({
        'dropdown_pin': dropdown_pin,
    });
    code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Blockly.Arduino.controls_if = function() {
//   // If/elseif/else condition.
//   var n = 0;
//   var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
//       Blockly.Arduino.ORDER_NONE) || 'false';
//   var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
//   var code = 'if (' + argument + ') {\n' + branch + '\n}';
//   for (n = 1; n <= this.elseifCount_; n++) {
//     argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
//       Blockly.Arduino.ORDER_NONE) || 'false';
//     branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
//     code += ' else if (' + argument + ') {\n' + branch + '}';
//   }
//   if (this.elseCount_) {
//     branch = Blockly.Arduino.statementToCode(this, 'ELSE');
//     code += ' else {\n' + branch + '\n}';
//   }
//   return code + '\n';
// };

/**
* controls_if block definition
* @type {Object}
*/
Blockly.Blocks.controls_if = {
    category: RoboBlocks.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'button'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/controls_if',
  /**
  * controls_if initialization
  */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput('')
            .appendField(RoboBlocks.LANG_controls_if)
            .appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom))
            .appendField(RoboBlocks.LANG_controls_if_PIN)
            .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.setOutput(true, Boolean);
        this.setTooltip(RoboBlocks.LANG_controls_if_TOOLTIP);
    }
};


Blockly.Blocks.controls_if = {
    category: RoboBlocks.LANG_CATEGORY_ZUM,
    tags: ['bq', 'zum', 'button'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/controls_if',
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_CONTROL);
        this.appendValueInput('IF0')
        .setCheck(Boolean)
        .appendField(Blockly.LANG_CONTROLS_IF_MSG_IF);
        this.appendStatementInput('DO0')
        .appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['controls_if_elseif',
     'controls_if_else']));
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.LANG_CONTROLS_IF_TOOLTIP_1;
            } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.LANG_CONTROLS_IF_TOOLTIP_2;
            } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.LANG_CONTROLS_IF_TOOLTIP_3;
            } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.LANG_CONTROLS_IF_TOOLTIP_4;
            }
            return '';
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
        this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
        for (var x = 1; x <= this.elseifCount_; x++) {
            this.appendValueInput('IF' + x)
                .setCheck(Boolean)
                .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSEIF);
            this.appendStatementInput('DO' + x)
                .appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE')
              .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSE);
        }
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 1; x <= this.elseifCount_; x++) {
            var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
        }
        return containerBlock;
    },
    compose: function(containerBlock) {
        // Disconnect the else input blocks and remove the inputs.
        if (this.elseCount_) {
            this.removeInput('ELSE');
        }
        this.elseCount_ = 0;
        // Disconnect all the elseif input blocks and remove the inputs.
        for (var x = this.elseifCount_; x > 0; x--) {
            this.removeInput('IF' + x);
            this.removeInput('DO' + x);
        }
        this.elseifCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_if_elseif':
                this.elseifCount_++;
                var ifInput = this.appendValueInput('IF' + this.elseifCount_)
                .setCheck(Boolean)
                .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSEIF);
                var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                doInput.appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
                  // Reconnect any child blocks.
                if (clauseBlock.valueConnection_) {
                    ifInput.connection.connect(clauseBlock.valueConnection_);
                }
                if (clauseBlock.statementConnection_) {
                    doInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            case 'controls_if_else':
                this.elseCount_++;
                var elseInput = this.appendStatementInput('ELSE');
                elseInput.appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSE);
                  // Reconnect any child blocks.
                if (clauseBlock.statementConnection_) {
                    elseInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_if_elseif':
                var inputIf = this.getInput('IF' + x);
                var inputDo = this.getInput('DO' + x);
                clauseBlock.valueConnection_ =
                inputIf && inputIf.connection.targetConnection;
                clauseBlock.statementConnection_ =
                inputDo && inputDo.connection.targetConnection;
                x++;
                break;
            case 'controls_if_else':
                inputDo = this.getInput('ELSE');
                clauseBlock.statementConnection_ =
                inputDo && inputDo.connection.targetConnection;
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    }
};

Blockly.Blocks.controls_if_if = {
    // If condition.
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField(Blockly.LANG_CONTROLS_IF_IF_Field_IF);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.LANG_CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks.controls_if_elseif = {
    // Else-If condition.
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
          .appendField(Blockly.LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks.controls_if_else = {
  // Else condition.
    init: function() {
        this.setColour(Blockly.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField(Blockly.LANG_CONTROLS_IF_ELSE_Field_ELSE);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false;
    }
};


