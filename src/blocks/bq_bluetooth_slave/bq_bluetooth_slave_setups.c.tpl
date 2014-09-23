Serial.begin(9600);
  pinMode({{dropdown_pin}},OUTPUT);
  pinMode({{NextPIN}}, OUTPUT);
  setupBlueToothConnection_{{dropdown_pin}}();

