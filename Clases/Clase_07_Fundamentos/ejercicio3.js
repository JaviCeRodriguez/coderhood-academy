/*
Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente
lista:
let lista = [
    {
        id: 19310,
        nombre: "Bautista",
    },{
        id: 90010,
        nombre: "Ema",
    },{
        id: 00519,
        nombre: "Lucas",
    },{
        id: 00000,
        nombre: "Meison",
    }
]

La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario
elegido es el del id = 00000
Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el
retorno de la funcion pedirInformacion.
Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la
capture debe disparar un error 'NetworkError'.
Ejemplo:
function pedirUsuario(){
    // puede disparar un error, devuelve un usuario
}
function pedirInformacion(){
    let usuario = pedirUsuario(); // considerar 'pedirUsuario' p
    // el resto de la funcion
    return usuario;
}
*/

const pedirUsuario = () => {
    let lista = [
        {
            id: 19310,
            nombre: "Bautista",
        },
        {
            id: 90010,
            nombre: "Ema",
        },
        {
            id: 00519,
            nombre: "Lucas",
        },
        {
            id: 00000,
            nombre: "Meison",
        }
    ]

    let usuario = lista[Math.floor(Math.random() * lista.length)];
    if(usuario.id === 00000)
        throw new Error("ForbiddenInformation");
    return usuario;
}

const pedirInformacion = () => {
    try{
        let usuario = pedirUsuario();
        return usuario;
    }
    catch(e){
        if(e.message === "ForbiddenInformation")
            throw new Error("NetworkError");
    }
}

try{
    let usuario = pedirInformacion();
    console.log(usuario);
}
catch(e){
    console.log(e.message);
}