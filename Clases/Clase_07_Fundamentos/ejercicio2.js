/*
Cuando queremos descargar informacion de internet, varias cosas pueden ir mal:
desconexion de internet, corte de luz, perdida de informacion por culpa de seres
desconocidos. Crear una funcion llamada pedirInformacion que no recibe parametros y
que devuelve el siguiente objeto que corresponde a los datos de un usuario: 
let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

La funcion pedirInformacion tiene:
    - 25% de posibilidades de disparar un error por desconexion de internet, el nombre del
        error es 'NetworkError'
    - 18% de posibilidades de disparar un error por error del servidor, el nombre del error es
        'InternalError'
    - 10% de posibilidades de disparar un error por una anomalia, el nombre del error es
        'AlienError'

Cuando se llame a la funcion, informar:
    - Si hubo un error, informar segun el mensaje del error:
        NetworkError => informar "Hubo un problema en la conexion de internet"
        InternalError => informar "Hubo un error interno en el el servidor"
        AlienError => informar "Una anomalia intercepto la informacion"
    - Si no hubo un error, informar el objeto persona
*/

const pedirInformacion = () => {
    let probabilidad = Math.random();
    if (probabilidad < 0.1) {
        throw new Error('AlienError: Una anomalia intercepto la informacion');
    } else if (probabilidad < 0.18) {
        throw new Error('InternalError: Hubo un error interno en el el servidor');
    } else if (probabilidad < 0.25) {
        throw new Error('NetworkError: Hubo un problema en la conexion de internet');
    } else {
        return {
            id: 19310,
            nombre: "Bautista",
            apellido: "Di Santo"
        };
    }
}

try{
    let persona = pedirInformacion();
    console.log(persona);
}
catch(error){
    console.log(error.message);
}

