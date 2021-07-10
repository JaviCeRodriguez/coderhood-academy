/*
- Crear una funcion 'randomError' que tenga 50% de posibilidades de disparar un error con mensaje "Error catastrofico"
- En caso de no disparar un error, la funcion debe devolver un mensaje "Todo ok"
- Capturar el error e informar 'Error capturado'
*/

const randomError = () => {
    return Math.random() > 0.5;
}

try {
    if (randomError()) {
        throw new Error("Error catastrofico");
    }
    console.log('Todo Ok')
}
catch (e) {
    console.log(`Error capturado: ${e.message}`);
}
