function verificarDatos() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = parseInt(document.getElementById("age").value);

let message = "";

if (age <= 5) {
    message = name + " " + surname + " preescolar"
} if (age >= 6 && age <= 11) {
    message = name + " " + surname + " primaria "
} if (age >= 12 && age <=15) {
    message = name + " " + surname + " ESO "
} if (age >= 16 && age <=17) {
    message = name + " " + surname + " Bachillerato "
} if (age >= 18) {
    message = name + " " + surname + " FP o Uni "
}


document.getElementById("mostrar").innerText = message;
}