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
