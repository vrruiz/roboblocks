//bqButtons
  int adc_key_val[5] ={20,50, 100, 200, 600 };
  int NUM_KEYS = 5;
  int adc_key_in;
  int key=-1;
  int oldkey=-1;
  int get_key(unsigned int input)
  {
    int k;
    for (k = 0; k < NUM_KEYS; k++)
    {
      if (input < adc_key_val[k])
      {
        return k;
      }
    }
    if (k >= NUM_KEYS)k = -1;
      return k;
  }
