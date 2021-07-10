/* un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
    * nombre del duenio
    * valor del arreglo
    * tiempo que tarda el arreglo (en horas)
    * lista de repuestos necesarios

el duenio del taller quiere saber
    1. cual es el arreglo mas caro y los repuestos que necetia
    2. todos los arreglos para personas que se llamen `juan`
    3. el precio total los arreglos */

const arreglos = [
    {
        nombre: 'Juan',
        valor: 100,
        tiempo: 1,
        repuestos: ['repuesto 1', 'repuesto 2']
    },
    {
        nombre: 'Pepe',
        valor: 200,
        tiempo: 2,
        repuestos: ['repuesto 1', 'repuesto 2']
    },
    {
        nombre: 'Juan',
        valor: 300,
        tiempo: 3,
        repuestos: ['repuesto 1', 'repuesto 2', 'repuesto 3', 'repuesto 4']
    }
];

// Busco el arreglo mas caro
const masCaro =  arreglos.map(arreglo => ({
    nombre: arreglo.nombre,
    valor: arreglo.valor,
})).sort((a, b) => b.valor - a.valor)[0]; // Ordena de mayor a menor

// Busco los arreglos de Juan
const arreglosJuan = arreglos.filter(arreglo => arreglo.nombre === 'Juan');

// Inicio con 0 y voy sumando el valor de cada arreglo
const totalArreglos = arreglos.reduce((total, arreglo) => total + arreglo.valor, 0);

console.log(`El arreglo mas caro es de ${masCaro.nombre} con un valor de ${masCaro.valor}`);

console.log(`Los arreglos de Juan son ${arreglosJuan.reduce(cant => cant+=1, 0)}`);

console.log(`El total de los arreglos es ${totalArreglos}`);