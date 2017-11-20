window.onload = function traerDatos() {
    var res = "";
    res = res + "Numero de elementos <p> que hay en el documento: " + document.getElementsByTagName("p").length + "\n";
    res = res + "Numero de enlaces existen en la pagina: " + document.getElementsByTagName("a").length + "\n";
    res = res + "La dirección del ultimo enlace: " + window.history.back() + "\n";
    res = res + "Numero de enlaces que hay en el segundo parrafo: " + document.getElementsByTagName("p").item(1).getElementsByTagName('a').length + "\n";
    res = res + "El color de fondo de la pagina: " + document.body.style.backgroundColor + "\n";
    res = res + "El tama\u00f1o y color del parrafo de clase conclusion: " + "Error" + "\n";
    res = res + "El titulo de la pagina: " + document.title + "\n";
    return alert(res);
}