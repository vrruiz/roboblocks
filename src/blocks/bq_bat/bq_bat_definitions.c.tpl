//bqBAT
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
