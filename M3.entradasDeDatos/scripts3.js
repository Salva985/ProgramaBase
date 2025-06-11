function realizarOperaciones() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);


    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);

    alert("Suma: " + suma);
    alert("Resta: " + resta);
    alert("Multiplicación: " + multiplicacion);
    alert("División: " + division);

    document.getElementById("suma").innerText = "El resultat de la suma és: " + suma;
    document.getElementById("resta").innerText = "El resultat de la resta és: " + resta;
    document.getElementById("multiplicacion").innerText = "El resultat de la multiplicació és: " + multiplicacion;
    document.getElementById("division").innerText = "El resultat de la divisió és: " + division;


}