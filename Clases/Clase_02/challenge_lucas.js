/*
Plus mejora de galletitas_ema.js
Don lucasrod#4422 dijo:
    te animas a hacer un programa que sea capaz de analizar que ingredientes le faltan a Ema? sabiendo que:
    - Un  receta contiene X cantidad de ingredientes
    - El objeto Ema contiene X cantidad de ingredientes en stock (pueden tanto tener o no tener los ingredientes de receta)
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

// Obtengo array de propiedades de "receta"
let receta_props = Object.getOwnPropertyNames(receta)

// Exploro array y chequeo si existe como propiedad en "Ema"
// Si no existe, lo agrego e inicializo en 0
receta_props.map((prop) => {
  if (!Ema.hasOwnProperty(prop)){
    Ema[prop] = 0
  }
})

console.log(Ema)