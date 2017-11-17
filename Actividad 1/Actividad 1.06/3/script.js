var contador = 0;

function calculoCero() {
    var numero = document.getElementById("txt").value,
        cajaTexto = document.getElementById("txt");
    if (numero != 0) {
        contador++;
        cajaTexto.value = "";
        cajaTexto.focus;
    } else {
        return alert(contador);
    }
}