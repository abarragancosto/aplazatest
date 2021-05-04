#Aplazatest

Proyecto de test creado para realizar una prueba sobre el proceso de checkout de Aplazame.

## Estructura de directorios

**aplazatest -> [README.md](./README.md)**:
    
Documentación sobre el proyecto de test
   
**aplazatest -> [config](./config)**:

Directorio donde se encuentra la configuración de webdriverio. Consta de 2 ficheros:
      
**aplazatest -> config -> [wdio.conf](./config/wdio.conf.js)**:

En este fichero se establece toda la configuración necesaria para el correcto funcionamiento del proyecto de test.
         
**aplazatest -> config -> [headless.conf](./config/headless.conf.js)**:

Este fichero de configuración sobreescribe las capabilities de la configuración principal añaniéndole la opción de ejecutar los test en modo headless.
    
**aplazatest -> test -> [features](./test/features)**:

Directorio donde se encuentran las features del proyecto. Dentro de este directorio se colocarán todas las features siguiendo la estructura deseada.
     
**aplazatest -> test -> [step-definitions](./test/step-definitions)**:

Directorio donde se encuentran las definiciones de los pasos de los escenarios. Se han dividido por pantalla a probar.
         
**aplazatest -> test -> [page-objects](./test/page-objects)**:

Directorio donde se encuentras la implementación de los pasos de los escenarios. Dentro de este directorio se puede encontrar ficheros dedicados a las pantallas y un fichero común con funciones y elementos que pueden ser utilizados por distintos page-objects.        
             
**aplazatest -> test -> [hooks](./test/hooks)**:

En este directorio se encuentra la implementación de los hooks de cucumber.        
   
## Ejecución del proyecto.   

Para ejecutar el proyecto de test, lo primero que se debe realizar es la instalación de todos los paquetes utilizados en el proyecto. Para ello hay que lanzar el comando "npm run install"
   
Para ejecutar el proyecto de test, se han creado 2 scripts de lanzamiento :

**test**: Ejecutará todos los escenarios que se encuentren dentro del directorio /test/features.

**test:headless**: Ejecutará todos los scenarios que se encuentren dentro del directorio /test/features pero en modo headless.

Para lanzar cualquiera de estos comandos, bastará con ejecutar "npm run test" o "npm run test:headless"

Además, si se quiere lanzar un test en concreto y no todos los escenarios, sería tan sencillo como ejecutar: "npm run test -- --cucumberOpts.tagExpression='@OK'"   
   
   
