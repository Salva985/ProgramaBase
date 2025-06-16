function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) return "Error: no se puede dividir"
    return a / b;
}

function modul(a, b) {
    return a % b;
}

function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let operacion = document.getElementById("operacion").value

    let resultado;

    switch (operacion) {
        case "+":
            resultado = suma(num1, num2);
            break;
        case "-":
            resultado = resta(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1 , num2)
            break;
        case "/":
            resultado = division(num1, num2);
            break;
        case "%":
            resultado = modul(num1, num2);
            break;
        default:
            resultado = "Operacion no valida."
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;

}