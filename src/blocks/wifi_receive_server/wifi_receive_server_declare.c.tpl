String wifi_receiveFromServer()
{
  char palabra[100];
  uint32_t tam;
  uint32_t num=wifi.recv(palabra,&tam,{{timeout}});
  if(num>0) {
    return String(palabra);
  } else return "";
}
