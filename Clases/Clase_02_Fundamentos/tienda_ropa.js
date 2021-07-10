/*
Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
prendas, para eso se tienen los datos
    precioDePrenda (que ronda entre los 1500 y 3000 pesos)
    porcentajeDeAumento (que ronda entre el 25-100% )
    precioFinal (precioDePrenda con el aumento agregado)
Ademas, implementar las siguiente funcionalidades:
    El programa debe informar en pantalla el precio final
    El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los $4000
*/

let precioDePrenda = 2000 // Precio de prenda, entre 1500 y 3000 pesitos
let porcentajeDeAumento = 100 // Porcentaje entre 25 y 100%
let precioFinal = precioDePrenda + (precioDePrenda * (porcentajeDeAumento/100))
let message = `Precio final de prenda: $${precioFinal}.`

let exceso = precioFinal > 4000 // true si Exede los $4000
if (exceso){
    message += ' Precio excedido.'
}

console.log(message)