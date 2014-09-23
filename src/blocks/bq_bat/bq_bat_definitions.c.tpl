//bqBAT
long Distance{{ red_pin }}()
{
  long microseconds = TP_init{{ red_pin }}();
  long distance;
  distance = microseconds/29/2;
  return distance;
}

long TP_init{{ red_pin }}()
{
  digitalWrite( {{ blue_pin }} , LOW);
  delayMicroseconds(2);
  digitalWrite( {{ blue_pin }} , HIGH);
  delayMicroseconds(10);
  digitalWrite( {{ blue_pin }} , LOW);
  long microseconds = pulseIn( {{ red_pin }} ,HIGH);
  return microseconds;
}
