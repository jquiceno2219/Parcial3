let is_coop_open = true;

function time(ms) {

    return new Promise( (resolve, reject) => {
 
       if(is_coop_open){
          setTimeout(resolve,ms);
       }
 
       else{
          reject(console.log("Cooperative is closed"))
       }
     });
}


let userType = prompt("Digite su tipo de usuario. \n1. Cliente de la cooperativa. \n2.Cliente Externo.")
let attention = prompt("Digite el tipo de atención necesitada. \n1. Pago. \n2. Asesoría.")

if (attention == 1) {
    payment = prompt("Qué tipo de pago necesita realizar? \n1. Cuota. \n2. Administración.")
}

let user = {
    userType : userType == 1 ? "Preferencial" : "Cliente externo",
    attention : attention == 1 ? "Pago" : "Asesoría",
};

async function cooperativa(){
    try{
    if (user.userType == "Preferencial") {
        await time(0000)
        console.log(`Usuario ${user.userType}, con atención ${user.attention}, siga a la caja.`)   
    } else {

    if (user.attention == "Pago") {
        if (payment == 1) {
        await time(2000)
        console.log(`Usuario ${user.userType}, con atención ${user.attention}, siga a la caja Cuota.`)   }
    else {
        await time(2000)
        console.log(`Usuario ${user.userType}, con atención ${user.attention}, siga a la caja Administración.`) 
    }}
     else {
        await time(3000)
        console.log(`Usuario ${user.userType}, con atención ${user.attention}, siga a la caja Asesoría.`)   }
    }

    }
    catch(error){
        console.log("Cliente se fue")
         }
}

cooperativa()