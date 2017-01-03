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

En el README.md definiremos el funcionamiento del bloque y el fichero con extensión .js contendrá el código en JavaScript con la implementación del mismo.

