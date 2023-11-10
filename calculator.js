document.getElementById("calculate").addEventListener("click", function() {
    // Get input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var outputType = document.querySelector('input[name="output"]:checked').value;
    
    // Perform calculation
    var result;
    if (operator === "add") {
        result = num1 + num2;
    } else if (operator === "subtract") {
        result = num1 - num2;
    } else if (operator === "multiply") {
        result = num1 * num2;
    } else if (operator === "divide") {
        if (num2 === 0) {
            result = "Error: Division by zero";
        } else {
            result = num1 / num2;
        }
    } else if (operator === "exponent") {
        result = Math.pow(num1, num2);
    } else if (operator === "modulus") {
        result = num1 % num2;
    } else if (operator === "sqrt") {
        if (num1 < 0) {
            result = "Error: Imaginary number";
        } else {
            result = Math.sqrt(num1);
        }
    }

    // Display result based on outputType
    if (outputType === "float") {
        document.getElementById("result").textContent = "Result: " + result.toFixed(2);
    } else {
        document.getElementById("result").textContent = "Result: " + Math.round(result);
    }
});
