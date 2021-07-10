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
Reescribir la función programa del insiso anterior para que use async y await
*/

async function programa() {
    try{
        const resultado = await dividirNumeros(10, 0)
        console.log(resultado)
    }
    catch(error){
        console.log(error.message)
    }
}

programa();


