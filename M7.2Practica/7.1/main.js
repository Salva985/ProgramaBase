function main() {
    let esPrimo = false;
    let numero = Number(prompt("escoge un numero: "));

    if (isNaN(numero)) {
        alert("introduzca un numero valido mayor que 1.")
        return;
    }

    if (numero > 1) {
        esPrimo = calcularPrimo(numero);
    }

    alert(esPrimo)
}


function calcularPrimo(n) {
    let esPrimo = true;
    let i = 2;

    while (esPrimo && i < n) {
        if (n % i == 0) {
            esPrimo = false;
        }
        i++;
    }
    return esPrimo;
}
