function calcularPrecio() {
    let edad = parseInt(document.getElementById("age").value);

    let message;

    

    if (isNaN(edad) || edad < 0) {
        message = "Por favor, introduce una edad valida."
        document.getElementById("resultado").innerText = message;
        return;
    } else if (edad < 4) {
        message = "Gratis";
    } else if (edad <= 17) {
        message = "5€";
    } else if (edad <= 64) {
        message = "10€"
    } else {
        message = "7€"
    }

    document.getElementById("resultado").innerText = message; 

}