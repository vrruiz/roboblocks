# Guía para crear nuevos bloques

Una guía para añadir nuevos bloques al entorno Visualino.

## Recursos necesarios

### Librería

Primero, debemos comprobar que el módulo que queremos implementar tiene disponible una librería para Arduino™. De ser así, bastará con descargarla y **situarla** en el directorio donde el IDE de Arduino™ localiza sus librerías; en Linux, por defecto, este directorio está en:

```shell
~/Arduino/libraries/
```

Como nota importante, las librerías deben estar descomprimidas para ser usadas. Se puede descomprimir directamente en el directorio anteriormente mencionado, o bien usando el IDE de Arduino™.

```
Sketch > Include Library > Add .ZIP Library…
```

### Diagrama

Visualino utiliza representaciones visuales de los módulos para que el usuario programe. Es por ello que debemos tener un diagrama o dibujo de los mismos – en formato PNG. Podemos hacerlos nosotros o utilizar la plataforma **Fritzing**™.

Si decidimos utilizar Fritzing™, primeramente debemos acceder a www.fritzing.org y descargar la pieza deseada. De no encontrarla, podemos usar un proyecto adecuado que la contenga. Para obtener el diagrama de la pieza, abrimos el fichero descargado con Fritzing™ y buscamos la pieza en el menú titulado *Parts*. Si no la vemos y lo que tenemos es un proyecto, podemos buscarla en la vista *Breadboard*. Hacemos click derecho sobre ella y abrimos el *Part Editor*. Una vez ahí, exportamos la pieza como PNG:

```
File > Export > as Image > PNG…
```

Si no vemos la pieza al abrir el PNG, es posible que nuestro Fritzing™ tenga un problema. Para solventarlo, en lugar de exportarla como PNG, la exportamos como SVG y posteriormente la convertimos a PNG. En Ubuntu, la conversión la podemos realizar con Inkscape™:

Para instalar Inkscape™:

```shell
sudo apt-get install inkscape
```

Para convertir un fichero SVG a PNG:

```shell
inkscape -z -e fichero.png fichero.svg
```

## Funcionamiento

Este es el momento de comprobar que somos capaces de interactuar con el artilugio. Realizamos las conexiones oportunas y mediante el IDE de Arduino™ cargamos el ejemplo que incorpora la librería que hemos descargado:

```
File > Examples
```

Leemos y tratamos de entender el código del ejemplo para posteriormente cargarlo en la placa. Cuando todo funcione correctamente, podemos **retener del mismo código las partes que nos puedan interesar**: importaciones de librerías, *setup* necesario, llamadas a métodos, etc. También es posible que apreciemos la falta de funcionalidades que ofrece la librería; en ese caso tendremos que acudir a la documentación.

## Programar el bloque

A partir de ahora, debemos tener acceso al proyecto *roboblocks* de Víctor R. Ruiz. Mediante *Git*, podemos clonar o hacer un *fork* a su repositorio – yo la he puesto en *Documents*, pero podemos escoger el directorio que prefiramos-.

```shell
cd ~/Documents
git clone https://github.com/vrruiz/roboblocks
```

### El directorio del bloque

Entramos en la carpeta que contiene los bloques y creamos el directorio para nuestro nuevo bloque –en este caso el hygrómetro DHT11–:

```shell
cd ~/Documents/roboblocks/src/blocks
mkdir sensor_dht11
cd sensor_dht11/
```

A tener en cuenta, que para mantener cierto orden, es recomendable comenzar el nombre del módulo con la categoría a la corresponde. 

Situados en el directorio del bloque, creamos dos archivos y un directorio que contendrá la imagen del bloque.

```shell
touch README.md sensor_dht11.js
mkdir img
```

En el README.md definiremos el funcionamiento del bloque. El fichero con extensión .js contendrá el código en JavaScript con la implementación del mismo.

Para terminar este apartado, **situamos la imagen del bloque** en el directorio *img*.

### El bloque

En los ejemplos que se muestran a continuación, se usará el DHT11 como modelo.

#### Estructura

Nuestro código tendrá la siguiente estructura:

```javascript
'use strict';
/* global Blockly, profiles, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * sensor_dht11 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.sensor_dht11 = function() {
    
   
};

/**
 * sensor_dht11 block definition
 * @type {Object}
 */
Blockly.Blocks.sensor_dht11 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR’),
    tags: ['dht11'],
    helpUrl: RoboBlocks.URL_dht11,
    /**
     * sensor_dht11 initialization
     */
    init: function() {
	        

	this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_TOOLTIP'));
    }
};
```

En la función asignada a **Blockly.Arduino.**sensor_dht11 se generará el código y en **Blockly.Blocks.**sensor_dht11 definiremos su interfaz de usuario y otras propiedades.

#### Interfaz y propiedades del bloque

*En Blockly.Blocks…*

Para asignar un color al bloque, utilizaremos el método setColour:

```javascript
this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
```

Para añadir la primera fila de elementos, que incluye el título del bloque y su imagen, emplearemos el siguiente código:

```javascript
this.appendDummyInput()
    .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11'))
    .appendField(new Blockly.FieldImage(
        'img/blocks/dht11.png',
        208 * options.zoom,
        140 * options.zoom));
```

Sin embargo, en este caso, el DHT11 se conecta a un pin digital escogido por nosotros. Por ello, es necesario que el usuario especifique a cuál está conectado. En este caso, he optado por utilizar un menú desplegable añadiendo dos líneas al código anterior:

```javascript
this.appendDummyInput()
    .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11'))
    .appendField(new Blockly.FieldImage(
        'img/blocks/dht11.png',
        208 * options.zoom,
        140 * options.zoom))
    .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_PIN'))
    .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
```

Para incluir el resto de entradas/salidas del bloque, basta con utilizar el método appendValueInput. Es importante especificar un nombre único dentro del bloque al valor, en este caso, *TEMPERATURE*:

```javascript
this.appendValueInput('TEMPERATURE')
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_TEMPERATURE'));
```

La definición del DHT11 quedaría así:

```javascript
/**
 * sensor_dht11 block definition
 * @type {Object}
 */
Blockly.Blocks.SENSOR_dht11 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
    tags: ['dht11'],
    helpUrl: RoboBlocks.URL_dht11,

    /**
     * sensor_dht11 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/dht11.png',
                208 * options.zoom,
                140 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_PIN'))
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('TEMPERATURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_TEMPERATURE'));
        this.appendValueInput('HUMIDITY')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_HUMIDITY'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_SENSOR_DHT11_TOOLTIP'));
    }
};
```

#### Generación del código

*En Blockly.Arduino…*

En este caso, disponemos de una librería para el DHT11. Para utilizarla añadimos en Blockly.Arduino.definitions_ el código necesario:

```javascript
Blockly.Arduino.definitions_['define_dht11'] = '#include <dht.h>\ndht DHT;\n';
```

A tener en cuenta que este esquema permite evitar duplicados. Aquí entra en juego el nombre que le asignemos –en este caso *define_dht11*–. Si otro bloque –puede ser otro DHT11– es utilizado, y tiene el mismo nombre en la definición –*define_dht11*–, su código reemplazará el anterior.

Además, recordar que en *strings* para añadir saltos de línea, se utilizan los caracteres \n.

Para poder utilizar los valores de las entradas/salidas definidas anteriormente, utilizaremos el siguiente código. En el caso de los menús desplegables, bastará con utilizar el método getTitleValue:

```javascript
var dropdown_pin = this.getTitleValue('PIN');
var temperature  = Blockly.Arduino.valueToCode(this, 'TEMPERATURE', Blockly.Arduino.ORDER_ATOMIC);
var humidity = Blockly.Arduino.valueToCode(this, 'HUMIDITY', Blockly.Arduino.ORDER_ATOMIC);
```

Para que el código quede más limpio, podemos utilizar JST para interactuar con otro archivo en el que almacenaremos el código que generaremos. Para ello, creamos **otro archivo** con extensión *.c.tpl* –sensor_dht11.c.tpl–. En él, introduciremos los nombres de las variables utilizadas en la función principal anterior entre {{ }}:

```javascript
int dht11_{{ dropdown_pin }} = DHT.read11({{ dropdown_pin }});
{{ temperature }} = DHT.temperature;
{{ humidity }} = DHT.humidity;
```

De vuelta al fichero .js, añadimos:

```javascript
var code = JST['zum_dht11']({
    'dropdown_pin': dropdown_pin,
    'temperature': temperature,
    'humidity': humidity
});

return code;
```

También a destacar que, aunque el DHT11 no lo precisa, utilizando *Blockly.Arduino.setups_* con la misma dinámica que *Blockly.Arduino.definitions_* podemos añadir código en el *setup* del Arduino™.

El código completo sería el siguiente:

```javascript
'use strict';
/* global Blockly, profiles, options, JST, RoboBlocks */
/* jshint sub:true */

/**
 * zum_dht11 code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.zum_dht11 = function() {
    Blockly.Arduino.definitions_['define_dht11'] = '#include <dht.h>\ndht DHT;\n';

    var dropdown_pin = this.getTitleValue('PIN');
    var temperature  = Blockly.Arduino.valueToCode(this, 'TEMPERATURE', Blockly.Arduino.ORDER_ATOMIC);
    var humidity = Blockly.Arduino.valueToCode(this, 'HUMIDITY', Blockly.Arduino.ORDER_ATOMIC);

    var code = JST['zum_dht11']({
        'dropdown_pin': dropdown_pin,
        'temperature': temperature,
        'humidity': humidity
    });

    return code;
};

/**
 * zum_dht11 block definition
 * @type {Object}
 */
Blockly.Blocks.zum_dht11 = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
    tags: ['dht11'],
    helpUrl: RoboBlocks.URL_dht11,

    /**
     * zum_dht11 initialization
     */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
        this.appendDummyInput()
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11'))
            .appendField(new Blockly.FieldImage(
                'img/blocks/dht11.png',
                208 * options.zoom,
                140 * options.zoom))
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_PIN'))
            .appendTitle(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');
        this.appendValueInput('TEMPERATURE')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TEMPERATURE'));
        this.appendValueInput('HUMIDITY')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_HUMIDITY'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TOOLTIP'));
    }
};
```

#### Etiquetas y texto en los bloques

A tener en cuenta, que hemos empleado el método *getKey* para definir etiquetas y otros contenidos en lugar de texto. Esto es porque RoboBlocks utiliza ficheros indexados para implementar varios idiomas. Localizaremos estos ficheros en:

```shell
cd ~/Documents/roboblocks/lang/
```

Es importante definir todas las etiquetas empleadas con su nombre correspondiente en todos los ficheros de idiomas disponibles.

### Compilar y probar

Ahora que tenemos todo elaborado, podemos probar nuestro bloque. Para compilar, bastará con ejecutar el siguiente comando en el directorio roboblocks:

```shell
grunt
```

Para poder ver en Visualino los cambios que hemos realizado existen dos posibilidades. La primera es cambiando una línea de código en el fichero que apunta a la distribución del Visualino; cambiando de la original a la recientemente compilada. Sin embargo, para simplificar, vamos a optar por la segunda opción, que es añadir los ficheros que hemos modificado al Visualino que tenemos instalado: el archivo dist/roboblocks.js y el directorio dist/img/blocks. En Linux podemos realizarlo con los siguientes comandos:

```shell
sudo cp dist/roboblocks.js /usr/share/visualino/html/
sudo cp -r dist/img/blocks/ /usr/share/visualino/html/img/
```

Y ya está listo nuestro nuevo bloque.