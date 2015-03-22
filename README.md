µQuery
=======
A Ultra small [jQuery] implementation. Its so small that it doesn't even have tests nor examples!

>¿No entiendes Inglés? [Lee la documentación en español](README-spanish.md)!  

Features
-------
* So far it weights `~0.85k`.
* Provides the bare minimum jquery stuff we use (so far it has: `css`, `find`, `on`, `ready`, `each`, `map`)
* Supports method chaining.

Why?
-------
Why another [jQuery] clone? Just for fun! And for those who really really care about the bandwidth, or don't want the full [jQuery] just for 2 or 3 methods.

Show me da code!
----------------
Well, there is no difference between [jQuery] and uQuery, It's just a ultra trimmed version of [jQuery].

For example:

```js
$(document).ready(function ($) { // on DOM Ready
    var col = $('a').css('color'); // get css color
    $('a').css('color', 'red'); // set css color

    $('#myId').css({'background-color': 'black'}).on('click', function (e) { // method chaining
        alert('clicked!');
        e.preventDefault();
    }).find('#otherId').find('#mylink').css('color', 'white');
});
```

While being quite small, it supports extending it, like regular [jQuery] does!

```js
$.fn.myMethod = function (args) {
    // do whatevah with your args, if you want to chain, then return this;
};
```

TODO
-------
* add some essential methods like: `off`, `attr`, `append`, `show`, `hide`, `addClass`, `removeClass`, `html`
* *(maybe)* add ajax support: `$.ajax`
* *(maybe)* add promises support: `$.Deferred`
* *(just for popular browsers [not IE])* Cross-browser it

[jQuery]:http://jquery.com