/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.bq_bluetooth_slave block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'bq_bluetooth_slave');

				assert.equal(Blockly.Arduino.workspaceToCode(), '#include <SoftwareSerial.h>\n\nSoftwareSerial blueToothSerial_1(1,2);\n\nvoid setupBlueToothConnection_1()\n{\n  blueToothSerial_1.begin(38400); //Set Bluetooth BaudRate to default baud rate 38400\n  blueToothSerial_1.print(\'\\\\r\\\\n+STWMOD=0\\\\r\\\\n\'); //Set the bluetooth work in slave mode\n  blueToothSerial_1.print(\'\\\\r\\\\n+STNA=zum\\\\r\\\\n\'); //Set the bluetooth name as zum\n  blueToothSerial_1.print(\'\\\\r\\\\n+STPIN=0000\\\\r\\\\n\'); //Set SLAVE pincode\n  blueToothSerial_1.print(\'\\\\r\\\\n+STOAUT=1\\\\r\\\\n\'); //Auto-connection should be forbidden\n  blueToothSerial_1.print(\'\\\\r\\\\n+STAUTO=0\\\\r\\\\n\');\n  delay(2000); //This delay is required\n  blueToothSerial_1.print(\'\\\\r\\\\n+INQ=1\\\\r\\\\n\'); //Make the slave bluetooth inquirable\n  Serial.println(\'The slave bluetooth is inquirable!\');\n  delay(2000); //This delay is required\n  blueToothSerial_1.flush();\n}\n\nvoid setup()\n{\n  Serial.begin(9600);\n  pinMode(1,OUTPUT);\n  pinMode(2, OUTPUT);\n  setupBlueToothConnection_1();\n\n}\n\n\nvoid loop()\n{\n  char recvChar_1;\n   while(1) {\n    if(blueToothSerial_1.available()) { //Check if there is any data sent from the remote bluetooth\n      recvChar_1 = blueToothSerial_1.read();\n      Serial.print(recvChar_1);\n  }\n    if(Serial.available()){ //Check if there is any data sent from the local serial terminal\n      recvChar_1 = Serial.read();\n      blueToothSerial_1.print(recvChar_1);\n  \t}\n   }\n\n}');
			});
		});
	});

}).call( this );
