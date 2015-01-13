int * readJoystick_{{name}}(){
  _internal_readJoystick_array_{{name}}[0]=analogRead({{pinx}});
  _internal_readJoystick_array_{{name}}[1]=analogRead({{piny}});
  _internal_readJoystick_array_{{name}}[2]=digitalRead({{pinbutton}});
  return _internal_readJoystick_array_{{name}};
}