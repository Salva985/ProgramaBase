function calcularMedia() {
    let nota1 = parseFloat(prompt("Introduce la primera nota:"));
    let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
    let nota3 = parseFloat(prompt("Introduce la tercera nota:"));
  
    let media = (nota1 + nota2 + nota3) / 3;
  
    document.getElementById("resultado").innerText =
      "La media de las tres notas es: " + media.toFixed(2);
  }