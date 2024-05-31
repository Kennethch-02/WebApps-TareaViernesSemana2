// Solicita el nombre del usuario
var nombre = prompt("Dame tu nombre");
// Solicita el apellido del usuario
var apellido = prompt("Dame tu apellido");
// Solicita y verifica la fecha de nacimiento del usuario
var fechaNacimiento = obtenerFechaNacimiento();

// Función para obtener y verificar la fecha de nacimiento
function obtenerFechaNacimiento() {
    let fecha;
    let esValida = false;
    
    while (!esValida) {
        fecha = prompt("Dame tu fecha de nacimiento (YYYY-MM-DD)");
        if (validarFecha(fecha)) {
            esValida = true;
        } else {
            alert("Fecha no válida. Inténtalo de nuevo.");
        }
    }
    return fecha;
}

// Función para validar la fecha en formato YYYY-MM-DD
function validarFecha(fecha) {
    const parsedDate = Date.parse(fecha);
    const date = new Date(parsedDate);
    return !isNaN(parsedDate) && date.toISOString().slice(0, 10) === fecha;
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad(fecha) {
    const [año, mes, dia] = fecha.split('-');
    const fechaNacimiento = new Date(año, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesDif = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Función para crear un mensaje de saludo
function saludar(n, a, fn) {
    const edad = calcularEdad(fn);
    var mensaje = `Hola, me llamo ${n} ${a}, tengo ${edad} años y nací el ${fn}.`;

    if (edad >= 18) {
        mensaje += " Soy mayor de edad.";
    } else {
        mensaje += " Soy menor de edad.";
    }

    return mensaje;
}

// Obtener el elemento div con id "output"
var outputDiv = document.getElementById("output");

// Llamar a la función saludar y asignar el resultado al contenido del div
outputDiv.innerHTML = saludar(nombre, apellido, fechaNacimiento);
