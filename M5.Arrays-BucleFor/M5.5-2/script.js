const nombres = ['Ana', 'Luis', 'Pedro', 'María', 'Carlos'];

function buscarNombre() {
  let entrada = document.getElementById("nombreInput").value.trim().toLowerCase();
  
  let encontrado = false;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].toLowerCase() === entrada) {
      encontrado = true;
    }
  }

  if (encontrado) {
    document.getElementById("resultado").innerText = "Sí, " + entrada + " está en la lista.";
  } else {
    document.getElementById("resultado").innerText = "No, " + entrada + " no está en la lista.";
  }
}