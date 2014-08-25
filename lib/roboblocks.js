'use strict';
/* global define */
define(['blockly', 'templates/jst'], function () {

    var roboblocks = {
        load: function (json) {
            console.log('load', json);
            //  Generate this from json
            // {
		    //     category: "Math",
		    //     helpUrl: "http://github.com/bq/roboblock/tree/master/lib/blocks/math-random",
		    //     init: function() {
		    //         this.appendValueInput("NUM", Number)
		    //             .appendTitle("Random between")
		    //             .setCheck(Number);
		    //         this.appendValueInput("DMAX", Number)
		    //             .appendTitle(" and ")
		    //             .setCheck(Number);
		    //         this.setInputsInline(true);
		    //         this.setOutput(true);
		    //         this.setTooltip("Assign a random number");
		    //     }
		    // }
        }
    };

    return roboblocks;
});
