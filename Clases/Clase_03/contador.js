/*
Sea una variable numerica entera y positiva 'limite':
    Recorrer desde 0 hasta limite
    Imprimir al final del programa la cantidad de numeros impares
    Imprimir al final del programa la cantidad de numeros menores de limite / 2
*/

let limite = 18
let cont_impares = 0
let cont_menores = 0

for (let i = 0; i <= limite; i++){
    if (i % 2 != 0){
        cont_impares++
    }
    if (i < limite/2){
        cont_menores++
    }
}

console.log(`Cantidad de impares: ${cont_impares}`)
console.log(`Cantidad de numeros menores a ${limite/2}: ${cont_menores}`)