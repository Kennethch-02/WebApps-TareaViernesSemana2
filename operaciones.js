// Solicita la operación que el usuario desea realizar
var operacion = prompt("¿Qué operación quiere hacer? (+,-,/,*)");
// Solicita el primer número para la operación
var num1 = prompt("Ingrese un número");
// Solicita el segundo número para la operación
var num2 = prompt("Ingrese el segundo número");

// Variable para almacenar el resultado de la operación
var resultado;

// Función para sumar dos números
function sumar(n1, n2) {
    // Convierte los números a float y retorna la suma
    var result = parseFloat(n1) + parseFloat(n2);
    return result;
}

// Función para restar dos números
function restar(n1, n2) {
    // Convierte los números a float y retorna la resta
    var result = parseFloat(n1) - parseFloat(n2);
    return result;
}

// Función para multiplicar dos números
function multiplicar(n1, n2) {
    // Convierte los números a float y retorna la multiplicación
    var result = parseFloat(n1) * parseFloat(n2);
    return result;
}

// Función para dividir dos números
function dividir(n1, n2) {
    // Convierte los números a float y retorna la división
    var result = parseFloat(n1) / parseFloat(n2);
    return result;
}

// Realiza la operación matemática según la selección del usuario
if (operacion == "+") {
    resultado = sumar(num1, num2);
} else if (operacion == "-") {
    resultado = restar(num1, num2);
} else if (operacion == "*") {
    resultado = multiplicar(num1, num2);
} else if (operacion == "/") {
    resultado = dividir(num1, num2);
} else {
    // Muestra un mensaje de error si la operación no es válida
    alert("¡La información ingresada es incorrecta!");
}

// Obtener el elemento div con id "result"
var resultDiv = document.getElementById("result");
// Mostrar el resultado de la operación en el div
resultDiv.innerHTML = "El resultado es " + resultado;
