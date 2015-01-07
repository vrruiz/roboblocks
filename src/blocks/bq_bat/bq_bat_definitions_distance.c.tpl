long Distance_{{ echo_pin }}()
{
  long microseconds = TP_init_{{ echo_pin }}();
  long distance;
  distance = microseconds/29/2;
  return distance;
}
