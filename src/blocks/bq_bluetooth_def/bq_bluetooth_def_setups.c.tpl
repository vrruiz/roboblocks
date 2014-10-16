Serial.begin(9600);
  pinMode({{dropdown_pin}},INPUT);
  pinMode({{NextPIN}}, OUTPUT);
  setupBlueToothConnection_{{dropdown_pin}}();

