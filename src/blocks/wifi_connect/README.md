wifi_connect
==========

Connects to a wifi network using a ESP8266-ESP01 adaptater. Returns true if connection is sucessful.

Parameters
----------

| Param name | Description | Type     |
 ------------|-------------|----------
| SSID#     | Identifier (name) of the Wifi network | `String` |
| PASSWORD#     | Password of the Wifi network | `String` |
| RX_PIN#     | Pin for serial connection with the adapter (reception) | `Number` |
| TX_PIN#     | Pin for serial connection with the adapter (transmission) | `Number` |
| BAUD_RATE#     | Speed of the serial connection with Arduino | `Number` |
