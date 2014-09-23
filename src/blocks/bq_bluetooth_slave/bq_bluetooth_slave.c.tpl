char recvChar_{{dropdown_pin}};
 while(1) {
  if(blueToothSerial_{{dropdown_pin}}.available()) { //Check if there is any data sent from the remote bluetooth
    recvChar_{{dropdown_pin}} = blueToothSerial_{{dropdown_pin}}.read();
    Serial.print(recvChar_{{dropdown_pin}});
}
  if(Serial.available()){ //Check if there is any data sent from the local serial terminal
    recvChar_{{dropdown_pin}} = Serial.read();
    blueToothSerial_{{dropdown_pin}}.print(recvChar_{{dropdown_pin}});
	}
 }
