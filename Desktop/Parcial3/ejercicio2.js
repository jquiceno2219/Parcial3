const casas = [];
let a = 1;
while (a != 0){

let id = prompt("Ingrese el ID del producto");
let name = prompt("Ingrese el nombre del inmueble");
let date = prompt("Indique la fecha");
let address = prompt("Ingrese la dirección");
let price = prompt("Ingrese el precio de venta");


casas.push({
    id : id,
    name : name,
    date : date,
    address : address,
    price : price,
})

a = prompt("Desea continuar ingresando casas? \n1. Continuar. \n0. Terminar");
}

alert("En la consola verá las casas disponibles.")

for (let x = 0; x < casas.length; x++) {
    console.log(casas[x]);
}
let clients = [];

let clientID = prompt("Ingrese el ID del inmueble por el que desea pujar");
let clientDate = prompt("Ingrese la fecha");
let clientPrice = prompt("Ingrese su precio de puja");

clients.push({
    id : clientID,
    clientDate : clientDate,
    clientPrice : clientPrice,
})

mayor = 0;

for(x = 0; x < arreglo.lenght; x++){
    if (clients[x].clientPrice > mayor)
    {
        mayor = arreglo[i].clientPrice;
    };
}
 
console.log("La oferta ganadora es:", mayor);