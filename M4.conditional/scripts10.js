function getZodiacSign() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let sign = "";

    const daysInMonth = {
        1: 31,  
        2: 29,  // Febrero (consideramos hasta 29)
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      };
  
    if (isNaN(day) || isNaN(month) || month < 1 || month > 12 || day < 1 || day > daysInMonth[month]) {
      document.getElementById("result").innerText = "Por favor introduce un día (1-31) y un mes (1-12) válidos.";
      return;
    }
  
    switch (month) {
      case 1:
        sign = day <= 19 ? "Capricornio" : "Acuario";
        break;
      case 2:
        sign = day <= 18 ? "Acuario" : "Piscis";
        break;
      case 3:
        sign = day <= 20 ? "Piscis" : "Aries";
        break;
      case 4:
        sign = day <= 19 ? "Aries" : "Tauro";
        break;
      case 5:
        sign = day <= 20 ? "Tauro" : "Géminis";
        break;
      case 6:
        sign = day <= 20 ? "Géminis" : "Cáncer";
        break;
      case 7:
        sign = day <= 22 ? "Cáncer" : "Leo";
        break;
      case 8:
        sign = day <= 22 ? "Leo" : "Virgo";
        break;
      case 9:
        sign = day <= 22 ? "Virgo" : "Libra";
        break;
      case 10:
        sign = day <= 22 ? "Libra" : "Escorpión";
        break;
      case 11:
        sign = day <= 21 ? "Escorpión" : "Sagitario";
        break;
      case 12:
        sign = day <= 21 ? "Sagitario" : "Capricornio";
        break;
      default:
        sign = "Por favor introduce una fecha válida.";
    }
  
    document.getElementById("result").innerText = `Tu signo del zodíaco es: ${sign}`;
  }