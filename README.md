# ⚡VanillaJS - tienda online  
![front](https://imagizer.imageshack.com/img924/7391/YUvAUd.png)
## Sobre este proyecto...
  Este es un proyecto el cual está dividido en frontend y backend    
  Este repositorio pertenece a la parte del frontend (Vanilla JS)  
  Para el proyecto usé el [boilerplate de 4Geeks "vanilla-hello"](https://github.com/4GeeksAcademy/vanillajs-hello)  
  [pincha aquí para ir al repositorio del backend](https://github.com/joaquindiazalvarez/tienda-online-backend-flask-mysql)  
  
## Descripción...
  Básicammente es una tienda Online, que tiene un buscador de productos  
  También tiene un selector de productos por categoría(botones):  
  
  ![selector](https://imagizer.imageshack.com/img924/9897/VxnjpM.png) 
  
  En otras palabras lo que puedes hacer es buscar el producto que desees e ir filtrando tu búsqueda  
  
# Empezando...
Para correr la aplicación, después de clonar el repositorio, se debe entrar a la carpeta del proyecto con:  

```$ cd tienda-online-vanillajs```  
    
luego se deben instalar los paquetes de node con:  

```$ npm i```    
    
finalmente, se puede correr la app con:   

```$ npm run start```    

# ⚡Funcionamiento
Para empezar, tienes dos opciones:  
La primera es buscar en la barra de búsqueda:  
![barra](https://imagizer.imageshack.com/img924/6120/QDwVsy.png)  

Esta barra filtrara los productos por los caracteres que hayas ingresado(Si es que coinciden con el nombre del producto)  
Esta barra también posee un selector de categoría:  

![cat](https://imagizer.imageshack.com/img924/5629/3tDWeF.png)  

que filtrará los resultados por la categoría  

La segunda opción es clickear uno de los botones de categoría:  

![selector](https://imagizer.imageshack.com/img924/9897/VxnjpM.png)  

Al presionar la categoría se mostrarán todos los productos de dicha categoría  

no importando la opción que hayas elegido, la aplicación tiene un checkbox de descuento que si se presiona, muestra solo los productos con descuento.  
también posee un selector de orden, dentro del cual tenemos las opciones:
- A a la Z  
- Z a la A  
- Menor Precio  
- Mayor Precio

![descuento&&orden](https://imagizer.imageshack.com/img923/874/f1xxRU.png)  

Por último si la lista de productos tiene más de 12 productos, se agregará una paginación:  

![paginación](https://imagizer.imageshack.com/img922/1990/qHCmQ4.png)

# ⚡Arquitectura de la app
## Descripción
Esta APP está hecha con HTML, CSS y JavaScript Puro(Vanilla JS)
- El HTML está hecho en un solo archivo
- El CSS también, está hecho en un solo archivo
## JavaScript:
Está hecho en tres archivos, usando la lógica de vistas y componentes.

Tenemos un archivo Padre, que es el app.js, donde está la función load que renderiza todo lo que debe pintarse cuando carga la página.

También tenemos una vista llamada index.js, donde ocurre la mayoría de la lógica del programa. Aquí van los fetchs, y las funciones que habilitan los componentes HTML como el input de búsqueda, el selector de categoría, los botones, el checkboz de descuento, el orden y la paginación. También se define la clase App que es la que contiene el título de la aplicación y los botones de categoría. además importa la función para renderizar las cartas del archivo card.js.  

Y por último el archivo card.js, que contiene la clase card, que renderiza una carta con la información del producto. también contiene el método rendercards, que a través de un for renderiza una lista de cartas a partir de un array.


