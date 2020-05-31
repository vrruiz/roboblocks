long readFromIrReceiver() {
  if(irrecv.decode(&results)) {
    irrecv.resume();
    return results.value;
  } else return 0;
}
