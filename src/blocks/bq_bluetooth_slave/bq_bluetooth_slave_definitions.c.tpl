#include <SoftwareSerial.h>

SoftwareSerial blueToothSerial_{{dropdown_pin}}({{dropdown_pin}},{{NextPIN}});

void setupBlueToothConnection_{{dropdown_pin}}()
{
  blueToothSerial_{{dropdown_pin}}.begin(38400); //Set Bluetooth BaudRate to default baud rate 38400
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+STWMOD=0\\r\\n'); //Set the bluetooth work in slave mode
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+STNA={{name}}\\r\\n'); //Set the bluetooth name as {{name}}
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+STPIN={{pincode}}\\r\\n'); //Set SLAVE pincode
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+STOAUT=1\\r\\n'); //Auto-connection should be forbidden
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+STAUTO=0\\r\\n');
  delay(2000); //This delay is required
  blueToothSerial_{{dropdown_pin}}.print('\\r\\n+INQ=1\\r\\n'); //Make the slave bluetooth inquirable
  Serial.println('The slave bluetooth is inquirable!');
  delay(2000); //This delay is required
  blueToothSerial_{{dropdown_pin}}.flush();
}
