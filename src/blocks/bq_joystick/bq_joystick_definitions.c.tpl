int * readJoystick_pointer_{{pinx}};

int * readJoystick_{{pinx}}(){
  readJoystick_pointer_{{pinx}}[0]=analogRead({{pinx}});
  readJoystick_pointer_{{pinx}}[1]=analogRead({{piny}});
  readJoystick_pointer_{{pinx}}[2]=digitalRead({{pinbutton}});
  return readJoystick_pointer_{{pinx}};
}