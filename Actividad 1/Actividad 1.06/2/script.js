function parImpar() {
    var numero = document.getElementById("txt").value,
        resultado = numero % 2;

    if (resultado == 0) {
        return alert("El numero digitado es par");
    } else {
        return alert("El numero digitado es impar");
    }
}