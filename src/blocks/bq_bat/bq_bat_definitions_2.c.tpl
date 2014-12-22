long Distance{{ red_pin }}()
{
  long microseconds = TP_init{{ red_pin }}();
  long distance;
  distance = microseconds/29/2;
  return distance;
}
