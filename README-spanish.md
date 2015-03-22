µQuery
=======
Una implementación de [jQuery] Ultra liviana, es tan pequeña que siquiera tests ni ejemplos tiene!


Características
-------
* Hasta ahora solo pesa `~0.85k`.
* Provee las cosas mínimas y necesarias que se usan con jQuery (hasta ahora: `css`, `find`, `on`, `ready`, `each`, `map`)
* Soporta encadenamiento de métodos.

¿Por qué?
-------
Por qué [jQuery] clone? Por diversión! Y para aquellos que de verdad se preocupan por el ancho de banda, o no quieren incluir todo [jQuery] solo por 2 o 3 métodos.

¡Código Código Código!
----------------
Bueh, no hay diferencia entre [jQuery] y uQuery, solo es una versión ultra pequeña de [jQuery].

Ejemplo:

```js
$(document).ready(function ($) { // on DOM Ready
    var col = $('a').css('color'); // obtiene el color via css
    $('a').css('color', 'red'); // establece el color via css

    $('#myId').css({'background-color': 'black'}).on('click', function (e) { // encadenamiento
        alert('clicked!');
        e.preventDefault();
    }).find('#otherId').find('#mylink').css('color', 'white');
});
```

A pesar de ser tan pequeño, es extendible, como el viejo [jQuery]!

```js
$.fn.miMetodo = function (args) { //
    // haz lo que quieras con args, si quieres encadenar metodos entonces return this;
};
```

TODO
-------
* añadir más métodos esenciales  como: `off`, `attr`, `append`, `show`, `hide`, `addClass`, `removeClass`, `html`
* *(quizá)* añadir soporte para ajax: `$.ajax`
* *(quizá)* añadir soporte para promesas: `$.Deferred`
* *(solo para navegadores populares [no para tí IE])* Volverla Cross-Browser.

[jQuery]:http://jquery.com