'use strict';
/* global RoboBlocks*/

RoboBlocks.locales = {
    defaultLanguage : {},
    languages: []
};

RoboBlocks.locales.getKey =function(key) {
    return this.defaultLanguage[key];
};
RoboBlocks.locales.setDefaultLang = function(langCode) {
    for (var i in this.languages){
        if (this.languages[i].langCode===langCode){
            this.defaultLanguage=this.languages[i].values;
        }
    }
};

RoboBlocks.locales.add = function (langCode, values) {
    console.log('add function', langCode, values, values['LANG_CATEGORY_COMMUNICATION']);
    if (!langCode) {
        // console.log('!langCode');
        return this.defaultLanguage;
    }

    if (langCode && !values) {
        // console.log('langCode && !values');
        if(!this.languages[langCode]) {
            throw new Error('Unknown language : ' + langCode);
        }
        //this.defaultLanguage = langCode;
    }

    if (values || !this.languages[langCode]) {
        // console.log('values || !this.languages[langCode]');
        this.languages.push({langCode:langCode, values:values});
        console.log('this.languages', this.languages[0].langCode,this.languages[0].values['LANG_CATEGORY_COMMUNICATION']);

        // this.setDefaultLang(langCode, values);
    }
    console.log(this.defaultLanguage);

    return this;
};

RoboBlocks.locales.initialize = function() {
    console.log('initialize');
    this.setDefaultLang('en');
    return this;
};