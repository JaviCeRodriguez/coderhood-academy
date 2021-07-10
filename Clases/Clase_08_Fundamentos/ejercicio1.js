/*
Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), devolviendo el
mismo resultado que la función dada.
*/

function dividirNumeros(dividendo, divisor) {
    return new Promise(function (resolve, reject) {
        try{
            const resultado = dividendo / divisor
            resolve(resultado)
        }
        catch(error){
            reject(error)
        }
    })
}


/*
Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir un
mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
*/

function programa() {
    const promesa = dividirNumeros(1, 0)
    promesa
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error.message))
}

programa();


