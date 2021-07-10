/* Recopilación de datos personales */

// Esta función obtiene los datos de una persona y los devuelve. (Se podría usar window.prompt para obtenerlos)

function obtenerDatosPersonales() {

    // Se obtienen los datos de alguna forma
    let nombre = "Pepe";
    let apellido = "Pipo";
    let edad = 99;
    let profesion = "Programador";
    let animeFavorito = "Evangelion";

    // TODO: Devolver esta información en una estructura de datos.
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        profesion: profesion,
        animeFavorito: animeFavorito
    }
}


let datosPersonales = obtenerDatosPersonales();

// Imprimir los datos obtenidos
console.log(datosPersonales);

// TODO: Imprimir la profesión de la persona
console.log(datosPersonales.profesion)

// TODO: Agregar el campo "procesado" y asignarle el valor "true" e imprimir todos los datos nuevamente.
datosPersonales.procesado = true;
console.log(datosPersonales);