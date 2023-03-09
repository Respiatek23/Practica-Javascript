# Practica-Javascript

El HTML es el codigo de un carousel usando boostrap5, ademas le he añadido un boton para que pueda hacer la funcionalidades del Javascript.

El javascript tiene una funcion que cada vez que se ejecuta, va a la api indicada y obtiene una foto aleatoria de gatos.
Despues con el uso del boostrap para Javascript la foto que se esta viendo en pantalla siempre tendra una clase llamada "carousel-item active" simplemente tenemos que
usar DOM para encontrar ese contenedor que es el activo, y mediante un bucle que recorre los nodos hijos del contenedor encontramos la foto, y luego con replacechild,
cambiamos la foto antigua por la nueva

El unico problema es que no he podido limitar la altura, aunque si podia cambiar el ancho, la altura por alguna razon no me dejaba
