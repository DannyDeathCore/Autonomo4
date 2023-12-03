$(document).ready(function () {
    
    $("#contacto-link").click(function (event) {
        event.preventDefault();
        $("#content").load("contactos.html");
    });

    $("#nosotros-link").click(function (event) {
        event.preventDefault();
        $("#content").load("sobrenosotros.html");
    });

    $("#productos-link").click(function (event) {
        event.preventDefault();
        $("#content").load("productos.html");
    });

    $("#inicio-link").click(function (event) {
        event.preventDefault();
        $("#content").load("index.html");
    });

    $("#logo-link").click(function (event) {
        event.preventDefault();
        $("#content").load("index.html");
    });
});

