function consultaNumero() {
    let entrada = prompt("Introduce un número:");
    let numero = Number(entrada);

    if (isNaN(numero)) {
        alert("Eso no es un numero valido.");
    } else if (numero % 2 === 0) {
        alert("El numero es par.");
    } else {
        alert("El numero es impar.")
    }
}