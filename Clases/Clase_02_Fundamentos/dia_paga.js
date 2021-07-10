/*
En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
final del dia (Todos cobran igual)
Se tienen los siguientes datos obligatorios
    repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
    esFeriado (true si es Feriado, false si no)
    gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
    porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
    sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
    gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
    demas)
Se sabe que:
    En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
    dias normales, es del 65%
*/

let repartidores = 5
let esFeriado = false
let gananciaDelDia = 40000
let porcentajeParaSueldos = 65

if (esFeriado){
    porcentajeParaSueldos = 80
}

let sueldoNetoDeRepartidor = (gananciaDelDia * (porcentajeParaSueldos/100))/repartidores
let gananciaDelComercioFinal = gananciaDelDia - (sueldoNetoDeRepartidor * repartidores)

console.log(`Cada repartidor gana ${sueldoNetoDeRepartidor}.`)
console.log(`La ganancia del comercio es de ${gananciaDelComercioFinal}`)