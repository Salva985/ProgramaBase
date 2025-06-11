function verificarDatos() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

let message = "";

if (age >= 18) {
    message = name + " " + surname + " es mayor de edad"
} else {
    message = name + " " + surname + " es menor de edad"
}


document.getElementById("mostrar").innerText = message;
}