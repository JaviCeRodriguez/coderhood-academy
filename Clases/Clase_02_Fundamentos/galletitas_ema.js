/*
Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
    - 3 huevos
    - 1 barra de chocolate
    - 0.5 kilos de harina
    - 5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar   
*/

// Ingredientes para la receta
const receta = {
    huevos: 3,
    barra_chocolate: 1,
    harina_kg: 0.5,
    azucar_cda: 5
}

// Ingredientes que tiene Ema en stock
let Ema = {
    huevos: 5,
    harina_kg: 0,
    azucar_cda: 5
}

let state_huevos = Ema.huevos - receta.huevos >= 0
let state_barra = Ema.barra_chocolate - receta.barra_chocolate >= 0
let state_harina = Ema.harina_kg - receta.harina_kg >= 0
let state_azucar = Ema.azucar_cda - receta.azucar_cda >= 0

if (state_huevos && state_barra && state_harina && state_azucar){ // Si tiene todos los ingredientes
    console.log('Podés cocinar Ema!')
} else { // Caso en donde no cumple con los req., te dice que le falta a Ema
    if (!state_huevos){
        console.log(`Faltan ${receta.huevos - Ema.huevos} huevos`)
    }
    if (!state_barra){
        console.log(`Faltan ${receta.barra_chocolate - Ema.barra_chocolate} barritas de chocolate`)
    }
    if (!state_harina){
        console.log(`Faltan ${receta.harina_kg - Ema.harina_kg} Kg de harina`)
    }
    if (!state_azucar){
        console.log(`Faltan ${receta.azucar_cda - Ema.azucar_cda} cucharadas de azucar`)
    }
}