long Distance_{{ name }}()
{
  long microseconds = TP_init_{{ name }}();
  long distance;
  distance = microseconds/29/2;
  return distance;
}
