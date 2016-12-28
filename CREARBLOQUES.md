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

Visualino utiliza representaciones visuales de los módulos para crear programas. Es por ello que debemos tener un diagrama o dibujo del mismo – en formato PNG. Podemos hacerlo nosotros mismos o utilizar la plataforma **Fritzing**™.

Si decidimos utilizar Fritzing™, primeramente debemos acceder a fritzing.org y descargar la pieza deseada. De no encontrarla, podemos usar proyecto adecuado que la contenga. Para obtener el diagrama de la pieza, abrimos el fichero descargado con Fritzing™ y buscamos la pieza en el menú titulado *Parts*. Si no la vemos y lo que tenemos es un proyecto, podemos buscarla en la vista *Breadboard*. Hacemos click derecho sobre ella y abrimos el *Part Editor*. Una vez ahí, exportamos la pieza como PNG:

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

Este es el momento de comprobar que somos capaces de interactuar con el artilugio. Realizamos las conexiones oportunas y mediante el IDE de Arduino™ cargamos el ejemplo que incorpora la librería que hemos descargado

```
File > Examples
```
