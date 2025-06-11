function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value.trim();

    let result = ""

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "the number are wrong"
    } else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "You cannot divide with 0"
            } else {
            result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator. Use +, -, * o /"
    }
    document.getElementById("showResult").innerText = `Result: ${result}`;
}}