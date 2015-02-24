'use strict';
/* global Blockly, RoboBlocks */
/* jshint sub:true */

/**
* controls_switch code generation
* @return {String} Code generated with block parameters
*/
var indentSentences=function(sentences){
    var splitted_sentences=sentences.split('\n');
    var final_sentences='';
    for (var i in splitted_sentences){
        final_sentences+='  '+splitted_sentences[i]+'\n';
    }
    return final_sentences;
};

Blockly.Arduino.controls_switch = function() {
    // switch condition.
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF0' ,
        Blockly.Arduino.ORDER_NONE) || '';
    var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    branch=indentSentences(branch);
    // branch=branch.replace(/&amp;/g, '');

    var code = '';
    var a=RoboBlocks.findPinMode(argument);
    code+=a['code'];
    argument=a['pin'];

    code += 'switch (' + argument + ')\n{';
    for (n = 1; n <= this.switchCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n,Blockly.Arduino.ORDER_NONE) || '';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        branch=indentSentences(branch);
        branch = branch.substring(0, branch.length - 1);
        // branch=branch.replace(/&amp;/g, '');

        code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
    }
    if (this.defaultCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
        branch=indentSentences(branch);
        branch = branch.substring(0, branch.length - 1);
        // branch=branch.replace(/&amp;/g, '');

        code += '  \n  default:\n  {\n' + branch + '}';
    }
    return code + '\n}\n';
};


Blockly.Blocks.controls_switch = {
    // switch condition.
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
    helpUrl: RoboBlocks.URL_SWITCH,
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
        this.appendValueInput('IF0')
            .setCheck(Boolean)
            .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['controls_switch_case','controls_switch_default']));
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_1');
            } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_2');
            } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_3');
            } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_4');
            }
            return '';
        });
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
                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                .setAlign(Blockly.ALIGN_RIGHT);
            this.setInputsInline(true);
            this.appendStatementInput('DO' + x)
                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                .setAlign(Blockly.ALIGN_RIGHT);
        }
        if (this.defaultCount_) {
            this.appendStatementInput('DEFAULT')
                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                .setAlign(Blockly.ALIGN_RIGHT);
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
                var case_lang;
                if(this.switchCount_===1){
                    case_lang=RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_IS');
                }
                else{
                    case_lang=RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE');
                }
                var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                    .setCheck(Number)
                    .appendField(case_lang)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(true);

                var doInput = this.appendStatementInput('DO' + this.switchCount_);
                doInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DO'))
                .setAlign(Blockly.ALIGN_RIGHT);
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
                defaultInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                .setAlign(Blockly.ALIGN_RIGHT);
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
            .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
            .setAlign(Blockly.ALIGN_RIGHT);
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
            .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
            .setAlign(Blockly.ALIGN_RIGHT);
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
            .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setTooltip('Switch default');
        this.contextMenu = false;
    }
};