function checkMonth() {
    let monthNumber = parseInt(document.getElementById("month").value);

    let message = ""

    switch (monthNumber) {
        case 1:
            message = "El mes de enero tiene 31 días";
            break;
        case 2:
            message = "El mes de febrero tiene 28 o 29 días";
            break;
        case 3:
            message = "El mes de marzo tiene 31 días";
            break;
        case 4:
            message = "El mes de abril tiene 30 días";
            break;
        case 5:
            message = "El mes de mayo tiene 31 días";
            break;
        case 6:
            message = "El mes de junio tiene 30 días";
            break;
        case 7:
            message = "El mes de julio tiene 31 días";
            break;
        case 8:
            message = "El mes de agosto tiene 31 días";
            break;
        case 9:
            message = "El mes de septiembre tiene 30 días";
            break;
        case 10:
            message = "El mes de octubre tiene 31 días";
            break;
        case 11:
            message = "El mes de noviembre tiene 30 días";
            break;
        case 12:
            message = "El mes de diciembre tiene 31 días";
            break;
        default:
            message = "Por favor, introduce un número de mes válido (1 al 12)";
    }

    document.getElementById("result").innerText = message;
}