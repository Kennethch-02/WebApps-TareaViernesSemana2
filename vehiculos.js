// Crear un objeto llamado carro con 5 atributos
const carro = {
    marca: "BMW",
    modelo: "ix1",
    color: "Negro",
    año: "2022",
    precio: "$50,000"
};

// Crear un objeto llamado moto con 3 atributos
const moto = {
    marca: "Yamaha",
    color: "Blanco",
    tipo: "Deportiva"
};

// Obtener el elemento div con id "cars"
var carDiv = document.getElementById("cars");
// Obtener el elemento div con id "moto"
var motocicleta = document.getElementById("moto");

// Crear mensajes con detalles de carro y moto usando template strings
var msj = `El ${carro.marca} de modelo ${carro.modelo} (${carro.año}) tiene un color ${carro.color} y cuesta ${carro.precio}.`;
var msj2 = `La moto es una ${moto.marca} ${moto.tipo} y su color es ${moto.color}.`;

// Asignar los mensajes a los divs correspondientes
carDiv.innerHTML = msj;
motocicleta.innerHTML = msj2;

// Crear un array de autos
const autos = ["Mazda", "BMW", "Honda"];
// Añadir nuevos autos al array
autos.push("Hyundai");
autos.push("Toyota");
autos.push("Ford");

// Aplicar el método sort para ordenar el array de autos
autos.sort();

// Mostrar una alerta con el contenido del array autos
alert(autos);
