int * readJoystick_{{pinx}}(){
  _internal_readJoystick_array_{{pinx}}[0]=analogRead({{pinx}});
  _internal_readJoystick_array_{{pinx}}[1]=analogRead({{piny}});
  _internal_readJoystick_array_{{pinx}}[2]=digitalRead({{pinbutton}});
  return _internal_readJoystick_array_{{pinx}};
}