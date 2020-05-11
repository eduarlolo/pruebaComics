# PruebaComics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Instalación de Angular 8

1- Se debe tener instalado Node js para realizar la instalacion de Angular, se debera descargar el ejecutable desde la pagina oficial una version LTS. https://nodejs.org/es/

2- para la instalaacion de Angular se deben seguir los siquientes pasos, todos los comandos se deben ejecutar en la CMD o en una Terminal de comandos.

2.1- Actualizacion de NPM con el siguiente comando.
npm install -g npm@latest

2.2- Actualizacion de NPM con el siguiente comando.
npm cache clean --force

2.3- Desactivar las auditorias de NPM para evitar fallos.
npm set audit false

2.4- Desinstalar los paquetes anteriores de Angular CLI.
npm uninstall -g angular-cli
npm uninstall -g @angular/cli

2.5- Borrar la cache de NPM de nuevo.
npm cache clean --force

2.6- Instalar la última versión de Angular CLI para instalar Angular 8.
npm install -g @angular/cli@latest

## Ejecucion de proyecto

1- Para le ejecución correcta del proyecto es necesaria tener instalado la última version de Angular y despues dirigirse al a carperta donde se encuentra el proyecto por medio de la CMD o terminal. y ejecuar los siguyientes comando.

2- Instalar dependencia que necesite el proyecto con el siguiente comando.
npm install

2.2.- despues levantar el servidor con el comando de 'npm start', es importante que se ejecute con este comando ya que si no hse hase asi el proyecto no funcionara ya que el API Rest no puede ser consumida en .modo de desarrollador, con este comando vamos a simular un proxy para poder consumir el API. este comado fue modificado internamente para poder funcionar correctamente.

npm start.

## ¿Cómo construyó la solución de la prueba?

La solución se contruyo en agular 8 usando el framework bootstrap 4, se creo una vista principal, donde se consume el API de xkcd trayendo el nombre del comic, la imagen, la descripción y una pequeña sección donde el usuario puede calificar el comic en forma de estrellas hecha con NG-CLASS una directiva de angular.
Para el consumo del API se creo un servicio el cual por medio de un objeto la clase de HttpClient 'Modulo de Angular' se consume el Api y retorna el el resultado.

## ¿Cuáles fueron los principales problemas con los que se encontró?

El Api de xkcd tiene restriciones para el consumo desde un entorno de desarrollo Localhost, estp me llevo a realizar un cambio en la ejecución del proyecto simulando un proxy para poder consumir el Api.

## ¿Cómo solucionó los problemas encontrados?

se hizo la presunta investigacion del problema mencionado y se busca la corecta solucion en internet.
