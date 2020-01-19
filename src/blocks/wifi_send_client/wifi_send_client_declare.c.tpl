bool wifi_enviarCliente(int id,String s)
{
  int tam=s.length();
  char palabra[tam];
  s.toCharArray(palabra,tam);
  return wifi.send((uint8_t)id,palabra,tam);
}
