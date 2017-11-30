function entrar() {
    user = document.getElementById("user").value;
    passwd = document.getElementById("passwd").value;
    if (!user || !passwd) {
        alert("Debe de ingresar todos los datos");
        return false;
    } else {
        if (user == "admin" && passwd == "Admin123") {
            return true;
        } else if (user == "editor" && passwd == "Dos123") {
            return true;
        } else if (user == "user" && passwd == "Tres123") {
            return true;
        } else {
            alert("Usuario o contraseña incorrectas");
            return false;
        }
    }
}