function asignarBecas () {
    let becados = [];
    let noBecados = [];

    do {
        let nombre = prompt("Introduce tu nombre:");
        let edad = parseInt(prompt("Introduce tu edad:"));
        let titulo = prompt("¿Tienes título universitario? (si/no):").toLowerCase().charAt(0);
        let paro = prompt("¿Estás en el paro? (si/no):").toLowerCase().charAt(0);

        if ((edad >= 18 && titulo === "s") || paro === "s") {
            becados.push(nombre);
            alert(nombre + " tiene derecho. Total de " + becados.length + " de 5.")
        } else {
            noBecados.push(nombre);
            alert(nombre + " no cumple los requisitos.")
        }
     
    } while (becados.length < 5);

    alert("Lista de becados: ");
    for (let i = 0; i < becados.length; i++) {
        alert(becados[i]);
    }
    alert("Lista de NO becados: ");
    for (let i = 0; i < noBecados.length; i++) {
        alert(noBecados[i]);
    }
}