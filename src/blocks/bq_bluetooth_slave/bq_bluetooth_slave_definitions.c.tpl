#include <SoftwareSerial.h>

SoftwareSerial blueToothSerial_{{dropdown_pin}}({{dropdown_pin}},{{NextPIN}});

void setupBlueToothConnection_{{dropdown_pin}}()
{
  blueToothSerial_{{dropdown_pin}}.begin({{baud_rate}});  
  blueToothSerial_{{dropdown_pin}}.flush();
}
