function verificarBeca() {
    let age = parseInt(document.getElementById("age").value);
    let titulo = document.getElementById("titulo").value.toLowerCase();
    let paro = document.getElementById("paro").value.toLowerCase();

let message = "";

if ((age >= 18 && titulo === "si") || paro === "si") {
    message = "Tienes derecho a la beca.";
  } else {
    message = "No cumples los requisitos para la beca.";
  }

  document.getElementById("message").innerText = message;

}