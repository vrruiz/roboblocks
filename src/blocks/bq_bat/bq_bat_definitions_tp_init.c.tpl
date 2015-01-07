//bqBAT
long TP_init_{{ echo_pin }}()
{
  digitalWrite( {{ trigger_pin }} , LOW);
  delayMicroseconds(2);
  digitalWrite( {{ trigger_pin }} , HIGH);
  delayMicroseconds(10);
  digitalWrite( {{ trigger_pin }} , LOW);
  long microseconds = pulseIn( {{ echo_pin }} ,HIGH);
  return microseconds;
}
