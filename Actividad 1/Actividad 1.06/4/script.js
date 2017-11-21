window.onload = function traerDatos() {
    var parTam = document.getElementsByClassName("conclusion");
    var tamPar, txtColor = "";
    for (var i = 0; i < parTam.length; i++) {
        tamPar = window.getComputedStyle(parTam[i], null).fontSize;
        txtColor = window.getComputedStyle(parTam[i], null).color;
    }


    var res = "";
    res = res + "Numero de elementos <p> que hay en el documento: " + document.getElementsByTagName("p").length + "\n";
    res = res + "Numero de enlaces existen en la pagina: " + document.getElementsByTagName("a").length + "\n";
    res = res + "La dirección del ultimo enlace: " + window.history.back() + "\n";
    res = res + "Numero de enlaces que hay en el segundo parrafo: " + document.getElementsByTagName("p").item(1).getElementsByTagName('a').length + "\n";
    res = res + "El color de fondo de la pagina: " + document.body.style.backgroundColor + "\n";
    res = res + "El tama\u00f1o es: " + tamPar + " y color del parrafo de clase conclusion: " + txtColor + "\n";
    res = res + "El titulo de la pagina: " + document.title + "\n";
    return alert(res);
}