void readJoystick(int a[3]){
  a[0]=analogRead({{pinx}});
  a[1]=analogRead({{piny}});
  a[2]=digitalRead({{pinbutton}});
}