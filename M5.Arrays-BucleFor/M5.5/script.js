function asignarBecas() {
  const becados = [];

  do {
    let nombre = prompt("Introduce tu nombre:");
    let edad = parseInt(prompt("Introduce tu edad:"));
    let titulo = prompt("¿Tienes título universitario? (si/no):").toLowerCase();
    let paro = prompt("¿Estás en el paro? (si/no):").toLowerCase();

    if ((edad >= 18 && titulo === "s") || paro === "s") {
      becados.push(nombre);
      alert(
        nombre +
          " tiene derecho a beca. Total becas: " +
          becados.length +
          " de 5."
      );
    } else {
      alert(nombre + " no cumple los requisitos para la beca.");
    }
  } while (becados.length < 5);

  alert("¡Se han asignado las 5 becas! Becados:\n" + becados);
}
