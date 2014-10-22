  adc_key_in =analogRead({{dropdown_pin}});
  key = get_key(adc_key_in);
  if (key != oldkey)
  {
    delay(50);
    adc_key_in = analogRead({{dropdown_pin}});
    key = get_key(adc_key_in);
    if (key != oldkey)
    {
      oldkey = key;
      if (key >=0){
        switch(key)
        {
          case 0:
           {{code_btn1}}
          break;
          case 1:
           {{code_btn2}}
          break;
          case 2:
           {{code_btn3}}
          break;
          case 3:
           {{code_btn4}}
          break;  
          case 4:
           {{code_btn5}}
          break;
        }      
      }
    }
  }
