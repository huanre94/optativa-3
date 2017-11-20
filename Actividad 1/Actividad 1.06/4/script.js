window.onload = function traerDatos() {
    var res = "";
    res = res + "Numero de elementos <p> que hay en el documento: " + document.getElementsByTagName("p").length + "\n";
    res = res + "Numero de enlaces existen en la pagina: " + document.getElementsByTagName("a").length + "\n";
    res = res + "La dirección del ultimo enlace: " + document.location + "\n";
    res = res + "El tamaño y color del párrafo de clase conclusion: " + +"\n";
    res = res + "El titulo de la pagina: " + document.title + "\n";
    return alert(res);
}