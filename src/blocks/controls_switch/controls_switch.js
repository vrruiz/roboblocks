'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

/**
* contrls_switch code generation
* @return {String} Code generated with block parameters
*/

Blockly.Arduino.controls_switch = function() {
    // switch condition.
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF0' ,
        Blockly.Arduino.ORDER_NONE) || '';
    var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    var code = 'switch (' + argument + ')\n{';
    for (n = 1; n <= this.switchCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n,Blockly.Arduino.ORDER_NONE) || '';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
    }
    if (this.defaultCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
        code += '  \n  default:\n  {\n' + branch + '  }';
    }
    return code + '\n}';
};


Blockly.Blocks.controls_switch = {
    // switch condition.
    category: RoboBlocks.LANG_CATEGORY_CONTROLS,
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/controls_switch',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('IF0')
            .setCheck(Boolean)
            .appendField('switch');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['controls_switch_case',
                                             'controls_switch_default']));
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_1;
            } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_2;
            } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_3;
            } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                return RoboBlocks.LANG_CONTROLS_SWITCH_TOOLTIP_4;
            }
            return '';
        });
        this.switchCount_ = 0;
        this.defaultCount_ = 0;
    },
    mutationToDom: function() {
        if (!this.switchCount_ && !this.defaultCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.switchCount_) {
            container.setAttribute('case', this.switchCount_);
        }
        if (this.defaultCount_) {
            container.setAttribute('default', 1);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        this.switchCount_ = window.parseInt(xmlElement.getAttribute('case'), 10);
        this.defaultCount_ = window.parseInt(xmlElement.getAttribute('default'), 10);
        for (var x = 1; x <= this.switchCount_; x++) {
            this.appendValueInput('SWITCH' + x)
                .setCheck(Number)
                .appendField('case');
            this.setInputsInline(true);
            this.appendStatementInput('DO' + x)
                .appendField(RoboBlocks.LANG_CONTROLS_IF_MSG_THEN);
        }
        if (this.defaultCount_) {
            this.appendStatementInput('DEFAULT')
                .appendField('default');
        }
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch_switch');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 1; x <= this.switchCount_; x++) {
            var switchBlock = Blockly.Block.obtain(workspace, 'controls_switch_case');
            switchBlock.initSvg();
            connection.connect(switchBlock.previousConnection);
            connection = switchBlock.nextConnection;
        }
        if (this.defaultCount_) {
            var defaultBlock = Blockly.Block.obtain(workspace, 'controls_switch_default');
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection);
        }
        return containerBlock;
    },
    compose: function(containerBlock) {
      // Disconnect the switch blocks and remove the inputs.
        if (this.defaultCount_) {
            this.removeInput('DEFAULT');
        }
        this.defaultCount_ = 0;
        // Disconnect all the switch input blocks and remove the inputs.
        for (var x = this.switchCount_; x > 0; x--) {
            this.removeInput('SWITCH' + x);
            this.removeInput('DO' + x);
        }
        this.switchCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_switch_case':
                this.switchCount_++;
                var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                    .setCheck(Number)
                    .appendField('case');
                this.setInputsInline(true);

                var doInput = this.appendStatementInput('DO' + this.switchCount_);
                doInput.appendField('do');
                // Reconnect any child blocks.
                if (clauseBlock.valueConnection_) {
                    switchInput.connection.connect(clauseBlock.valueConnection_);
                }
                if (clauseBlock.statementConnection_) {
                    doInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            case 'controls_switch_default':
                this.defaultCount_++;
                var defaultInput = this.appendStatementInput('DEFAULT');
                defaultInput.appendField('default');
                // Reconnect any child blocks.
                if (clauseBlock.statementConnection_) {
                    defaultInput.connection.connect(clauseBlock.statementConnection_);
                }
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&clauseBlock.nextConnection.targetBlock();
        }
    },
    saveConnections: function(containerBlock) {
        // Store a pointer to any connected child blocks.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
            case 'controls_switch_case':
                var inputSwitch = this.getInput('SWITCH' + x);
                var inputDo = this.getInput('DO' + x);
                clauseBlock.valueConnection_ =
                    inputSwitch && inputSwitch.connection.targetConnection;
                clauseBlock.statementConnection_ =
                    inputDo && inputDo.connection.targetConnection;
                x++;
                break;
            case 'controls_switch_default':
                inputDo = this.getInput('DEFAULT');
                clauseBlock.statementConnection_ =
                    inputDo && inputDo.connection.targetConnection;
                break;
            default:
                throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&clauseBlock.nextConnection.targetBlock();
        }
    }
};


Blockly.Blocks.controls_switch_switch = {
    // If condition.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField('switch');
        this.appendStatementInput('STACK');
        this.setTooltip('Switch');
        this.contextMenu = false;
    }
};

Blockly.Blocks.controls_switch_case = {
    // case condition.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField('case');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Switch case');
        this.contextMenu = false;
    }
};

Blockly.Blocks.controls_switch_default = {
    // default condition.
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendDummyInput()
            .appendField('default');
        this.setPreviousStatement(true);
        this.setTooltip('Switch default');
        this.contextMenu = false;
    }
};