const booking = []
let a = 1
while (a != 0){

    let pais = prompt("Ingrese su país");
    let quantity = prompt("Ingrese la cantidad de personas");
    let stayPeriod = prompt("Ingrese los días que se quedará");
    let smoke = prompt("Fuma usted o alguno de sus acompañantes (Digite si o no)");
    let animalB = false;


    if (quantity<= 2) {
        habType = "Individual";     
    } else if (quantity <= 4) {
        habType = "Doble";
    } else if (quantity <= 6) {
        habType = "Familiar";
    } else {
        habType = "No tenemos disponible";
    }

    if (habType == "Familiar") {
        let animal = prompt("Desea ingresar animal (Digite si o no)");
        let animalB = animal=="si" ? true : false;
    }

    booking.push({
        pais : pais,
        quantity : quantity,
        stayPeriod : stayPeriod,
        smoke : smoke,
        animalB : animalB,
        habType : habType,
    })

    let suma = 0;
    for (let i = 0; i < booking.length; i++) {
        suma = booking[i].quantity + suma;
        
    }
    console.log(suma);
    a = prompt("Desea continuar? \n1. Continuar. \n0. Terminar");
}
console.log(booking);