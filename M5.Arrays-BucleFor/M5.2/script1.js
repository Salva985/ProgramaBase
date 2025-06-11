function getFrase() {
    let entrada = prompt("Cuantas palabras?");
    entrada = Number(entrada);

    if (isNaN(entrada) || entrada <= 0) {
        alert("Por favor, introduce un numero valido mayor que cero.");
    }

    const palabras = [];

    for(let i = 0; i < entrada; i++) {
        const palabra = prompt(`Introduce la palabra ${i + 1}:`);
        palabras.push(palabra);
    }
    document.getElementById("resultado").innerText =  palabras.join(" ");
}