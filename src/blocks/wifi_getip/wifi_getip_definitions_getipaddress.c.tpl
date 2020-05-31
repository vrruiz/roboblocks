String wifi_getIPAddress()
{ 
  String resul=wifi.getLocalIP();
  if(resul.length()>21) { 
    resul=resul.substring(14);
    resul=resul.substring(0,resul.indexOf('\"'));
  }
  return resul;
}
