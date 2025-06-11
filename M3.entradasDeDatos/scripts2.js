function mostrarDatos() {
    let name = prompt ("introduzca su nombre")
    let surname = prompt ("introduzca su apellido")
    let age = prompt ("introduzca su edad")


console.log(name);
console.log(surname);
console.log(age)

alert("Nombre:" + name);
alert("Apellido:" + surname);
alert("Edad:" + age);

document.getElementById("mostrarName").innerText = "Nombre:" + name;
document.getElementById("mostrarSurname").innerText = "Apellido:" + surname;
document.getElementById("mostrarAge").innerText = "Edad:" + age;
}