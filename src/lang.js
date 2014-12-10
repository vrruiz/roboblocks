'use strict';
/* global RoboBlocks, Blockly*/
RoboBlocks.locales = {
    defaultLanguage: {},
    languages: []
};
RoboBlocks.locales.getKey = function(key) {
    return this.defaultLanguage[key];
};
RoboBlocks.locales.setDefaultLang = function(langCode) {
    for (var i in this.languages) {
        if (this.languages[i].langCode === langCode) {
            this.defaultLanguage = this.languages[i].values;
        }
    }
    //Set blockly literals
    Blockly.Msg.DUPLICATE_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.REMOVE_COMMENT = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.ADD_COMMENT = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.EXTERNAL_INPUTS = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.INLINE_INPUTS = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.DELETE_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.DELETE_X_BLOCKS = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.COLLAPSE_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.EXPAND_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.DISABLE_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.ENABLE_BLOCK = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.HELP = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.COLLAPSE_ALL = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
    Blockly.Msg.EXPAND_ALL = RoboBlocks.locales.getKey('BLOCKLY_MSG_DUPLICATE_BLOCK ');
};
RoboBlocks.locales.add = function(langCode, values) {
    if (!langCode) {
        return this.defaultLanguage;
    }
    if (langCode && !values) {
        if (!this.languages[langCode]) {
            throw new Error('Unknown language : ' + langCode);
        }
        //this.defaultLanguage = langCode;
    }
    if (values || !this.languages[langCode]) {
        this.languages.push({
            langCode: langCode,
            values: values
        });
    }
    return this;
};
RoboBlocks.locales.initialize = function() {
    this.setDefaultLang('en-GB');
    return this;
};