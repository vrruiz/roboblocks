/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bluetooth_slave block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bluetooth_slave');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <SoftwareSerial.h>\n\nSoftwareSerial blueToothSerial_(,);\n\nvoid setupBlueToothConnection_()\n{\n  blueToothSerial_.begin(38400); //Set Bluetooth BaudRate to default baud rate 38400\n  blueToothSerial_.print(\'\\\\r\\\\n+STWMOD=0\\\\r\\\\n\'); //Set the bluetooth work in slave mode\n  blueToothSerial_.print(\'\\\\r\\\\n+STNA=zum\\\\r\\\\n\'); //Set the bluetooth name as zum\n  blueToothSerial_.print(\'\\\\r\\\\n+STPIN=0000\\\\r\\\\n\'); //Set SLAVE pincode\n  blueToothSerial_.print(\'\\\\r\\\\n+STOAUT=1\\\\r\\\\n\'); //Auto-connection should be forbidden\n  blueToothSerial_.print(\'\\\\r\\\\n+STAUTO=0\\\\r\\\\n\');\n  delay(2000); //This delay is required\n  blueToothSerial_.print(\'\\\\r\\\\n+INQ=1\\\\r\\\\n\'); //Make the slave bluetooth inquirable\n  Serial.println(\'The slave bluetooth is inquirable!\');\n  delay(2000); //This delay is required\n  blueToothSerial_.flush();\n}\n\nvoid setup()\n{\n  Serial.begin(9600);\n  pinMode(,OUTPUT);\n  pinMode(, OUTPUT);\n  setupBlueToothConnection_();\n\n}\n\n\nvoid loop()\n{\n  char recvChar_;\n   while(1) {\n    if(blueToothSerial_.available()) { //Check if there is any data sent from the remote bluetooth\n      recvChar_ = blueToothSerial_.read();\n      Serial.print(recvChar_);\n  }\n    if(Serial.available()){ //Check if there is any data sent from the local serial terminal\n      recvChar_ = Serial.read();\n      blueToothSerial_.print(recvChar_);\n  \t}\n   }\n\n}');
			});
		});
	});

}).call( this );
