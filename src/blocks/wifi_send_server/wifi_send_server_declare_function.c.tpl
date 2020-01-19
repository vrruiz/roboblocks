bool wifi_enviarServidor(String s)
{
  int i,tam=s.length();
  char palabra[tam];
  for(i=0;i<tam;i++) palabra[i]=s.charAt(i);
  palabra[i]=0;
  return wifi.send(palabra,tam);
}
