int dht11_value_{{ dropdown_pin }} = DHT.read11({{ dropdown_pin }});
{{ temperature }} = DHT.temperature;
{{ humidity }} = DHT.humidity;
delay({{ delay }});
