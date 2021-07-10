/*
Crear una funcion que recibe tres parametros chance, mensaje y resultado.
    - chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
            si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
    - mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
    - resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
            funcion si no arrojo un error
*/

const esError = (chance, mensaje, resultado) => {
    if (Math.random()*10 < chance) {
        throw new Error(mensaje);
    }
    return resultado;
}

try{
    console.log(esError(80, "Error de prueba", "Resultado de prueba"));
}
catch(e){
    console.log(e.message);
}